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
- generic [ref=e2]:
  - banner [ref=e3]:
    - 'heading "RAHUL SHETTY ACADEMY PRACTISE Note: Data will be reset after page refresh." [level=1] [ref=e6]':
      - text: RAHUL SHETTY ACADEMY PRACTISE
      - generic [ref=e7]: "Note: Data will be reset after page refresh."
  - generic [ref=e8]:
    - table [ref=e11]:
      - rowgroup [ref=e12]:
        - row [ref=e13]:
          - columnheader "S No ▲" [ref=e15] [cursor=pointer]:
            - generic [ref=e16]: S No
            - generic [ref=e17]: ▲
          - columnheader "Fruit Name ▲" [ref=e19] [cursor=pointer]:
            - generic [ref=e20]: Fruit Name
            - generic [ref=e21]: ▲
          - columnheader "Color ▲" [ref=e23] [cursor=pointer]:
            - generic [ref=e24]: Color
            - generic [ref=e25]: ▲
          - columnheader "Price ▲" [ref=e27] [cursor=pointer]:
            - generic [ref=e28]: Price
            - generic [ref=e29]: ▲
          - columnheader "Season ▲" [ref=e31] [cursor=pointer]:
            - generic [ref=e32]: Season
            - generic [ref=e33]: ▲
      - rowgroup [ref=e34]:
        - row [ref=e35]:
          - cell "1" [ref=e36]
          - cell "Mango" [ref=e38]
          - cell "Yellow" [ref=e40]
          - cell "299" [ref=e42]
          - cell "Summer" [ref=e44]
        - row [ref=e46]:
          - cell "2" [ref=e47]
          - cell "Apple" [ref=e49]
          - cell "Red" [ref=e51]
          - cell "345" [ref=e53]
          - cell "Winter" [ref=e55]
        - row [ref=e57]:
          - cell "3" [ref=e58]
          - cell "Papaya" [ref=e60]
          - cell "Orange" [ref=e62]
          - cell "187" [ref=e64]
          - cell "Spring" [ref=e66]
        - row [ref=e68]:
          - cell "4" [ref=e69]
          - cell "Banana" [ref=e71]
          - cell "Yellow" [ref=e73]
          - cell "69" [ref=e75]
          - cell "All" [ref=e77]
        - row [ref=e79]:
          - cell "5" [ref=e80]
          - cell "Kivi" [ref=e82]
          - cell "Green" [ref=e84]
          - cell "399" [ref=e86]
          - cell "Winter" [ref=e88]
        - row [ref=e90]:
          - cell "6" [ref=e91]
          - cell "Orange" [ref=e93]
          - cell "Orange" [ref=e95]
          - cell "199" [ref=e97]
          - cell "Summer" [ref=e99]
    - navigation [ref=e102]:
      - generic [ref=e103]: "Rows per page:"
      - combobox "Rows per page:" [ref=e105] [cursor=pointer]:
        - option "10" [selected]
        - option "15"
        - option "20"
        - option "25"
        - option "30"
      - generic [ref=e106]: 1-6 of 6
      - generic [ref=e107]:
        - button "First Page" [disabled] [ref=e108]
        - button "Previous Page" [disabled] [ref=e112]
        - button "Next Page" [disabled] [ref=e116]
        - button "Last Page" [disabled] [ref=e120]
  - generic [ref=e125]:
    - button "Download" [ref=e126] [cursor=pointer]
    - button "Choose File" [ref=e127]
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
  11 |       // 2. Download Step Verification
  12 |     // Start waiting for the download event BEFORE clicking the download button
> 13 |     const downloadPromise = await page.waitForEvent('download');
     |                                        ^ Error: page.waitForEvent: Target page, context or browser has been closed
  14 |     
  15 |     // Click the button that triggers the download (Using the 'Download' button ID/Text)
  16 |     await page.locator('#downloadButton').click(); 
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