import { test, expect } from '../fixtures';

test.describe('Goto Top', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('goto top button should show', async ({ page }) => {
    await page.locator('footer').scrollIntoViewIfNeeded();

    await expect(page.locator('[data-e2e="goto-top-btn"]')).toBeInViewport();
  });

  test('clicking on goto top button should scroll to intro section', async ({
    page,
  }) => {
    await page.locator('footer').scrollIntoViewIfNeeded();

    await page.locator('[data-e2e="goto-top-btn"]').click();

    await expect(page.locator('#intro')).toBeInViewport();
  });
});
