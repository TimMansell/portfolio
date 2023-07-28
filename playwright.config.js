import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

const { CI, TEST_PORT, TEST_WORKERS, UPDATE_SNAPSHOTS, GREP } = process.env;

const workers = TEST_WORKERS ? parseInt(TEST_WORKERS, 10) : '75%';
const port = TEST_PORT ? parseInt(TEST_PORT, 10) : 1337;
const testDir = './e2e';
const snapshotPathTemplate =
  '{testDir}/{testFileDir}/snapshots/{arg}-{projectName}-{platform}{ext}';
const timeout = 90000;
const retries = 2;
const localRetries = 0;

const config = defineConfig({
  testDir,
  snapshotPathTemplate,
  timeout,
  expect: {
    timeout: 10000,
  },
  fullyParallel: true,
  forbidOnly: !!CI,
  retries: CI ? retries : localRetries,
  workers,
  reporter: CI ? 'dot' : [['list'], ['html', { open: 'never' }]],
  preserveOutput: CI ? 'never' : 'failures-only',
  use: {
    actionTimeout: 0,
    baseURL: `http://localhost:${port}`,
    trace: CI ? 'off' : 'on-first-retry',
  },
  projects: [
    {
      name: 'desktop-chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: 'desktop-firefox',
      use: {
        ...devices['Desktop Firefox'],
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: 'desktop-webkit',
      use: {
        ...devices['Desktop Safari'],
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: 'desktop-qhq',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 2560, height: 1440 },
      },
    },
    {
      name: 'laptop',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1366, height: 768 },
      },
    },
    {
      name: 'tablet-landscape',
      use: {
        ...devices['iPad (gen 6) landscape'],
        isMobile: false,
      },
    },
    {
      name: 'tablet',
      use: {
        ...devices['iPad (gen 6)'],
      },
    },
    {
      name: 'iphone',
      use: {
        ...devices['iPhone 13'],
      },
    },
    {
      name: 'android',
      use: {
        ...devices['Galaxy S8'],
      },
    },
  ],
  webServer: {
    command: `yarn serve`,
    port,
    timeout,
    reuseExistingServer: false,
  },
  updateSnapshots: UPDATE_SNAPSHOTS ? 'all' : 'missing',
  ...(GREP && { grep: new RegExp(`${GREP}`) }),
});

module.exports = config;
