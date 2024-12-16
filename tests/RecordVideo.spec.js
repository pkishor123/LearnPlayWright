import {test , expect } from '@playwright/test'


//using 
// video: on in config file 
test('video',async ({page}) => {
    await page.goto('https://roughauction.testsjit.in/#/login');
  
    await page.getByText('Login with Username &').click();
   
    await page.getByPlaceholder('Enter Username or Email').fill('admina');
    await page.getByPlaceholder('Enter Password').fill('Test@123');
    
    await page.getByLabel('Remember me').check();
    
    await page.getByRole('button', { name: 'Log In' }).click();
  
  
      await page.waitForTimeout(5000)

})