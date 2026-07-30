import {test} from "@playwright/test"

test("homeplaywrightlocators", async ({page}) => {
    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.getByRole("textbox", {name:'Username'}).fill("Demosalesmanager");
    await page.getByLabel('Password').fill("crmsfa");
    await page.getByRole("button", {name:"Login"}).click();
    await page.getByText("CRM/SFA", {exact:true}).click();
    await page.getByRole("link" , {name:"Leads"}).click();
    await page.getByRole('link',{name:"Create Lead"}).click();
    await page.locator('#createLeadForm_companyName').fill('Axen');
    await page.locator('#createLeadForm_firstNameLocal').fill('Hapi');
    await page.locator('#createLeadForm_lastName').fill('Prii');
    await page.locator('[name="personalTitle"]').fill('Mrs');
    await page.locator('#createLeadForm_generalProfTitle').fill('Eng');
    await page.locator('[name="annualRevenue"]').fill('2900000000');
    await page.locator('#createLeadForm_departmentName').fill('IT');
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('856236985');
    await page.getByRole('button', { name: 'Create Lead' }).click();
})
