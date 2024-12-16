import { test, expect } from '@playwright/test';

test('handle inputbox', async  ({page})=>{

  await page.goto('https://roughauction.testsjit.in/#/login')


  await page.locator("//a[normalize-space()='Login with Username & Password?']").click()

   await expect(page.locator("//input[@id='logemail']")).toBeVisible()
   await expect(page.locator("//input[@id='logemail']")).toBeEditable()
   await expect(page.locator("//input[@id='logemail']")).toBeEnabled()
   await expect(page.locator("//input[@id='logemail']")).toBeEmpty()

//    await page.locator("//input[@id='logemail']").fill('admina')
   await page.fill("//input[@id='logemail']",'admina')

 await page.waitForTimeout(5000)

})