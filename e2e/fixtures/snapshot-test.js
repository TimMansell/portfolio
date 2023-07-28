import { expect } from '@playwright/test';
import { SnapshotPage } from '../pages/snapshot';

const setupSnapshot = (page) => {
  const settings = {
    animations: 'disabled',
    fullPage: true,
    scale: 'css',
    type: 'jpeg',
    quality: 40,
  };

  return async ({ selector }) => {
    const buffer = await page.locator(selector).screenshot(settings);

    await expect.soft(buffer).toMatchSnapshot();
  };
};

export const checkPageSnapshot = async ({ page }, use) => {
  const testSnapshot = setupSnapshot(page);

  const checkSnapshot = async (options) => {
    const cPage = new SnapshotPage(page, options);

    await cPage.injectCSS();
    await cPage.loadImages();
    await cPage.blurContent();

    await testSnapshot(cPage);
  };

  await use(checkSnapshot);
};
