import {expect, test} from "@playwright/test"

test.use(
    {
        storageState:'playwright/.auth/user.json'
    }
)

test('Storage State',async ({page}) => {

await page.goto('https://leaftaps.com/opentaps/control/login')
await page.locator('#label').click();

//Navigate to CRM/SFA and validate the URL
expect(page.url()).toContain('https://leaftaps.com/crmsfa/control/main?externalLoginKey=');
console.log('Url is:', page.url())

//print title
console.log(await page.title())

//Ensure the login page is never displayed.
console.log('Login page is not displayed', page.url())
})