// const {test , expect} = require('@playwright/test');
import{test , expect} from '@playwright/test'

test('Locators', async ({page})=>{


    await page.goto('')
    
    // click on login button 
    await page.locator('').click();
    await page.click('')


    //provide username - 
    await page.locator('').fill('')
    await page.fill('','')
    await page.type('','')


    //provide password 
    await page.fill('','')

    // click on login button 
    await page.click('')

    // verify login link apprence 
   const logoutLink =  await page.locator("")
   
    await expect(logoutLink).toBeVisible()


    await page.clock()

})