import {test,Locator,expect, Page} from '@playwright/test';

export class EventPO{
    currentDateTime: string;
    eventTitle: string;
    readonly titleTextbox : Locator;
    readonly describeTextArea : Locator;
    readonly categoryDD : Locator;
    readonly cityTextbox : Locator;
    readonly venueTextArea : Locator;
    readonly priceSpinButton : Locator;
    readonly totalSeatsSpinButton : Locator;
    readonly eventTextBox : Locator;
    readonly addEventButton : Locator;
    readonly page : Page;

    constructor(page : Page){
        this.page = page;
        this.currentDateTime = new Date().toISOString();      
        this.eventTitle = "Test"+this.currentDateTime;
        this.titleTextbox =page.getByRole('textbox', { name: 'Title*' });
        this.describeTextArea = page.getByRole('textbox', { name: 'Describe the event…' });
        this.categoryDD = page.getByRole('combobox', {name : 'Category*'});
        this.cityTextbox = page.getByRole('textbox', { name: 'City*' });
        this.venueTextArea = page.getByRole('textbox', { name: 'Venue*' });
        this.priceSpinButton = page.getByRole('spinbutton', { name: 'Price ($)*' });
        this.totalSeatsSpinButton = page.getByRole('spinbutton', { name: 'Total Seats*' });
        this.eventTextBox = page.getByLabel('Event Date & Time*');
        this.addEventButton = page.getByRole('button', {name : 'Add Event'});

    }

    async filloutForm(){
        
    await this.page.getByRole('heading', {name : 'New Event'}).isVisible

    await this.titleTextbox.fill(this.eventTitle);
    await this.describeTextArea.fill("Test Description");
    await this.categoryDD.selectOption("Sports");
    await this.cityTextbox.fill("Bengaluru");
    await this.venueTextArea.fill("Test Venue");
    await this.priceSpinButton.fill("100");
    await this.totalSeatsSpinButton.fill("5");
    await this.eventTextBox.fill("2026-12-12T11:11");
    await this.addEventButton.click();

    await this.page.locator("//tr//td/span[contains(text(),'"+this.eventTitle+"')]").isVisible;
    }


    

}