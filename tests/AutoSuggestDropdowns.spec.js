import{test,expect} from '@playwright/test'

test('Auto Suggest Dropdown',async ({page}) => {


    // use redbus page for this test case 
    await page.goto('https://wwww.redbus.in')


    
      
    await page.locator("#src").fill('Delhi')
    await page.waitForSelector("li//[contains(@class,'sc-iwsKBI')]//div//text[1]")


   const fromcoption=await page.$$("li//[contains(@class,'sc-iwsKBI')]//div//text[1]")

   for(let option of  fromcoption){
       const  value=await option.textContent()
    //   console.log(value)
      if( value.includes('anand vihar')){

        await option.click()
        break
      }
     


   }

   await page.waitForTimeout(5000)

})