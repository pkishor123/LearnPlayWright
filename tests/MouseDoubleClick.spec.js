import {test , expect } from '@playwright/test'

test('Mouse Double Click',async ({page}) => {

   await page.goto('https://testautomationpractice.blogspot.com/')

   const btncopy =  await page.locator("")

   //double click 
   await btncopy.dblclick()

})