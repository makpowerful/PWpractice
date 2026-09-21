import { expect, test } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

test.describe.serial('Shopping Cart Session Tests', () => {
    
    // 🔏 Test 1: Start with a clean browser to perform login and save session
    test('Session store test', async ({ page }) => {
        await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
        
        await page.locator('#userEmail').fill("mak_powerful@yahoo.co.in");
        await page.locator('#userPassword').fill("Arthas1@3");
        await page.getByRole('button', { name: 'Login' }).click();

        await page.waitForURL(/.*dashboard/);
        await page.getByRole('button', { name: 'Add To Cart' }).first().click();
        await page.context().storageState({ path: authFile });
    });

    // 🧪 Test 2: Injects the session file strictly for this block
    test.describe('Authenticated Block', () => {
        // 👇 Moved test.use INSIDE this nested describe block
        test.use({ storageState: authFile });
                
        test('Opening stored session', async ({ page }) => {
            await page.goto('https://rahulshettyacademy.com/client/#/dashboard/cart');
            
            const items = page.locator("//li[contains(@class,'items')]");
            await expect(items).toHaveCount(1);
            console.log(await items.allTextContents());
        });
    });
});
