import { test } from '@playwright/test'

test('Test response and request', async ({ page }) => {

    // 1. What you can pull from an outbound REQUEST
    page.on('request', request => {
        console.log(request.url());         // The full endpoint URL
        console.log(request.method());      // GET, POST, PUT, DELETE
        console.log(request.headers());     // Authentication and content metadata
        console.log(request.postData());    // The data body sent to the server
        console.log(request.resourceType());// 'image', 'script', 'stylesheet', 'xhr'
    });

    // 2. What you can pull from an inbound RESPONSE
    page.on('response', async response => {
        console.log(response.status());     // 200, 404, 500, etc.
        console.log(response.statusText()); // 'OK', 'Internal Server Error'
        console.log(response.headers());    // Server response headers

        if (response.ok() && response.headers()['content-type']?.includes('application/json')) {
            console.log(await response.json()); // The actual data returned
        }
    });

    await page.goto('https://www.google.com/', { waitUntil: 'domcontentloaded' });

})