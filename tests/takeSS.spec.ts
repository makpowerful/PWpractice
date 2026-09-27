import {test} from '@playwright/test'

test('Take Screesnshot attempt', async({page})=>{

    await page.goto("https://www.facebook.com");
    await page.screenshot({ path: "C:/Users/kalam/OneDrive/Desktop/PracticeWorkSpace/screenshot.png" });
    
    //*************Link count****************************
    let al = await page.locator("//a").all();
    console.log(al.length);


    //*********Select link from mobile*******************
    await page.goto("https://www.amazon.com");
    await page.getByRole('link', {name : 'Prime Video'}).first().click();
    await page.close();

});