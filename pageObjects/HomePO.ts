import {test,Locator,expect, Page} from '@playwright/test';


export class HomePO{
    //readonly headerClickButtons : Locator;

    readonly page : Page;

    constructor(page : Page){
        this.page = page;
        //this.headerClickButtons = page.getByRole('button', {name : 'Admin'});

    }




    private async clickHeaderButton(value: string){
        await this.page.getByRole('button', {name : value}).click();
    }

    private async clickSubHeaderButton(value: string){
        await this.page.getByRole('link', {name : value}).first().click();
    }

    async createEvent(){
        await this.clickHeaderButton("Admin");
        await this.clickSubHeaderButton("Manage Events");

    }

}
