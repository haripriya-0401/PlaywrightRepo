import {test} from '@playwright/test'

test ('Create Leads' , async ({page}) => {
    
    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.locator('//input[@id="username"]').fill('Demosalesmanager');
    await page.locator('//input[@id="password"]').fill('crmsfa');
    await page.locator('//input[@type="submit"]').click();
    await page.locator('//a[normalize-space()="CRM/SFA"]').click();
    await page.locator('//a[text()="Leads"]').click();
    await page.locator('//a[text()="Create Lead"]').click();
    await page.locator('//input[@id="createLeadForm_companyName"]').fill('Tata Consultancy services');
    await page.locator('(//input[@name="firstName"])[3]').fill('Haripriya');
    await page.locator('(//input[@name="lastName"])[3]').fill('Natarajan');
    await page.locator('(//input[@name="personalTitle"])').fill('Mrs');
    await page.locator('(//input[@name="generalProfTitle"])').fill('QA');
    await page.locator('(//input[@id="createLeadForm_annualRevenue"])').fill('300000');
    await page.locator('(//input[@name="departmentName"])').fill('IT');
    await page.locator('(//input[@name="primaryPhoneNumber"])[4]').fill('963258741');
    await page.locator('(//input[@class="smallSubmit"])').click();


})