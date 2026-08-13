import {test} from "@playwright/test"

import utils from "../../utils/salesforcelogin.json"

test.describe.serial('run files in serial mode', async() => {

    for(let creds of utils){
        test(`Read json file ${creds.TestCase}`,async({page})=>{
            await page.goto('https://login.salesforce.com/')
            await page.locator('#username').fill(creds.Username)
            await page.locator('#password').fill(creds.Password)
            await page.locator('#Login').click()
        })
    }

})
