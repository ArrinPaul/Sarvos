import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ProjectInquiryForm } from "./project-inquiry-form";

describe("ProjectInquiryForm Component", () => {
  it("renders all required form fields", () => {
    render(<ProjectInquiryForm />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/work email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/service area/i)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/project overview & technical requirements/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /submit technical enquiry/i })
    ).toBeInTheDocument();
  });

  it("validates required fields on empty submit", async () => {
    render(<ProjectInquiryForm />);
    const submitBtn = screen.getByRole("button", {
      name: /submit technical enquiry/i,
    });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(
        screen.getByText(/name must be at least 2 characters\./i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/please provide a valid email address\./i)
      ).toBeInTheDocument();
    });
  });

  it("handles successful submission response cleanly", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        success: true,
        delivered: false,
        message: "Enquiry validated and recorded.",
        data: { referenceId: "SRV-TEST" },
      }),
    });

    render(<ProjectInquiryForm />);
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "Engineering Lead" },
    });
    fireEvent.change(screen.getByLabelText(/work email/i), {
      target: { value: "lead@acme.com" },
    });
    fireEvent.change(
      screen.getByLabelText(/project overview & technical requirements/i),
      {
        target: {
          value:
            "We need a high-throughput event ingestion pipeline in Go and Kafka.",
        },
      }
    );

    const submitBtn = screen.getByRole("button", {
      name: /submit technical enquiry/i,
    });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(
        screen.getByText(/enquiry successfully processed/i)
      ).toBeInTheDocument();
      expect(screen.getByText(/SRV-TEST/i)).toBeInTheDocument();
    });
  });
});
