import { test, expect } from "@playwright/test";

test("homepage has SARVOS in title and heading", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/SARVOS/);
  await expect(page.locator("h1")).toContainText("SARVOS");
});
