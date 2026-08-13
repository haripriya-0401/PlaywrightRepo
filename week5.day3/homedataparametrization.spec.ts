import {test} from "@playwright/test"

import dotenv from "dotenv"

//read multiple data
let logins = process.env.envfile || "homecreatelead1" || "homecreatelead2"
dotenv.config({path: `utils/${logins}.env`})

test('Read env file for leaptaps', async({page}) =>{

    //URl and login 
await page.goto(process.env.LTUrl as string)
await page.locator('#username').fill(process.env.LTUsername as string)
await page.locator('#password').fill(process.env.LTPassword as string)
await page.locator('.decorativeSubmit').click()

// click CRM/SFA
await page.locator('//a[contains(text(),"CRM/SFA")]').click()

//Click Leads
await page.locator('//a[contains(text(),"Leads")]').click()

//click create lead
await page.locator('//a[contains(text(),"Create Lead")]').click()

//Fill mandatory deatils - company, first and last name
await page.locator('#createLeadForm_companyName').fill(process.env.LTCompany_name as string)
await page.locator('#createLeadForm_firstName').fill(process.env.LTFirst_name as string)
await page.locator('#createLeadForm_lastName').fill(process.env.LTLast_name as string)


//select source by label
await page.locator("select[name='dataSourceId']").selectOption({label: "Direct Mail"})

//select marketing campaigns by value
await page.locator("select[name='marketingCampaignId']").selectOption({value: "DEMO_MKTG_CAMP"});


const Mcount = page.locator('select[name="marketingCampaignId"]>option')

//Get the count in the Marketing Campaign dropdown
const total = await Mcount.count()
console.log( "The dropdown count is", total)

//print the dropdown values
for (let i=0; i<total; i++){
    console.log(await Mcount.nth(i).innerText())
}


//select General services from industry by index
await page.locator('#createLeadForm_industryEnumId').selectOption({index:6})

//select INR from currency
await page.locator('#createLeadForm_currencyUomId').selectOption({label:"INR - Indian Rupee"})

//Select India from the Country dropdown
await page.locator('#createLeadForm_generalCountryGeoId').selectOption({value: "IND"})

//Select any state from the State dropdown
const state = await page.locator('#createLeadForm_generalStateProvinceGeoId').selectOption({value:"IN-TN"})

//Get the count of all states and print the values in the console
const statecount = page.locator('[name="generalStateProvinceGeoId"]>option')


const totalcount = await statecount.count()
console.log("Total states in",state, "is", totalcount)

for (let j=0; j<totalcount; j++){
    console.log(await statecount.nth(j).innerText() )
}


//click create lead
await page.locator('.smallSubmit').click()
})