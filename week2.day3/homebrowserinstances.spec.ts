import {test} from "@playwright/test"
import {chromium,webkit} from "@playwright/test"

test('Red Bus',async() => {                                                                        //launch using msedge browser

    const browserInstance = await chromium.launch({channel: "msedge", headless: false});
    const browserContext = await browserInstance.newContext()
    const page = await browserContext.newPage()

    await page.goto("https://www.redbus.in/")
    console.log(await page.title());
    console.log(page.url());

})

test('Flipkart', async() => {                                                                   //launch using webkit

    const browser = await webkit.launch({headless: false})
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://www.flipkart.com")
    console.log(await page.title());
    console.log(page.url());

});