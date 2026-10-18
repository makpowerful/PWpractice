import {test} from '@playwright/test'

test.describe('Hover functionality', ()=>{
test('Test Hover', async({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.getByRole('button',{name : 'Mouse Hover'}).hover();
    await page.getByRole('link',{name : 'Top'}).isVisible();
})});


test('Test Drag and Drop', async({page})=>{

    await page.goto("https://www.globalsqa.com/demo-site/draganddrop/");
    // 1. Define the frame locator
    const frame = page.frameLocator("iframe[src*='photo-manager']");

    // 2. Query the alt text INSIDE that frame locator
    const source = frame.getByAltText('The peaks of High Tatras');
    
    // 3. Locate the trash destination inside the frame
    const destination = frame.locator('#trash');

    // 4. Execute the drag and drop action
    await source.dragTo(destination);
    
});

test('Test Drag example 2', async ({ page }) => {

    page.goto("https://seleniumbase.io/other/drag_and_drop");

    let sourceElement = await page.locator('#drag1')
    let destination = await page.locator('#div1')

    await sourceElement.dragTo(destination)
});