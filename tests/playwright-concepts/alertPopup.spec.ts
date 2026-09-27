import { test, expect } from '@playwright/test';



test('Test alert pop up practice', async ({ page }) => {
    //For passing only one use page.once('dailog',....)
    page.on('dialog', async dialog => {
        // Extract and assert the text payload inside the alert box
        expect(dialog.message()).toBe('Hello , share this practice page and share your knowledge');

        // Dynamically handle different dialog types: 'alert', 'confirm', or 'prompt'
        console.log(`Intercepted dialog type: ${dialog.type()}`);

        // Accept the alert (simulates clicking the 'OK' confirmation button)
        await dialog.accept();
    });

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.getByRole('button', { name: 'Alert' }).click();

});