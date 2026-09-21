# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: newWindow.spec.ts >> Test new window
- Location: tests\newWindow.spec.ts:51:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: browserContext.waitForEvent: Target page, context or browser has been closed
```

# Page snapshot

```yaml
- generic [ref=f1e2]:
  - banner [ref=f1e3]:
    - generic [ref=f1e7]:
      - generic:
        - generic:
          - generic:
            - button [ref=f1e8] [cursor=pointer]
            - textbox "Search..." [ref=f1e9]
        - link "pinterest" [ref=f1e10] [cursor=pointer]:
          - /url: https://in.pinterest.com/globalsqa/
        - link "twitter" [ref=f1e11] [cursor=pointer]:
          - /url: https://twitter.com/Global_SQA
        - link "linkedin" [ref=f1e12] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/globalsqa
        - link "google" [ref=f1e13] [cursor=pointer]:
          - /url: https://plus.google.com/103761557396023531439/posts
        - link "facebook" [ref=f1e14] [cursor=pointer]:
          - /url: https://facebook.com/globalsqa
        - generic [ref=f1e15]: contact@globalsqa.com
    - generic [ref=f1e19]:
      - link [ref=f1e22] [cursor=pointer]:
        - /url: https://www.globalsqa.com/
        - img "GlobalSQA" [ref=f1e23]
      - generic [ref=f1e24]:
        - list:
          - listitem [ref=f1e25]:
            - link "About" [active] [ref=f1e26] [cursor=pointer]:
              - /url: https://www.globalsqa.com/about/
          - listitem [ref=f1e27]:
            - link "CheatSheets" [ref=f1e28] [cursor=pointer]:
              - /url: https://www.globalsqa.com/cheatsheets/
          - listitem [ref=f1e29]:
            - link "Free Ebooks" [ref=f1e30] [cursor=pointer]:
              - /url: https://www.globalsqa.com/free-ebooks/
          - listitem [ref=f1e32]:
            - link "Tester’s Hub" [ref=f1e33] [cursor=pointer]:
              - /url: https://www.globalsqa.com/testers-hub/
            - text:  
          - listitem [ref=f1e35]:
            - link "Contact Us" [ref=f1e36] [cursor=pointer]:
              - /url: https://www.globalsqa.com/contact-us/
    - text:    
  - generic [ref=f1e37]:
    - generic [ref=f1e41]:
      - generic [ref=f1e42]:
        - link "Home" [ref=f1e43] [cursor=pointer]:
          - /url: https://www.globalsqa.com/
        - link "Demo Testing Site" [ref=f1e45] [cursor=pointer]:
          - /url: https://www.globalsqa.com/demo-site/
        - link "Drag And Drop" [ref=f1e47] [cursor=pointer]:
          - /url: https://www.globalsqa.com/demo-site/draganddrop/
      - heading "Drag And Drop" [level=1] [ref=f1e50]
    - generic [ref=f1e53]:
      - generic [ref=f1e54]:
        - generic [ref=f1e55]:
          - heading "Interaction" [level=4] [ref=f1e56]
          - list [ref=f1e58]:
            - listitem [ref=f1e59]:
              - link "Sortable" [ref=f1e60] [cursor=pointer]:
                - /url: https://www.globalsqa.com/demo-site/sorting/
            - listitem [ref=f1e62]:
              - link "Drag And Drop" [ref=f1e63] [cursor=pointer]:
                - /url: https://www.globalsqa.com/demo-site/draganddrop/
            - listitem [ref=f1e65]:
              - link "Select Elements" [ref=f1e66] [cursor=pointer]:
                - /url: https://www.globalsqa.com/demo-site/select-elements/
            - listitem [ref=f1e68]:
              - link "Draggable Boxes" [ref=f1e69] [cursor=pointer]:
                - /url: https://www.globalsqa.com/demo-site/draggableboxes/
            - listitem [ref=f1e71]:
              - link "DropDown Menu" [ref=f1e72] [cursor=pointer]:
                - /url: https://www.globalsqa.com/demo-site/select-dropdown-menu/
        - generic [ref=f1e74]:
          - heading "Widgets" [level=4] [ref=f1e75]
          - list [ref=f1e77]:
            - listitem [ref=f1e78]:
              - link "Tooltip" [ref=f1e79] [cursor=pointer]:
                - /url: https://www.globalsqa.com/demo-site/tooltip/
            - listitem [ref=f1e81]:
              - link "Sliders" [ref=f1e82] [cursor=pointer]:
                - /url: https://www.globalsqa.com/demo-site/sliders/
            - listitem [ref=f1e84]:
              - link "Spinner" [ref=f1e85] [cursor=pointer]:
                - /url: https://www.globalsqa.com/demo-site/spinner/
            - listitem [ref=f1e87]:
              - link "DatePicker" [ref=f1e88] [cursor=pointer]:
                - /url: https://www.globalsqa.com/demo-site/datepicker/
            - listitem [ref=f1e90]:
              - link "Progress Bar" [ref=f1e91] [cursor=pointer]:
                - /url: https://www.globalsqa.com/demo-site/progress-bar/
            - listitem [ref=f1e93]:
              - link "Dialog Boxes" [ref=f1e94] [cursor=pointer]:
                - /url: https://www.globalsqa.com/demo-site/dialog-boxes/
            - listitem [ref=f1e96]:
              - link "Auto Complete" [ref=f1e97] [cursor=pointer]:
                - /url: https://www.globalsqa.com/demo-site/auto-complete/
            - listitem [ref=f1e99]:
              - link "Accordion And Tabs" [ref=f1e100] [cursor=pointer]:
                - /url: https://www.globalsqa.com/demo-site/accordion-and-tabs/
        - iframe [ref=f1e103]
        - generic [ref=f1e106]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=f1e108]: Discover more
          - link "Selenium Automation Course" [ref=f1e109] [cursor=pointer]
          - link "Testing Site Demos" [ref=f1e114] [cursor=pointer]
          - link "Drag and Drop Tools" [ref=f1e119] [cursor=pointer]
          - link "Discover Top Destinations" [ref=f1e124] [cursor=pointer]
          - link "AngularJS Protractor Practice" [ref=f1e129] [cursor=pointer]
          - link "Compare Ski Passes" [ref=f1e134] [cursor=pointer]
          - link "Software Testing Resources" [ref=f1e139] [cursor=pointer]
          - link "Web Automation Tools" [ref=f1e144] [cursor=pointer]
        - iframe [ref=f1e150]
      - generic [ref=f1e152]:
        - list [ref=f1e153]:
          - tab "Photo Manager" [ref=f1e154] [cursor=pointer]
          - tab "Accepted Elements" [ref=f1e155] [cursor=pointer]
          - tab "Propagation" [ref=f1e156] [cursor=pointer]
        - paragraph [ref=f1e159]:
          - iframe [ref=f1e160]:
            - generic [ref=f6e1]:
              - generic [ref=f6e2]:
                - list [ref=f6e3]:
                  - listitem [ref=f6e4]:
                    - heading "High Tatras" [level=5] [ref=f6e5]
                    - img "The peaks of High Tatras" [ref=f6e6]
                    - link "View larger" [ref=f6e7] [cursor=pointer]:
                      - /url: images/high_tatras.jpg
                    - link "Delete image" [ref=f6e8] [cursor=pointer]:
                      - /url: link/to/trash/script/when/we/have/js/off
                  - listitem [ref=f6e9]:
                    - heading "High Tatras 2" [level=5] [ref=f6e10]
                    - img "The chalet at the Green mountain lake" [ref=f6e11]
                    - link "View larger" [ref=f6e12] [cursor=pointer]:
                      - /url: images/high_tatras2.jpg
                    - link "Delete image" [ref=f6e13] [cursor=pointer]:
                      - /url: link/to/trash/script/when/we/have/js/off
                  - listitem [ref=f6e14]:
                    - heading "High Tatras 3" [level=5] [ref=f6e15]
                    - img "Planning the ascent" [ref=f6e16]
                    - link "View larger" [ref=f6e17] [cursor=pointer]:
                      - /url: images/high_tatras3.jpg
                    - link "Delete image" [ref=f6e18] [cursor=pointer]:
                      - /url: link/to/trash/script/when/we/have/js/off
                  - listitem [ref=f6e19]:
                    - heading "High Tatras 4" [level=5] [ref=f6e20]
                    - img "On top of Kozi kopka" [ref=f6e21]
                    - link "View larger" [ref=f6e22] [cursor=pointer]:
                      - /url: images/high_tatras4.jpg
                    - link "Delete image" [ref=f6e23] [cursor=pointer]:
                      - /url: link/to/trash/script/when/we/have/js/off
                - heading "Trash Trash" [level=4] [ref=f6e25]:
                  - generic [ref=f6e26]: Trash
                  - text: Trash
              - generic [ref=f6e27]:
                - paragraph [ref=f6e28]: You can delete an image either by dragging it to the Trash or by clicking the trash icon.
                - paragraph [ref=f6e29]: You can "recycle" an image by dragging it back to the gallery or by clicking the recycle icon.
                - paragraph [ref=f6e30]: You can view larger image by clicking the zoom icon. Selenium Practice dialog widget is used for the modal window.
          - insertion [ref=f1e161]
  - generic:
    - insertion:
      - iframe [ref=f1e163]
  - generic [ref=f1e164]:
    - generic [ref=f1e166]:
      - generic [ref=f1e167]:
        - heading "Footer Widget Area 1" [level=3] [ref=f1e168]
        - paragraph [ref=f1e169]:
          - link "Assign a widget to this area now." [ref=f1e170] [cursor=pointer]:
            - /url: https://www.globalsqa.com/wp-admin/widgets.php
      - generic [ref=f1e171]:
        - heading "Footer Widget Area 2" [level=3] [ref=f1e172]
        - paragraph [ref=f1e173]:
          - link "Assign a widget to this area now." [ref=f1e174] [cursor=pointer]:
            - /url: https://www.globalsqa.com/wp-admin/widgets.php
      - generic [ref=f1e175]:
        - heading "Footer Widget Area 3" [level=3] [ref=f1e176]
        - paragraph [ref=f1e177]:
          - link "Assign a widget to this area now." [ref=f1e178] [cursor=pointer]:
            - /url: https://www.globalsqa.com/wp-admin/widgets.php
      - generic [ref=f1e179]:
        - heading "Footer Widget Area 4" [level=3] [ref=f1e180]
        - paragraph [ref=f1e181]:
          - link "Assign a widget to this area now." [ref=f1e182] [cursor=pointer]:
            - /url: https://www.globalsqa.com/wp-admin/widgets.php
    - generic [ref=f1e187]:
      - link "pinterest" [ref=f1e188] [cursor=pointer]:
        - /url: https://in.pinterest.com/globalsqa/
      - link "twitter" [ref=f1e189] [cursor=pointer]:
        - /url: https://twitter.com/Global_SQA
      - link "linkedin" [ref=f1e190] [cursor=pointer]:
        - /url: https://www.linkedin.com/company/globalsqa
      - link "google" [ref=f1e191] [cursor=pointer]:
        - /url: https://plus.google.com/103761557396023531439/posts
      - link "facebook" [ref=f1e192] [cursor=pointer]:
        - /url: https://facebook.com/globalsqa
      - generic [ref=f1e193]:
        - text: "Website Designed & Developed by :"
        - link "GlobalSQA" [ref=f1e194] [cursor=pointer]:
          - /url: https://www.globalsqa.com
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Test new window case', async ({ page, context }) => {
  4  | 
  5  |     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  6  |     // 1. Setup the asynchronous event listener gatekeeper for a new tab
  7  |     const newTabPromise = context.waitForEvent('page');
  8  | 
  9  |     // 2. Trigger the action that causes the popup window to spawn
  10 |     await page.getByRole('link', { name: 'Open Tab' }).click();
  11 | 
  12 |     // 3. Await the completed new Page object payload structure
  13 |     const newTab = await newTabPromise;
  14 | 
  15 |     // 4. Execute assertions cleanly inside the new tab scope
  16 |     await newTab.waitForLoadState('load');
  17 |     await expect(newTab).toHaveURL(/.*qaclickacademy/);
  18 |     //await newTab.getByRole('button', { name: 'Download PDF' }).click();
  19 | 
  20 |     let title = page.title();
  21 |     await console.log(title);
  22 | 
  23 |     // 5. Clean up system memory immediately!
  24 |     await newTab.close();
  25 |     await context.close();
  26 | 
  27 | });
  28 | 
  29 | test('Handle multiple tabs one by one', async ({ page, context }) => {
  30 |     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  31 | 
  32 |     // Setup listener for the 1st new tab, trigger it, and resolve it
  33 |     const tab1Promise = context.waitForEvent('page');
  34 |     await page.locator('#firstButton').click();
  35 |     const tab1 = await tab1Promise;
  36 | 
  37 |     // Setup listener for the 2nd new tab, trigger it, and resolve it
  38 |     const tab2Promise = context.waitForEvent('page');
  39 |     await page.locator('#secondButton').click();
  40 |     const tab2 = await tab2Promise;
  41 | 
  42 |     // You can interact with both independently now!
  43 |     console.log(await tab1.title());
  44 |     console.log(await tab2.title());
  45 | 
  46 |     await tab1.close();
  47 |     await tab2.close();
  48 | });
  49 | 
  50 | 
  51 | test('Test new window', async({page, context})=>{
  52 |     await page.goto("https://www.globalsqa.com/demo-site/draganddrop/");
  53 |      // 1. Setup the listener to catch the newly spawned page window
> 54 |     const newWindowPromise = context.waitForEvent('page');
     |                                      ^ Error: browserContext.waitForEvent: Target page, context or browser has been closed
  55 | 
  56 |     // 2. Perform a Shift + Click to force open the link in a new window
  57 |     await page.getByRole('link', { name: 'About' }).first().click({ modifiers: ['Shift'] });
  58 | 
  59 |     // 3. Capture and wait for the new window to load
  60 |     const newWindow = await newWindowPromise;
  61 |     await newWindow.waitForLoadState('load');
  62 | 
  63 |     // 4. Assert you are on the correct new window page
  64 |     await expect(newWindow).toHaveURL(/.*about/);
  65 |     console.log("New Window Title:", await newWindow.title());
  66 | 
  67 |     // Clean up by closing the new window
  68 |     await newWindow.close();
  69 | });
  70 | 
  71 | test('test right click',async({page,context})=>{
  72 |     await page.goto("https://www.globalsqa.com/demo-site/draganddrop/");
  73 |     const newWindowPromise = context.waitForEvent('page');
  74 |     await page.getByRole('link', { name: 'About' }).first().click({ modifiers: ['Control'] });
  75 | 
  76 |     const newWindow = await newWindowPromise;
  77 |     await newWindow.waitForLoadState('load');
  78 | });
```