import {test} from "@playwright/test"

test("Window Handling Assignment", async({page,context})=>{

    await page.goto("https://www.leafground.com/window.xhtml");

    //create event listener and promise
    const openWind = context.waitForEvent('page')

    //Triggered the click action
    await page.locator(`//span[text()="Open"]`).click()


    //Resolve the promise and capture the event
    const openedwind = await openWind

    //fill email in new opened window and close
    await openedwind.locator('#email').fill('testleaf@example.com')
    await openedwind.close()

    await page.bringToFront();

    //create event listener and promise
    const openMultiwind = context.waitForEvent('page')

    //Click on open multiple
    await page.locator('//span[text()="Open Multiple"]').click()

    //Resolve the promise and capture the event
    const openedmultiwind = (await openMultiwind).context().pages()

    //total length of opened windows
    const Alllength = openedmultiwind.length
    console.log(Alllength)

})