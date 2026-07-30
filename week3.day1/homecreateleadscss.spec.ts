import {test} from '@playwright/test'

test ('Create Leads' , async ({page}) => {
    
    await page.goto("https://leaftaps.com/opentaps/control/main");
    //login using credentials
    await page.locator('#username').fill('democsr2');
    await page.locator('#password').fill('crmsfa');
    await page.locator('.decorativeSubmit').click();
    await page.locator('a[style="color: black;"]').click();

    //create leads
    await page.locator('a[href="/crmsfa/control/leadsMain"]').click();
    await page.locator('a[href="/crmsfa/control/createLeadForm"]').click();
    await page.locator('#createLeadForm_companyName').fill('TCS');
    await page.locator('#createLeadForm_firstName').fill('Hari');
    await page.locator('#createLeadForm_lastName').fill('Raj');
    await page.locator('#createLeadForm_personalTitle').fill('Mrs');
    await page.locator('#createLeadForm_generalProfTitle').fill('Test');
    await page.locator('#createLeadForm_annualRevenue').fill('2340000');
    await page.locator('#createLeadForm_departmentName').fill('QAteam');
    
    //select dropdowns
    await page.locator('#createLeadForm_dataSourceId').selectOption({value:"LEAD_CONFERENCE"});
    
    //count the dropdowns
    const dropDo = page.locator('#createLeadForm_dataSourceId>option')
    const dropDownvalue = await dropDo.count();

    console.log('the dropdown value is', dropDownvalue);

    for(let index=0; index<dropDownvalue; index++){

        console.log(await dropDo.nth(index).innerText());

    }








})