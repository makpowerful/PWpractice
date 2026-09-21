# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: sessionStore.spec.ts >> Shopping Cart Session Tests >> Opening stored session
- Location: tests\sessionStore.spec.ts:21:9

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('//li[contains(@class,\'items\')]')
Expected: 1
Received: 0

Call log:
  - Expect "toHaveCount" locator('//li[contains(@class,\'items\')]') with timeout 5000ms
  - waiting for locator('//li[contains(@class,\'items\')]')
    13 × locator resolved to 0 elements
       - unexpected value "0"
  - Target page, context or browser has been closed

```

# Test source

```ts
  1  | import { expect, test } from '@playwright/test';
  2  | 
  3  | const authFile = 'playwright/.auth/user.json';
  4  | test.use({ storageState: authFile });
  5  | 
  6  | test.describe.serial('Shopping Cart Session Tests', () => {
  7  |     
  8  |     test('Session store test', async ({ page }) => {
  9  |         await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  10 |         
  11 |         // 🔑 CHANGED: Using exact element IDs instead of getByRole
  12 |         await page.locator('#userEmail').fill("mak_powerful@yahoo.co.in");
  13 |         await page.locator('#userPassword').fill("Arthas1@3");
  14 |         
  15 |         await page.getByRole('button', { name: 'Login' }).click();
  16 | 
  17 |         await page.waitForURL(/.*dashboard/);
  18 |         await page.context().storageState({ path: authFile });
  19 |     });
  20 | 
  21 |     test('Opening stored session', async ({ page }) => {
  22 |         await page.goto('https://rahulshettyacademy.com/client/#/dashboard/cart');
  23 |         
  24 |         const items = page.locator("//li[contains(@class,'items')]");
> 25 |         await expect(items).toHaveCount(1);
     |                             ^ Error: expect(locator).toHaveCount(expected) failed
  26 |         console.log(await items.allTextContents());
  27 |         await page.pause();
  28 |     });
  29 | });
  30 | 
```