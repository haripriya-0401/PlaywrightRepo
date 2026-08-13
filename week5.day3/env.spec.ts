import {test} from "@playwright/test"

import dotenv from "dotenv"

//read multiple data
let allfiles = process.env.envfile || "qa" || "prod" || "uat" 
dotenv.config({path:`utils/${allfiles}.env`})

test('Read env file', async({page})=>{

    await page.goto(process.env.TestURL as string)
    await page.locator('#username').fill(process.env.TestUsername as string)
    await page.locator('#password').fill(process.env.TestPassword as string)
    await page.locator('#Login').click()

})