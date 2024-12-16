import {test , expect } from '@playwright/test'

test('Keyboard Actions',async ({page}) => {

    await page.goto('https://gotranscript.com/text-compare')
    

    await page.locator("//textarea[@name='text1']").fill("welcome to automation")


   // ctrl + A  -select the text

   await page.keyboard.press('Control+A');

   // ctrl + C  -copy the text
   await page.keyboard.press('Control+C')

   // tab 
   await page.keyboard.down('Tab')
   await page.keyboard.up('Tab')

   // ctrl + V
   await page.keyboard.press('Control+V')


   await page.waitForTimeout(5000)

})