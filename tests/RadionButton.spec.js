import {test , expect } from '@playwright/test'

test('Soft assertions',async ({page}) => {



// Select the radio button
await page.locator('XL').check();

await expect(await page.locator('XL')).toBeChecked()



})