import{test,expect} from '@playwright/test'

test('Soft assertions',async ({page}) => {

   await page.goto('https://demo.automationtesting.in/Register.html')


   //single check box 
   await page.locator("//input[@id='checkbox1']").check()

   await expect(await page.locator("//input[@id='checkbox1']")).toBeChecked()

  
   //multiple checkbox
   const Checkboxlocators = [
      "//input[@id='checkbox1']",
      "//input[@id='checkbox2']",
      "//input[@id='checkbox3']"

   ]

// select multiple checkboxex

for ( const locator of Checkboxlocators){

    await page.locator(locator).check()
}

await page.waitForTimeout(5000)

// select multiple UNcheckboxex
for ( const locator of Checkboxlocators){

    if(await page.locator(locator).isChecked()) {
        await page.locator(locator).uncheck() 
    }
    
}



await page.waitForTimeout(5000)

})