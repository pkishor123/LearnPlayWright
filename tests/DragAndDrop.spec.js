import {test , expect } from '@playwright/test'

test('Drag And Drop',async ({page}) => {


    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

  const rome=  await page.locator('#box6')
  const italy = await page.locator('#box106')


   //approch 1 
   
   /*
   await rome.hover()
    await page.mouse.down()

    await italy.hover()
    await page.mouse.up()
   */


    // approch 2 
   await rome.dragTo(italy)




    await page.waitForTimeout(5000)

})