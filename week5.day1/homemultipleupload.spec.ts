import {test} from "@playwright/test"
import path from "node:path"

test ('Multiple File Upload', async({page})=>{

        await page.goto('https://www.leafground.com/file.xhtml')

        //directly inject the file using setInputFiles
        const multipleupload = await page.locator('(//input[@type="file"])[2]')
        await multipleupload.setInputFiles([path.join('data/android.jpg'),path.join('data/birds.jpg')])
})