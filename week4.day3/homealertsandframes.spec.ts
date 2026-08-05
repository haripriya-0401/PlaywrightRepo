import {expect, test} from "@playwright/test"

test ("Alerts and frames", async({page})=>{
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")

    const accept = await page.frameLocator("#fast-cmp-iframe")
    await accept.getByRole("button", {name:"Decline"}).click()

    page.on('dialog',async(alert)=>{

    let alertType = alert.type()
    console.log("The type of alert is ", alertType)

    let alertMessage = alert.message()
    console.log("The alert message is ", alertMessage)

    //expect (alert.type()).toBe('confirm') 

    if(alertType==='confirm'){
        await alert.accept()
    }else{
        await alert.dismiss()
    }
    })

    const frame = page.frameLocator('#iframeResult')
    await frame.locator('//button[text()="Try it"]').click()

    await expect(frame.locator("//p[text()='You pressed OK!']")).toHaveText('You pressed OK!')
})