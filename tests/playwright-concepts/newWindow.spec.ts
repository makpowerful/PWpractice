import { test, expect } from '@playwright/test';

test('Test new window case', async ({ page, context }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    // 1. Setup the asynchronous event listener gatekeeper for a new tab
    const newTabPromise = context.waitForEvent('page');

    // 2. Trigger the action that causes the popup window to spawn
    await page.getByRole('link', { name: 'Open Tab' }).click();

    // 3. Await the completed new Page object payload structure
    const newTab = await newTabPromise;

    // 4. Execute assertions cleanly inside the new tab scope
    await newTab.waitForLoadState('load');
    await expect(newTab).toHaveURL(/.*qaclickacademy/);
    //await newTab.getByRole('button', { name: 'Download PDF' }).click();

    let title = page.title();
    await console.log(title);

    // 5. Clean up system memory immediately!
    await newTab.close();
    await context.close();

});

test('Handle multiple tabs one by one', async ({ page, context }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    // Setup listener for the 1st new tab, trigger it, and resolve it
    const tab1Promise = context.waitForEvent('page');
    await page.locator('#firstButton').click();
    const tab1 = await tab1Promise;

    // Setup listener for the 2nd new tab, trigger it, and resolve it
    const tab2Promise = context.waitForEvent('page');
    await page.locator('#secondButton').click();
    const tab2 = await tab2Promise;

    // You can interact with both independently now!
    console.log(await tab1.title());
    console.log(await tab2.title());

    await tab1.close();
    await tab2.close();
});


test('Test new window', async({page, context})=>{
    await page.goto("https://www.globalsqa.com/demo-site/draganddrop/");
     // 1. Setup the listener to catch the newly spawned page window
    const newWindowPromise = context.waitForEvent('page');

    // 2. Perform a Shift + Click to force open the link in a new window
    await page.getByRole('link', { name: 'About' }).first().click({ modifiers: ['Shift'] });

    // 3. Capture and wait for the new window to load
    const newWindow = await newWindowPromise;
    await newWindow.waitForLoadState('load');

    // 4. Assert you are on the correct new window page
    await expect(newWindow).toHaveURL(/.*about/);
    console.log("New Window Title:", await newWindow.title());

    // Clean up by closing the new window
    await newWindow.close();
});

test('test right click',async({page,context})=>{
    await page.goto("https://www.globalsqa.com/demo-site/draganddrop/");
    const newWindowPromise = context.waitForEvent('page');
    await page.getByRole('link', { name: 'About' }).first().click({ modifiers: ['Control'] });

    const newWindow = await newWindowPromise;
    await newWindow.waitForLoadState('load');
});