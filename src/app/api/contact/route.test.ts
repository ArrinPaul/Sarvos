import { afterEach, describe, expect, it, vi } from "vitest";
import { POST } from "./route";

const validBody = {
  name: "Jane Doe",
  email: "jane@company.com",
  service: "Website or custom software",
  description: "We need a resilient ingestion pipeline for telemetry.",
};

function makeRequest(body: unknown, contentType = "application/json") {
  return new Request("http://localhost:3000/api/contact", {
    method: "POST",
    headers: { "content-type": contentType },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

function configureEmail() {
  vi.stubEnv("RESEND_API_KEY", "re_test_key");
  vi.stubEnv("CONTACT_NOTIFICATION_EMAIL", "studio@example.com");
  vi.stubEnv("CONTACT_FROM_EMAIL", "enquiries@example.com");
}

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("POST /api/contact", () => {
  it("rejects non-JSON content types", async () => {
    const res = await POST(makeRequest("x=1", "text/plain"));
    expect(res.status).toBe(415);
  });

  it("rejects invalid payloads with field errors", async () => {
    const res = await POST(makeRequest({ ...validBody, email: "nope" }));
    expect(res.status).toBe(400);
  });

  it("rejects honeypot submissions", async () => {
    const res = await POST(makeRequest({ ...validBody, website_hp: "bot" }));
    expect(res.status).toBe(400);
  });

  it("does not report success when email delivery is not configured", async () => {
    vi.stubEnv("RESEND_API_KEY", "");
    vi.spyOn(console, "info").mockImplementation(() => {});
    const res = await POST(makeRequest(validBody));
    const json = await res.json();
    expect(res.status).toBe(503);
    expect(json.success).toBe(false);
    expect(json.delivered).toBe(false);
  });

  it("sends the enquiry through Resend and reports delivery", async () => {
    configureEmail();
    vi.spyOn(console, "info").mockImplementation(() => {});
    const fetchMock = vi
      .fn()
      .mockResolvedValue(new Response("{}", { status: 200 }));
    vi.stubGlobal("fetch", fetchMock);

    const res = await POST(makeRequest(validBody));
    const json = await res.json();

    expect(res.status).toBe(200);
    expect(json.delivered).toBe(true);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("https://api.resend.com/emails");
    const sent = JSON.parse(init.body);
    expect(sent.to).toEqual(["studio@example.com"]);
    expect(sent.reply_to).toBe("jane@company.com");
  });

  it("reports failure when the provider rejects the message", async () => {
    configureEmail();
    vi.spyOn(console, "info").mockImplementation(() => {});
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(new Response("{}", { status: 500 }))
    );
    const res = await POST(makeRequest(validBody));
    expect(res.status).toBe(502);
    expect((await res.json()).success).toBe(false);
  });

  it("does not log personal data", async () => {
    configureEmail();
    const info = vi.spyOn(console, "info").mockImplementation(() => {});
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(new Response("{}", { status: 200 }))
    );
    await POST(makeRequest(validBody));
    const logged = JSON.stringify(info.mock.calls);
    expect(logged).not.toContain("jane@company.com");
    expect(logged).not.toContain("Jane Doe");
  });
});
