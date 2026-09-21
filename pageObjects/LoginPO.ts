import { Locator, expect, Page } from '@playwright/test';


export class LoginPO{
    readonly emailTextBox : Locator;
    readonly passowrdTextBox : Locator;
    readonly signInButton : Locator;
    readonly page : Page;

    constructor(page : Page){
        this.page = page;
        this.emailTextBox = page.getByRole('textbox', { name: 'Email' });
        this.passowrdTextBox = page.getByRole('textbox', { name: 'password' });
        this.signInButton = page.getByRole('button', { name: 'Sign In' });
    }

    async goto(){
        await this.page.goto("https://eventhub.rahulshettyacademy.com/login");
    }

    async logintoApp(){
        const { ADMIN_USERNAME: email, ADMIN_PASSWORD: password } = process.env;

        if (!email || !password) {
            throw new Error('ADMIN_USERNAME and ADMIN_PASSWORD must be set in the environment.');
        }

        await this.emailTextBox.fill(email);
        await this.passowrdTextBox.fill(password);
        await this.signInButton.click();
    }

    async checkPageTitle(){
        let title = await this.page.title();
         console.log(title);
         await expect(this.page).toHaveTitle(title);
    }
}
