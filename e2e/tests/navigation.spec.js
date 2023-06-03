import { test, expect } from '../fixtures';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should be fixed to bottom of viewport ', async ({ page }) => {
    await page.locator('footer').scrollIntoViewIfNeeded();

    await expect(page.locator('[data-e2e="navigation"')).toBeInViewport();
  });

  test('should scroll page to profile section', async ({ page }) => {
    await page.locator('[data-e2e="navigation-profile"]').click();

    await expect(page.locator('#profile')).toBeInViewport();
  });

  test('should scroll page to skills section', async ({ page }) => {
    await page.locator('[data-e2e="navigation-skills"]').click();

    await expect(page.locator('#skills')).toBeInViewport();
  });

  test('should scroll page to older skills section', async ({ page }) => {
    await page.locator('[data-e2e="navigation-older-skills"]').click();

    await expect(page.locator('#older-skills')).toBeInViewport();
  });

  test('should scroll page to stack section', async ({ page }) => {
    await page.locator('[data-e2e="navigation-stack"]').click();

    await expect(page.locator('#stack')).toBeInViewport();
  });

  test('should scroll page to portfolio section', async ({ page }) => {
    await page.locator('[data-e2e="navigation-portfolio"]').click();

    await expect(page.locator('#portfolio')).toBeInViewport();
  });

  test('should scroll page to testimonials section', async ({ page }) => {
    await page.locator('[data-e2e="navigation-testimonials"]').click();

    await expect(page.locator('#testimonials')).toBeInViewport();
  });

  test('should scroll page to contact section', async ({ page }) => {
    await page.locator('[data-e2e="navigation-contact"]').click();

    await expect(page.locator('#contact')).toBeInViewport();
  });

  test('hamburger menu should not be visible', async ({ page }) => {
    await expect(page.locator('[data-e2e="hambuger"]')).not.toBeInViewport();
  });
});
