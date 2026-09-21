# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: sessionStore.spec.ts >> Session store test
- Location: tests\sessionStore.spec.ts:8:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'password' })
  - operation was aborted: Test timeout of 30000ms exceeded.

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e7]:
      - text: 
      - generic [ref=e8]:
        - link "" [ref=e9] [cursor=pointer]:
          - /url: "#"
        - link "" [ref=e11] [cursor=pointer]:
          - /url: "#"
        - link "" [ref=e13] [cursor=pointer]:
          - /url: "#"
        - link "" [ref=e15] [cursor=pointer]:
          - /url: "#"
  - generic [ref=e17]:
    - generic [ref=e18]:
      - heading "We Make Your Shopping Simple" [level=3]
      - heading [level=1] [ref=e19]:
        - text: Practice Website for
        - emphasis [ref=e20]: Rahul Shetty Academy
        - text: Students
      - link "Register" [ref=e21] [cursor=pointer]:
        - /url: "#/auth/register"
    - generic [ref=e23]:
      - paragraph [ref=e24]:
        - generic [ref=e25]: Register to sign in with your personal account
      - generic [ref=e26]:
        - heading "Log in" [level=1] [ref=e27]
        - generic [ref=e28]:
          - generic [ref=e29]:
            - generic [ref=e30]: Email
            - textbox "email@example.com" [ref=e31]: mak_powerful@yahoo.co.in
          - generic [ref=e32]:
            - generic [ref=e33]: Password
            - textbox "enter your passsword" [ref=e34]
          - button "Login" [ref=e35] [cursor=pointer]
        - link "Forgot password?" [ref=e36] [cursor=pointer]:
          - /url: "#/auth/password-new"
        - paragraph [ref=e37] [cursor=pointer]: Don't have an account? Register here
  - generic [ref=e38]:
    - heading "Why People Choose Us?" [level=1] [ref=e41]
    - generic [ref=e42]:
      - generic [ref=e43]:
        - generic [ref=e44]: 
        - generic [ref=e46]:
          - heading "3546540" [level=1]
          - paragraph [ref=e47]: Successfull Orders
      - generic [ref=e48]:
        - generic [ref=e49]: 
        - generic [ref=e51]:
          - heading "37653" [level=1]
          - paragraph [ref=e52]: Customers
      - generic [ref=e53]:
        - generic [ref=e54]: 
        - generic [ref=e56]:
          - heading "3243" [level=1]
          - paragraph [ref=e57]: Sellers
    - generic [ref=e58]:
      - generic [ref=e59]:
        - generic [ref=e60]: 
        - generic [ref=e62]:
          - heading "4500+" [level=1]
          - paragraph [ref=e63]: Daily Orders
      - generic [ref=e64]:
        - generic [ref=e65]: 
        - generic [ref=e67]:
          - heading "500+" [level=1]
          - paragraph [ref=e68]: Daily New Customer Joining
```

# Test source

```ts
  1  | import {test} from '@playwright/test'
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
> 12 |     await page.getByRole('textbox', { name: 'password' }).fill("Arthas1@3");
     |                                                           ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  13 |     await page.getByRole('button', { name: 'Sign In' }).click();
  14 |     
  15 |     // Wait for the route to change to confirm the login transaction succeeded
  16 |     await page.waitForURL('**/dashboard');
  17 |     
  18 |     // Save the cached storage state cleanly out to our designated JSON path
  19 |     await page.context().storageState({ path: authFile });
  20 | 
  21 | });
```