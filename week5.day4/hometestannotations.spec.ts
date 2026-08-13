import {expect, test} from "@playwright/test"

test.use(
    {
        storageState: 'data/homesalesforceloginuser.json'
    }
)


//Reuse session and verify homepage
test ('Storage state and test annotation', async({page}) =>{
    //test.only ('Storage state and test annotation', async({page}) =>{

    await page.goto('https://testleaf.lightning.force.com/lightning/page/home')
    await expect(page).toHaveTitle('Home | Salesforce')

})

//test.slow()
test('Slow test using navigation', async({page}) =>{

    test.slow()
    await page.goto('https://testleaf.lightning.force.com/lightning/page/home')
    await page.locator('//span[text()="Chatter"]').click()
})

//test.fail()
test.fail('Invalid session', async({page}) =>{

    await page.goto('https://testleaf.lightning.force.com/lightning/page/home')
    await page.locator('//span[text()="Chatter"]').click()
    await page.locator('//a[@title="Bookmarked"]').click()
    await expect(page).toHaveTitle('tt')
})

//Login and verify homepage
test('leaftaps Login', async({page}) =>{

    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.locator('//input[@id="username"]').fill('DemoCSR');
    await page.locator('//input[@id="password"]').fill('crmsfa');
    await page.locator('//input[@type="submit"]').click();
    await page.locator('//a[normalize-space()="CRM/SFA"]').click();
    await expect(page).toHaveTitle('My Home | opentaps CRM')
})

//Invalid login
test.fail('Invalid login', async({page}) =>{
    await page.goto('https://leaftaps.com/opentaps/control/main');
    await page.locator('//input[@id="username"]').fill('CSR');
    await page.locator('//input[@id="password"]').fill('crmsfa');
    await page.locator('//input[@type="submit"]').click();
    await page.locator('//a[normalize-space()="CRM/SFA"]').click();
})

//Incomplete flow
test.fixme ('Incomplete flow', async({page}) =>{

    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.locator('//input[@id="username"]').fill('DemoCSR');
    await page.locator('//input[@id="password"]').fill('crmsfa');
    await page.locator('//input[@type="submit"]').click();
    await page.locator('//a[normalize-space()="CRM/SFA"]').click();
    await page.locator('//a[text()="Leads"]').click();
    await page.locator('//a[text()="Create Lead"]').click();
    await page.locator('//input[@id="createLeadForm_companyNam"]').fill('Tata Consultancy services');
})

//Optional
test.skip('Optional', async({page}) =>{
    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.locator('//input[@id="username"]').fill('DemoCSR');
    await page.locator('//input[@id="password"]').fill('crmsfa');
    await page.locator('//input[@type="submit"]').click();
    await page.locator('//a[normalize-space()="CRM/SFA"]').click();
    await page.locator('//a[text()="Leads"]').click();
    await page.locator('//a[text()="Create Lead"]').click();
    await page.locator('//input[@id="createLeadForm_companyName"]').fill('Tata Consultancy services');
})
