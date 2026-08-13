import {expect, test} from "@playwright/test"

test('Storage state for salesforce', async({page}) =>{

    await page.goto('https://login.salesforce.com/')
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');
    await page.locator('input[name="pw"]').fill('TestLeaf@2025');
    await page.locator('#Login').click();

    await page.context().storageState({path: 'data/homesalesforceloginuser.json'})

    await expect(page).toHaveTitle('Home | Salesforce')
}) 
