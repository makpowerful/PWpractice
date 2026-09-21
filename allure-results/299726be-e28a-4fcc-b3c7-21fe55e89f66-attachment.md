# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: sessionStore.spec.ts >> Opening stored session
- Location: tests\sessionStore.spec.ts:23:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

Expected: 2
Received: []
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e5]:
      - generic: Ecom
      - generic [ref=e9]:
        - link " dummywebsite@rahulshettyacademy.com" [ref=e11] [cursor=pointer]:
          - /url: emailto:dummywebsite@rahulshettyacademy.com
          - generic [ref=e12]: 
          - text: dummywebsite@rahulshettyacademy.com
        - generic [ref=e13]:
          - link "" [ref=e14] [cursor=pointer]:
            - /url: "#"
          - link "" [ref=e16] [cursor=pointer]:
            - /url: "#"
          - link "" [ref=e18] [cursor=pointer]:
            - /url: "#"
          - link "" [ref=e20] [cursor=pointer]:
            - /url: "#"
  - generic [ref=e22]:
    - generic [ref=e23]:
      - heading "We Make Your Shopping Simple" [level=3]
      - heading [level=1] [ref=e24]:
        - text: Practice Website for
        - emphasis [ref=e25]: Rahul Shetty Academy
        - text: Students
      - link "Register" [ref=e26] [cursor=pointer]:
        - /url: "#/auth/register"
    - generic [ref=e28]:
      - paragraph [ref=e29]:
        - generic [ref=e30]: Register to sign in with your personal account
      - generic [ref=e31]:
        - heading "Log in" [level=1] [ref=e32]
        - generic [ref=e33]:
          - generic [ref=e34]:
            - generic [ref=e35]: Email
            - textbox "email@example.com" [ref=e36]
          - generic [ref=e37]:
            - generic [ref=e38]: Password
            - textbox "enter your passsword" [ref=e39]
          - button "Login" [ref=e40] [cursor=pointer]
        - link "Forgot password?" [ref=e41] [cursor=pointer]:
          - /url: "#/auth/password-new"
        - paragraph [ref=e42] [cursor=pointer]: Don't have an account? Register here
  - generic [ref=e43]:
    - heading "Why People Choose Us?" [level=1] [ref=e46]
    - generic [ref=e47]:
      - generic [ref=e48]:
        - generic [ref=e49]: 
        - generic [ref=e51]:
          - heading "3546540" [level=1]
          - paragraph [ref=e52]: Successfull Orders
      - generic [ref=e53]:
        - generic [ref=e54]: 
        - generic [ref=e56]:
          - heading "37653" [level=1]
          - paragraph [ref=e57]: Customers
      - generic [ref=e58]:
        - generic [ref=e59]: 
        - generic [ref=e61]:
          - heading "3243" [level=1]
          - paragraph [ref=e62]: Sellers
    - generic [ref=e63]:
      - generic [ref=e64]:
        - generic [ref=e65]: 
        - generic [ref=e67]:
          - heading "4500+" [level=1]
          - paragraph [ref=e68]: Daily Orders
      - generic [ref=e69]:
        - generic [ref=e70]: 
        - generic [ref=e72]:
          - heading "500+" [level=1]
          - paragraph [ref=e73]: Daily New Customer Joining
```

# Test source

```ts
  1  | import {expect, test} from '@playwright/test'
  2  | 
  3  | // Add this line here to completely reset the state for this file:
  4  | test.use({ storageState: { cookies: [], origins: [] } });
  5  | 
  6  | const authFile = 'playwright/.auth/user.json';
  7  | 
  8  | test('Session store test', async({page})=>{
  9  | 
  10 |     await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  11 |     await page.getByRole('textbox', { name: 'Email' }).fill("mak_powerful@yahoo.co.in");
  12 |     await page.getByPlaceholder('enter your passsword').fill("Arthas1@3");
  13 |     await page.getByRole('button', { name: 'Login' }).click();
  14 |     
  15 |     // Wait for the route to change to confirm the login transaction succeeded
  16 |     await page.waitForURL(/#\/dashboard/);
  17 |     
  18 |     // Save the cached storage state cleanly out to our designated JSON path
  19 |     await page.context().storageState({ path: authFile });
  20 | 
  21 | });
  22 | 
  23 | test('Opening stored session', async({page})=>{
  24 | 
  25 |          await page.goto('https://rahulshettyacademy.com/client/#/dashboard/cart');
  26 |          let num = await page.locator("//li[contains(@class,'items')]").all();
> 27 |          expect(num).toEqual(2);
     |                      ^ Error: expect(received).toEqual(expected) // deep equality
  28 | 
  29 | });
```