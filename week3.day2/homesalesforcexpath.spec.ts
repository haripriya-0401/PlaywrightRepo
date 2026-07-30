import {test} from '@playwright/test'

test ('Salesforce New Account' , async ({page}) => {
    
    await page.goto("https://login.salesforce.com/");
    await page.locator('//input[@id="username"]').fill('dilipkumar.rajendran@testleaf.com');
    await page.locator('//input[@id="password"]').fill('TestLeaf@2025');
    await page.locator('//input[@id="Login"]').click();
    await page.locator('//span[text()="App Launcher"]').click();
    await page.locator('//button[text()="View All"]').click();
    await page.locator('//input[@role="combobox"]').fill('Accounts');
    //await page.waitForTimeout(1000);
    await page.locator('//mark[text()="Accounts"]').click();
    await page.locator('//div[@title="New"]').click();
    await page.locator('//input[@name="Name"]').fill('Harii');
    await page.locator('[id="combobox-button-4297"]').nth(2).click();
    await page.locator('[id="combobox-button-4309"]').nth(2).click();
    await page.locator('//button[@name="SaveEdit"]').click();


})