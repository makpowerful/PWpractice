# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: uploadDownload.spec.ts >> Test Upload Download of files
- Location: tests\uploadDownload.spec.ts:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForEvent: Target page, context or browser has been closed
=========================== logs ===========================
waiting for event "download"
============================================================
```

# Page snapshot

```yaml
- generic [ref=f2e2]:
  - banner [ref=f2e3]:
    - 'heading "RAHUL SHETTY ACADEMY PRACTISE Note: Data will be reset after page refresh." [level=1] [ref=f2e6]':
      - text: RAHUL SHETTY ACADEMY PRACTISE
      - generic [ref=f2e7]: "Note: Data will be reset after page refresh."
  - generic [ref=f2e8]:
    - table [ref=f2e11]:
      - rowgroup [ref=f2e12]:
        - row [ref=f2e13]:
          - columnheader "S No ▲" [ref=f2e15] [cursor=pointer]:
            - generic [ref=f2e16]: S No
            - generic [ref=f2e17]: ▲
          - columnheader "Fruit Name ▲" [ref=f2e19] [cursor=pointer]:
            - generic [ref=f2e20]: Fruit Name
            - generic [ref=f2e21]: ▲
          - columnheader "Color ▲" [ref=f2e23] [cursor=pointer]:
            - generic [ref=f2e24]: Color
            - generic [ref=f2e25]: ▲
          - columnheader "Price ▲" [ref=f2e27] [cursor=pointer]:
            - generic [ref=f2e28]: Price
            - generic [ref=f2e29]: ▲
          - columnheader "Season ▲" [ref=f2e31] [cursor=pointer]:
            - generic [ref=f2e32]: Season
            - generic [ref=f2e33]: ▲
      - rowgroup [ref=f2e34]:
        - row [ref=f2e35]:
          - cell "1" [ref=f2e36]
          - cell "Mango" [ref=f2e38]
          - cell "Yellow" [ref=f2e40]
          - cell "299" [ref=f2e42]
          - cell "Summer" [ref=f2e44]
        - row [ref=f2e46]:
          - cell "2" [ref=f2e47]
          - cell "Apple" [ref=f2e49]
          - cell "Red" [ref=f2e51]
          - cell "345" [ref=f2e53]
          - cell "Winter" [ref=f2e55]
        - row [ref=f2e57]:
          - cell "3" [ref=f2e58]
          - cell "Papaya" [ref=f2e60]
          - cell "Orange" [ref=f2e62]
          - cell "187" [ref=f2e64]
          - cell "Spring" [ref=f2e66]
        - row [ref=f2e68]:
          - cell "4" [ref=f2e69]
          - cell "Banana" [ref=f2e71]
          - cell "Yellow" [ref=f2e73]
          - cell "69" [ref=f2e75]
          - cell "All" [ref=f2e77]
        - row [ref=f2e79]:
          - cell "5" [ref=f2e80]
          - cell "Kivi" [ref=f2e82]
          - cell "Green" [ref=f2e84]
          - cell "399" [ref=f2e86]
          - cell "Winter" [ref=f2e88]
        - row [ref=f2e90]:
          - cell "6" [ref=f2e91]
          - cell "Orange" [ref=f2e93]
          - cell "Orange" [ref=f2e95]
          - cell "199" [ref=f2e97]
          - cell "Summer" [ref=f2e99]
    - navigation [ref=f2e102]:
      - generic [ref=f2e103]: "Rows per page:"
      - combobox "Rows per page:" [ref=f2e105] [cursor=pointer]:
        - option "10" [selected]
        - option "15"
        - option "20"
        - option "25"
        - option "30"
      - generic [ref=f2e106]: 1-6 of 6
      - generic [ref=f2e107]:
        - button "First Page" [disabled] [ref=f2e108]
        - button "Previous Page" [disabled] [ref=f2e112]
        - button "Next Page" [disabled] [ref=f2e116]
        - button "Last Page" [disabled] [ref=f2e120]
  - generic [ref=f2e125]:
    - button "Download" [active] [ref=f2e126] [cursor=pointer]
    - button "Choose File" [ref=f2e127]
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | import path from 'path';
  3  | 
  4  | test('Test Upload Download of files', async({page})=>{
  5  | 
  6  |     await page.goto("https://rahulshettyacademy.com/upload-download-test/");
  7  |      // Path to your file (replace with your actual filename)
  8  |     const filePath = 'C:/Users/kalam/Downloads/Download.xlsx'; 
  9  |     await page.locator('#fileinput').setInputFiles(filePath);
  10 |     
  11 |     // Click the button that triggers the download (Using the 'Download' button ID/Text)
  12 |     await page.locator('#downloadButton').click(); 
  13 |     
  14 |      // 2. Download Step Verification
  15 |     // Start waiting for the download event BEFORE clicking the download button
> 16 |     const downloadPromise = await page.waitForEvent('download');
     |                                        ^ Error: page.waitForEvent: Target page, context or browser has been closed
  17 | 
  18 |     const download = await downloadPromise;
  19 | 
  20 |     // 3. Optional: Save the downloaded file to a specific folder
  21 |     // This saves it into your project folder under a 'downloads' directory
  22 |     const suggestedFileName = download.suggestedFilename();
  23 |     const savePath = path.join('C:/Users/kalam/Downloads', suggestedFileName);
  24 |     await download.saveAs(savePath);
  25 | 
  26 |     // 4. Assert / Verify that the download was successful
  27 |     expect(download.suggestedFilename()).toBe('Download.xlsx'); 
  28 | 
  29 | });
```