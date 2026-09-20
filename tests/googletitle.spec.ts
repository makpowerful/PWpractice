import {expect, test} from '@playwright/test';

test('Test tile google', async({page})=>{

    await page.goto("https://www.google.com");

    let title = await page.title();
    await expect(page).toHaveTitle(/Google/i);

    await page.close();

});