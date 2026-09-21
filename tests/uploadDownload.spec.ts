import {test, expect} from '@playwright/test'
import path from 'path';

test('Test Upload Download of files', async({page})=>{

    await page.goto("https://rahulshettyacademy.com/upload-download-test/");
     // Path to your file (replace with your actual filename)
    const filePath = 'C:/Users/kalam/Downloads/Download.xlsx'; 
    await page.locator('#fileinput').setInputFiles(filePath);
    
    // 1. Setup the listener first (NO 'await' here)
    const downloadPromise = page.waitForEvent('download');
    
    // 2. Click the button to trigger the action
    await page.locator('#downloadButton').click(); 

    const download = await downloadPromise;

    // 3. Optional: Save the downloaded file to a specific folder
    // This saves it into your project folder under a 'downloads' directory
    const suggestedFileName = download.suggestedFilename();
    const savePath = path.join('C:/Users/kalam/Downloads', suggestedFileName);
    await download.saveAs(savePath);

    // 4. Assert / Verify that the download was successful
    expect(download.suggestedFilename()).toBe('download.xlsx'); 

});