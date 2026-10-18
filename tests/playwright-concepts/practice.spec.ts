import { test } from '@playwright/test';

test('try route.abort', async ({ page }) => {
    // Standard glob patterns to abort the most common image formats
    await page.route(/\.(png|jpg|jpeg|svg|gif|webp|avif)/i, route => route.abort());

    
    await page.goto('https://webpt.com');
    //await page.pause()
});
