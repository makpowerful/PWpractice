// 1. Change the import target to point cleanly to your custom fixtures file
import { test, expect } from './customFixtures'; 

// 2. Pass your custom page objects directly into the parameter block context
test('Test Event Creation', async ({ loginPage, homePage, eventPage }) => {
    
    // 3. Execute your atomic workflow commands immediately on line one!
    await loginPage.goto();
    await loginPage.logintoApp();
    await loginPage.checkPageTitle();
    await homePage.createEvent();
    await eventPage.filloutForm();
    
});
