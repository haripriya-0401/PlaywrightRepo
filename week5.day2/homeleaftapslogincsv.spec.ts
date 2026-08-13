import {test} from '@playwright/test'
import {parse} from "csv-parse/sync"
import fs from "fs"
import path from "path"

    //Convert the CSV data into JavaScript objects
    let creds:any[] = parse(fs.readFileSync('utils/loginData.csv', "utf-8"),
    {
        skip_empty_lines:true, 
        columns:true
    })
    console.log(creds)

    //for loop for iteration
    for(let datas of creds){

        test(`Read csv file ${datas.Testcase}`, async({page}) =>{


            //Login steps by giving username password
            await page.goto('https://leaftaps.com/opentaps/control/main')
            await page.locator("#username").fill(datas.Username);
            await page.locator("#password").fill(datas.Password);
            await page.locator(".decorativeSubmit").click()
        })
    }

