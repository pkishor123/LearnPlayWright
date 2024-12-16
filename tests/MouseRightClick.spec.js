import {test , expect } from '@playwright/test'

test('Mouse Right Click',async ({page}) => {

   await page.goto('')

    const button = await page.locator('')

    //right click action 
    await button.click({button: 'right'})


    await page.waitForTimeout(5000)

})