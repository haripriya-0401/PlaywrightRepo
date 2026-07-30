import {test} from "@playwright/test"

test("Storage State" , async ({page}) => {
    
    await page.goto('https://leaftaps.com/opentaps/control/main');
    await page.locator('#username').fill('demoCSR2');
    await page.locator('#password').fill('crmsfa');
    await page.locator('input[class="decorativeSubmit"]').click();

    await page.context().storageState({path:'playwright/.auth/user.json'})
})