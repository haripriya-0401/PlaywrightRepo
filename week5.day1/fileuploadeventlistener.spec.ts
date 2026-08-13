import {test} from "@playwright/test"

import path from "node:path"

test ("File upload using event listener", async ({page}) => {

    await page.goto("https://www.naukri.com/registration/createAccount")

    await page.locator(`//h2[text()="I'm experienced"]`).click()

    //create event listener and promise
    const fileuploadel = page.waitForEvent('filechooser')

    //trigger click action
    await page.locator(`//button[text()="Upload Resume"]`).click()
    

    //resolve promise and store ref
    const fuploadref = await fileuploadel

    await fuploadref.setFiles(path.join(__dirname,'../../data/Resume.pdf'))
})