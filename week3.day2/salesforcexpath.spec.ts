import {test} from '@playwright/test'

test ('Salesforce Login using Advanced Xpath', async ({page}) => {
    

    await page.goto("https://login.salesforce.com/?locale=in");

    await page.locator('//input[@id="username"]').fill('dilipkumar.rajendran@testleaf.com');
    await page.locator('//input[@type="password"]').fill('TestLeaf@2025');
    await page.locator('//input[@name="Login"]').click();
   
})