import {test} from "@playwright/test"

test ("Playwright locators in leaftaps", async({page}) =>{

    await page.goto('https://leaftaps.com/opentaps/control/main');
    await page.getByRole('textbox',{name:'Username'}).fill('democsr2');
    await page.getByLabel('Password').fill('crmsfa');
    await page.getByRole('button',{name:'Login'}).click();


})