import {test} from '@playwright/test'

// 1. Correctly define an array of objects
const JSObject = [
    { val: "Prime Video" },
    { val: "Customer Service" },
    { val: "Today's Deals" }
];

for(let data1 of JSObject){
test(`Checking test run for ${data1.val}`,async({page})=>{

    await page.goto("https://www.amazon.com");
    await page.getByRole('link', {name : data1.val}).click;

    let title : string = await page.title();
    console.log(title);




});
}
