export const SnapshotPage = class SnapshotPage {
  constructor(page, options) {
    this.page = page;
    this.options = {
      selector: 'body',
      ...options,
    };
    this.selector = this.options.selector;
  }

  async injectCSS() {
    const { page } = this;

    await page.addStyleTag({
      content: `[data-blur-page] {
        position: relative;
      }

      [data-blur-page]::after {
        position: absolute;
        content: '';
        inset: 0;
        backdrop-filter: blur(1px);
        z-index: 100000;
      }

      [data-mask-background] {
        display: flex;
        aspect-ratio: 16/9;
        background-color: var(--colour-1));
      }`,
    });
  }

  async blurContent() {
    const { page, selector } = this;

    await page
      .locator(selector)
      .evaluate((element) => element.setAttribute('data-blur-page', true));
  }

  async loadImages() {
    const { page } = this;

    for (const img of await page.locator('img').all()) {
      await img.evaluate((element) => element.setAttribute('loading', 'eager'));
    }
  }
};
