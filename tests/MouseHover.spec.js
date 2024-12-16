import {test , expect } from '@playwright/test'

test('Mouse hover',async ({page}) => {
 
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

   const mousehoverbtn = await page.locator("//button[@id='mousehover']")
   const reload =   await   page.locator("//a[normalize-space()='Reload']")

    // mouse hover 

    await mousehoverbtn.hover()
    await reload.hover()

    await page.waitForTimeout(5000)

})