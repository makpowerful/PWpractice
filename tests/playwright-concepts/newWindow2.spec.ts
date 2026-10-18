import { test, expect } from '@playwright/test';

test('Test new window case', async ({ page, context }) => {
const window2promise = context.waitForEvent('page')
    const window3promise = context.waitForEvent('page')

    await page.goto("https://www.linkedin.com/")
    await page.getByRole('link', { name: 'Top Content' }).first().click({ modifiers: ['Control'] });

    const window2 = await window2promise
    await window2.waitForEvent('load');

    let title = window2.title
    await console.log(title)

    await window2.getByRole('link', { name: 'People' }).first().click();

    await page.getByRole('link', { name: 'Learning' }).first().click();

    await window2.goBack();

    // 1. Setup the listener and the action together
    const [window3] = await Promise.all([
        context.waitForEvent('page'),
        window2.getByRole('link', { name: 'Games' }).first().click({ modifiers: ['Control'] })
    ]);

    // 2. Wait for the new tab to finish loading
    await window3.waitForEvent('load');

    // 3. Extract the title safely
    const title3 = await window3.title();
    console.log(title3);


    title = window3.title
    await console.log(title)

});