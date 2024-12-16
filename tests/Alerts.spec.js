import{test,expect} from '@playwright/test'

test.skip('alert',async ({page}) => {

   await page.goto('https://demo.automationtesting.in/Alerts.html')


   // enabling alert handling 
   page.on('dialog',async dialog=>{
  
   expect(dialog.type()).toContain('alert')
   expect(dialog.message()).toContain('I am an alert box!')
   await dialog.accept()
   })

   await page.locator("//button[contains(text(),'click the button to display an')]").click()
   await page.waitForTimeout(10000)

});
