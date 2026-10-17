import { test, expect } from "@playwright/test";

test.describe("SARVOS Website Core Journeys", () => {
  test("homepage renders branding, navigation, and hero tabs", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/SARVOS/);
    await expect(page.locator("h1")).toContainText(
      "We build software for real-world problems."
    );

    // Check header branding and navigation
    await expect(page.locator("header")).toBeVisible();
    await expect(
      page.getByRole("link", { name: "SARVOS" }).first()
    ).toBeVisible();

    // Verify hero section preview controls
    const previewButtons = page.locator("button", {
      hasText: /Core Ingestion Engine|Spatial CAD|Autonomous Triage/,
    });
    if ((await previewButtons.count()) > 0) {
      await previewButtons.first().click();
      await expect(
        page.locator("text=Core Ingestion Engine").first()
      ).toBeVisible();
    }
  });

  test("all routes render with status 200 and proper headings", async ({
    page,
  }) => {
    const routes = [
      { path: "/work", heading: "Built with a purpose." },
      { path: "/work/core-ingestion-engine", heading: "Core Ingestion Engine" },
      {
        path: "/services",
        heading: "Disciplined engineering for complex systems.",
      },
      {
        path: "/services/websites-custom-software",
        heading: "Websites & Custom Software",
      },
      { path: "/about", heading: "Small enough to work closely." },
      { path: "/insights", heading: "Engineering Notes" },
      {
        path: "/insights/kafka-telemetry-queues",
        heading: "Re-architecting multi-tenant telemetry queues",
      },
      { path: "/contact", heading: "Let's discuss what needs building." },
    ];

    for (const route of routes) {
      const response = await page.goto(route.path);
      expect(response?.status()).toBe(200);
      await expect(
        page.getByRole("heading", { name: route.heading, exact: false }).first()
      ).toBeVisible();
    }
  });

  test("theme toggle switches between light and dark modes", async ({
    page,
  }) => {
    await page.goto("/");
    const themeToggle = page
      .getByRole("button", {
        name: /Switch to (light|dark) theme|Toggle theme/i,
      })
      .first();
    await expect(themeToggle).toBeVisible();

    const html = page.locator("html");
    const initialClass = (await html.getAttribute("class")) || "";

    // Toggle theme
    await themeToggle.click();
    await page.waitForTimeout(300);

    const afterToggleClass = (await html.getAttribute("class")) || "";
    expect(afterToggleClass).not.toEqual(initialClass);
  });

  test("FAQ accordion opens and closes", async ({ page }) => {
    await page.goto("/");
    const accordionBtn = page.locator('button[id^="accordion-btn-"]').first();
    await expect(accordionBtn).toBeVisible();

    const initialExpanded = await accordionBtn.getAttribute("aria-expanded");

    await accordionBtn.click();
    await expect(accordionBtn).toHaveAttribute(
      "aria-expanded",
      initialExpanded === "true" ? "false" : "true"
    );

    // Toggle again
    await accordionBtn.click();
    await expect(accordionBtn).toHaveAttribute(
      "aria-expanded",
      initialExpanded || "false"
    );
  });

  test("contact form client-side validation displays required field errors", async ({
    page,
  }) => {
    await page.goto("/contact");
    const submitButton = page.getByRole("button", {
      name: /Submit Technical Enquiry/i,
    });
    await expect(submitButton).toBeVisible();

    await submitButton.click();
    await expect(
      page.locator("text=Name must be at least 2 characters")
    ).toBeVisible();
    await expect(
      page.locator("text=Please provide a valid email address")
    ).toBeVisible();
  });
});
