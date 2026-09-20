import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'on-failure' }],
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],
  use: {
    // 1. Tell the browser to launch fully maximized
    launchOptions: {
      args: ['--start-maximized'],
    },
    // 2. Clear default viewport so it scales to the maximized screen
    viewport: null, 
    /* Base URL to use in actions like `await page.goto('')`. */
     //baseURL: 'https://jatin99.github.io/Playwright-demo-app/',
      screenshot: 'only-on-failure',
      trace: 'retain-on-failure',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    //trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { // 1. Specify the raw browser channel instead of a device preset
        browserName: 'chromium', 
        
        // 2. Explicitly remove the viewport constraints
        viewport: null,
        
        // 3. Move the launch options down here to be safe
        launchOptions: {
          args: ['--start-maximized']
        }
       },
      
    },

    {
      name: 'firefox',
      use: { // 1. Switch to clean browser session instead of devices['Desktop Firefox']
        browserName: 'firefox', 
        viewport: null,
        launchOptions: {
          // Firefox uses an exact same flag for maximized mode
          args: ['--start-maximized'] 
        }
        },
    },

    {
      name: 'webkit',
      use: {// 2. Switch to clean webkit engine session
        browserName: 'webkit', 
        
        // ⚠️ Webkit (Safari) does NOT support the '--start-maximized' flag.
        // To make it fill the screen, explicitly specify a desktop resolution:
        viewport: { width: 1920, height: 1080 } 
      },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
