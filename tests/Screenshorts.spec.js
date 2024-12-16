import {test , expect } from '@playwright/test'

test('page screenshort',async ({page}) => {

    await page.goto('https://demo.automationtesting.in/Register.html')
    await page.screenshot({path: 'tests/screenshorts'+Date.now()+'HomePage.png'})

})

test('Full page screenshort',async ({page}) => {


    await page.goto('https://demo.automationtesting.in/Register.html')
    await page.screenshot({path: 'tests/screenshorts/' +Date.now()+'FullPage.png',fullPage:true})

})

test.only('Element screenshort',async ({page}) => {
    await page.goto('https://demo.automationtesting.in/Register.html')
  await page.locator('#imagetrgt').screenshot({path: 'tests/screenshorts/'+Date.now()+'logo.png'})

})