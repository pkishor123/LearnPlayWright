import {test , expect } from '@playwright/test'
import { count } from 'console'

test('Date Picker',async ({page}) => {

await page.goto('https://testautomationpractice.blogspot.com/')

  //await page.fill('#datapicker','13/12/2024')

//date picker
const year = "2024"
const month = "December"
const date = "13"

await page.click('#datapicker') //open calander


while(true){

      const currentYear= await page.locator('.ui-datapicker-year').textContent()
      const currentMonth = await page.locator('.ui-datapicker-year').textContent()

      if(currentYear== year && currentMonth== month){
        break;
      }


      await page.locator('[title="Next"]').click()   //next
      await page.locator('[title="Prev"]').click()  //previous
}
 
//date selection using loop 
  const dates=  await page.$$("//a[@class='ui-state-default']")

  for (const dt of  dates){
    
    if(await dt.textContent()==date){
      await dt.click()
      break;


    }
  }


  //date selection -without loop 
  await page.click(`//a[@class='ui-state-default'][text()='${date}']`)




await page.waitForTimeout(5000)

})