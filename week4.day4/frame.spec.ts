import {test,expect} from "@playwright/test"

test ("Nested Frames", async ({page}) => {
    
    await page.goto("https://www.leafground.com/frame.xhtml");

    const mainFrame = page.frame('[src="page.xhtml"]')

    const innerframe = page.frame({name:"frame2"})
    
    const beforeclick = await mainFrame?.locator('#Click').innerText();
    console.log(beforeclick)

    expect(mainFrame!.locator('#Click'))
    
})