import{test,expect} from '@playwright/test'

test('Hidden Dropdown',async ({page}) => {


   await page.goto('https://awesomeqa.com/hr/web/index.php/auth/login')


     await page.locator("//input[@placeholder='Username']").fill('admin')
     await page.locator("//input[@placeholder='Password']").fill('Hacker@4321')
     await page.locator("//button[normalize-space()='Login']").click()

  
    //click on dropdown 
    await page.locator("//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]").click()

    

   await page.waitForTimeout(5000)

})