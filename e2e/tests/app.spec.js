import { test } from '../fixtures';

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
});
