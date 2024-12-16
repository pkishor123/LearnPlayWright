const { test, expect } = require('@playwright/test'); // Ensure there's only one import

test('Home Page', async ({ page }) => {
  await page.goto('https://sjworld.testsjit.in/site/#/login');

  // Wait for the title promise to resolve
  const pageTitle = await page.title();
  console.log('Page title is:', pageTitle);

  // Log the current page URL
  const pageURL = page.url();
  console.log('Page URL is:', pageURL);

  // Check if the URL is as expected
  await expect(page).toHaveURL('https://sjworld.testsjit.in/site/#/login');

  await page.close();
});
