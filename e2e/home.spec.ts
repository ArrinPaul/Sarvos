import { test, expect } from "@playwright/test";

test("homepage has SARVOS in title and brand header", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/SARVOS/);
  await expect(page.locator("header")).toContainText("SARVOS");
  await expect(page.locator("h1")).toContainText(
    "We build software for real-world problems."
  );
});
