import {expect, test} from '@playwright/test'
import { POManager } from '../pageObjects/POManger';

test('Test Event Creation', async ({ page }) => {
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    const homePage = poManager.getHomePage();
    const eventPage = poManager.getEventPage();
    await loginPage.goto();
    await loginPage.logintoApp();
    await loginPage.checkPageTitle();
    await homePage.createEvent();
    await eventPage.filloutForm();

});