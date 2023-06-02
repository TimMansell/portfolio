import { test as base } from '@playwright/test';
import { checkA11y } from './axe-test';
import { checkPageSnapshot } from './snapshot-test';

export { expect } from '@playwright/test';

export const test = base.extend({
  checkA11y,
  checkPageSnapshot,
});
