import {expect, test} from "@playwright/test"

test("Decathlon", async ({page}) => {
    await page.goto("https://www.decathlon.in/")

    //verify page url 
    await expect(page).toHaveURL('https://www.decathlon.in/');

    //print title of page
    console.log("The home page title is", await page.title())

    //search for shoes and enter 
    const searchh = page.locator('[data-test-id="search-input-desktop:container"]')
    await searchh.click();
    await page.locator('input[type="search"]').fill('shoes')
    await page.keyboard.press('Enter')

    await page.waitForTimeout(2000);
       
    //verify page title
    await expect(page).toHaveTitle('Search | shoes')
    console.log("After search is", await page.title());

    //Click on the "Men" gender filter
    await page.getByText('Gender',{exact:true}).click();
    await page.locator('label[data-test-id="filter-item-gender_id_en-MEN"]').click()
    await page.waitForTimeout(2000);

    //Click on the "Running" category filter
    await page.getByText('Sport', {exact:true}).click();
    await page.locator('label[data-test-id="filter-item-sport_pratice_en-Running"]').click();
    await page.waitForTimeout(2000);

    //Click on the shoe size filter
    await page.getByText('Size',{exact:true}).click();
    await page.locator('label[data-test-id="filter-item-indian_size-UK 10.5 - EU 45"]').click();
    await page.waitForTimeout(2000);

    //Click on the Sort option and select 1 option
    await page.locator('button[data-test-id="sort-bar-desktop:dropdown-button"]').click();
    await page.locator('//span[text()="Price (high → low) "]').click();
    await page.waitForTimeout(2000);
    
    //Select first product
    await page.locator('(//div[@data-test-id="product-card:product-card:title"])[1]').click();

    //select size 10.5
    await page.locator('span[data-test-id="pdp-size-option-text-2"]').click();

    //select add to cart
    await page.locator('(//button[@data-test-id="pdp:add-to-cart-button"])').click();

    //verify the product is added to cart
    await expect( page.locator('//h3[text()="Product(s) added to cart"]')).toBeVisible();

    //click on cart icon
    await page.locator('//span[@data-test-id="header-desktop:cart-count-badge"]').click();

    //fetch the total and print
    const total = await page.locator('//div[@data-test-id="cart:cart-checkout-total-cart-value"]').innerText();
    console.log("The total cart amount is:", total)

})
