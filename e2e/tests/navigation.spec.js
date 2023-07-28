import { test, expect } from '../fixtures';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.describe('Desktop only', () => {
    test.skip(({ isMobile }) => isMobile, 'desktop only!');

    test('should be fixed to bottom of viewport ', async ({ page }) => {
      await page.locator('footer').scrollIntoViewIfNeeded();

      await expect(page.locator('[data-e2e="navigation"]')).toBeInViewport();
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

  test.describe('Mobile only', async () => {
    test.skip(({ isMobile }) => !isMobile, 'mobile only!');

    test('hamburger menu should be visible', async ({ page }) => {
      await expect(page.locator('[data-e2e="hambuger"]')).toBeInViewport();
    });

    test('should open and close hamburger', async ({ page }) => {
      await page.locator('[data-e2e="hambuger"]').click();

      await expect(page.locator('[data-e2e="navigation"]')).toBeInViewport();

      await page.locator('[data-e2e="hambuger"]').click();

      await expect(
        page.locator('[data-e2e="navigation"]')
      ).not.toBeInViewport();
    });

    test('stop page being scrollable', async ({ page }) => {
      await page.locator('[data-e2e="hambuger"]').click();

      await expect(page.locator('body')).toHaveCSS('overflow', 'hidden');
    });

    test('should scroll page to skills section and close menu', async ({
      page,
    }) => {
      await page.locator('[data-e2e="hambuger"]').click();

      await page.locator('[data-e2e="navigation-skills"]').click();

      await expect(page.locator('#skills')).toBeInViewport();

      await expect(page.locator('[data-e2e="navigation"]')).not.toHaveClass(
        'navigation--active'
      );
    });

    test('should hide hamburger menu if changing to desktop viewport', async ({
      page,
    }) => {
      await page.locator('[data-e2e="hambuger"]').click();

      await page.setViewportSize({
        width: 1920,
        height: 1080,
      });

      await expect(page.locator('[data-e2e="hambuger"]')).not.toBeInViewport();
    });
  });
});
