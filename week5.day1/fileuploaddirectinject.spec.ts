import {test} from "@playwright/test"

test("File Upload with <input type=file>",async ({page}) => {

    await page.goto("https://www.naukri.com/registration/createAccount")

    await page.locator(`//h2[text()="I'm experienced"]`).click()

    //directly injecting the file
    await page.locator('//input[@type="file"]').setInputFiles('data/Resume.pdf')

})