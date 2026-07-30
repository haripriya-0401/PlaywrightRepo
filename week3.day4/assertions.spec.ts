import {expect, test} from "@playwright/test"

test("Assertions", async ({page}) => {

    //Part 1: Navigate to the page
    await page.goto("https://leafground.com/input.xhtml");
    
    //Part 2: Validate a Disabled Textbox
    const pwd = page.getByPlaceholder('Disabled')
    await expect(pwd).toBeDisabled();

    //Part 3: Validate an Enabled Textbox
    const name = page.getByPlaceholder("Babu Manickam") 
    expect(name).toBeEditable;
    await name.fill('Haripriya')

    //Part 4: Soft Assertion Practice
    const country = page.getByText("Append Country to this City.")
    await expect.soft(country).toBeDisabled;

    //5. Fill Data
    const clear = page.locator('//input[@value="Can you clear me, please?"]')
    await clear.fill("Playwright Learning")

})