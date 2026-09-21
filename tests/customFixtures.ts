import { test as base } from '@playwright/test';
import { POManager } from '../pageObjects/POManger'; // Verify this relative path matches your directory setup
import { LoginPO } from '../pageObjects/LoginPO';
import { HomePO } from '../pageObjects/HomePO';
import { EventPO } from '../pageObjects/EventPO';

// 1. Define a custom TypeScript type for your page objects
type PageObjectFixtures = {
    loginPage: LoginPO;
    homePage: HomePO;
    eventPage: EventPO;
};

// 2. Extend the base test configuration block
export const test = base.extend<PageObjectFixtures>({
    loginPage: async ({ page }, use) => {
        const poManager = new POManager(page);
        await use(poManager.getLoginPage());
    },
    
    homePage: async ({ page }, use) => {
        const poManager = new POManager(page);
        await use(poManager.getHomePage());
    },
    
    eventPage: async ({ page }, use) => {
        const poManager = new POManager(page);
        await use(poManager.getEventPage());
    }
});

// Re-export the standard expect library so you can access it from this same file
export { expect } from '@playwright/test';
