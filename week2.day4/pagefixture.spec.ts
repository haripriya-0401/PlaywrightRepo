import {test} from "@playwright/test"
test ('pagefixture', async({page}) =>{
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    console.log(page.url());
})