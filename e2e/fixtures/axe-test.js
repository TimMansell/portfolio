import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

export const checkA11y = async ({ page }, use) => {
  const checkA11y = async () => {
    const { violations } = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    expect(violations).toEqual([]);
  };

  await use(checkA11y);
};
