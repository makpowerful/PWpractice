# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: alertPopup.spec.ts >> Test alert pop up practice
- Location: tests\alertPopup.spec.ts:5:5

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://rahulshettyacademy.com/AutomationPractice/", waiting until "load"
  - operation was aborted: Test ended.

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | 
  4  | 
  5  | test('Test alert pop up practice', async ({ page }) => {
  6  | 
  7  |     page.on('dialog', async dialog => {
  8  |         // Extract and assert the text payload inside the alert box
  9  |         expect(dialog.message()).toBe('Hello , share this practice page and share your knowledge');
  10 | 
  11 |         // Dynamically handle different dialog types: 'alert', 'confirm', or 'prompt'
  12 |         console.log(`Intercepted dialog type: ${dialog.type()}`);
  13 | 
  14 |         // Accept the alert (simulates clicking the 'OK' confirmation button)
  15 |         await dialog.accept();
  16 |     });
  17 | 
> 18 |     page.goto("https://rahulshettyacademy.com/AutomationPractice/");
     |          ^ Error: page.goto: Test ended.
  19 |     page.getByRole('button', { name: 'Alert' }).click();
  20 | 
  21 | });
```