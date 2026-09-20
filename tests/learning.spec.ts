import {test,expect} from '@playwright/test';

test('Test One', async ({page})=>{
    await page.goto('https://jatin99.github.io/Playwright-demo-app/');
    const headingLocator=await page.getByRole('heading', { name: 'Playwright Locator Practice App', exact: true });
    console.log(await headingLocator.textContent());
 
    const usernameLocator =await page.locator('[data-testid="username-input"]')
    await usernameLocator.fill("admin");

    const passwordLocator =await page.getByTestId('password-input')
    await passwordLocator.fill("admin123");

    const selectLocator =await page.getByTestId('role-select')
    await selectLocator.selectOption('admin');

    const loginbtnLocator =await page.getByRole('button', { name: 'Login' })
    await loginbtnLocator.click()

    await page.locator("//button[text()='Edit']").last().click()

     //const editBtnLocator =await page.locator('[data-testid="row-jatin"]')
      //await  editBtnLocator.locator('[data-testid="edit-btn-jatin"]').click();

      await page.locator("//tr").filter({hasText:'Jatin'}).locator('[data-testid="edit-btn-jatin"]').click();
    //const editBtnLocator = row1

    const getallbtns = await page.locator("//button[text()='Edit']").all();

    for(let i of getallbtns){
        console.log(await i.getAttribute('onclick'));
    }

})