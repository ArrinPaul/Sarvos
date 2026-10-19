import { expect, test } from "@playwright/test";

test.describe("Accessibility and resilience", () => {
  test("skip link is the first tab stop and moves focus to main content", async ({
    page,
    isMobile,
  }) => {
    test.skip(isMobile, "Keyboard tab order is verified on desktop.");
    await page.goto("/");
    await page.keyboard.press("Tab");
    const skip = page.getByRole("link", { name: /skip to main content/i });
    await expect(skip).toBeFocused();
    await expect(skip).toBeVisible();
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/#main$/);
    await expect(page.getByRole("main")).toBeVisible();
  });

  test("pages expose exactly one main landmark and one banner", async ({
    page,
  }) => {
    for (const path of ["/", "/services", "/work", "/contact"]) {
      await page.goto(path);
      await expect(page.getByRole("main")).toHaveCount(1);
      await expect(page.getByRole("banner")).toHaveCount(1);
    }
  });

  test("mobile menu moves focus in, closes on Escape and restores focus", async ({
    page,
    isMobile,
  }) => {
    test.skip(!isMobile, "Mobile navigation only renders on small viewports.");
    await page.goto("/");
    const toggle = page.getByRole("button", { name: /open menu/i });
    await toggle.click();
    const dialog = page.getByRole("dialog", { name: /mobile navigation/i });
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole("link").first()).toBeFocused();
    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
    await expect(
      page.getByRole("button", { name: /open menu/i })
    ).toBeFocused();
  });

  test("unknown routes show the recovery page", async ({ page }) => {
    const response = await page.goto("/does-not-exist");
    expect(response?.status()).toBe(404);
    await expect(
      page.getByRole("link", { name: /return to studio home/i })
    ).toBeVisible();
  });

  test("contact form never reports success when delivery is unavailable", async ({
    page,
  }) => {
    // The production server in CI/dev has no email provider configured, so the
    // real API route must answer with an error rather than a false success.
    await page.goto("/contact");
    await page.getByLabel(/^name/i).fill("Test User");
    await page.getByLabel(/work email/i).fill("test@example.com");
    await page
      .getByLabel(/project overview/i)
      .fill("Automated test enquiry, please ignore.");
    await page
      .getByRole("button", { name: /submit technical enquiry/i })
      .click();
    await expect(page.getByRole("alert").first()).toBeVisible();
    await expect(page.getByText(/enquiry successfully processed/i)).toHaveCount(
      0
    );
  });
});
