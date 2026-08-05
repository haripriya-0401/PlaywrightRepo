import {test} from "@playwright/test"

test("Alerts" , async ({page}) => {
    await page.goto("https://leafground.com/alert.xhtml")

    page.on('dialog',async(alert)=>{

        let alertType = alert.type();
        console.log("The alert type is:", alertType);

        let alertMessage = alert.message();
        console.log("The alert message is:" , alertMessage)

        if(alertType==='prompt'){
            await alert.accept('Playwright')
        }else{
            await alert.dismiss()
        }
    })

    await page.locator('(//span[text()="Show"])[5]').click()
})