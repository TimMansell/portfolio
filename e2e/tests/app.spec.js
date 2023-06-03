import { test, expect } from '../fixtures';

test.describe('App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should not have any @a11y issues', async ({ checkA11y }) => {
    await checkA11y();
  });

  test('should match @page @snapshot', async ({ checkPageSnapshot }) => {
    await checkPageSnapshot();
  });

  test('clicking on learn more button should scroll page to profile section', async ({
    page,
  }) => {
    await expect(page.locator('#profile')).not.toBeInViewport();

    await page.locator('[data-e2e="learn-more-btn"]').click();

    await expect(page.locator('#profile')).toBeInViewport();
  });
});
