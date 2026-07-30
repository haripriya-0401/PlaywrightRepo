import {test} from "@playwright/test"

test ('Salesforce login', async({page})=>{

    await page.goto("https://login.salesforce.com/?locale=in");
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');
    await page.locator('input[name="pw"]').fill('TestLeaf@2025');

    await page.locator('#Login').click();
}

)