import { test, expect } from '@playwright/test';

test('Single File', async ({ page }) => {

    await page.goto('https://demo.automationtesting.in/FileUpload.html')

    await page.waitForSelector('.mqfihd-upload');
    await page.locator('.mqfihd-upload').click()

    await page.locator('#file-upload').setInputFiles('tests/UploadFiles/PDFupload.pdf')
   
    await page.waitForTimeout(5000)
})


test.only('Multiple Files', async ({ page }) => {

   await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')

  await page.locator('#filesToUpload').setInputFiles(['tests/fileupload/dummyPDF.pdf','tests/fileupload/PDF upload.pdf']);


  await page.waitForTimeout(5000)

 expect(await page.locator("//ul[@id='fileList']//li[1]")).toHaveText('dummyPDF.pdf')
 expect(await page.locator("//ul[@id='fileList']//li[2]")).toHaveText('PDF upload.pdf')

 await page.waitForTimeout(5000)


 //removing the files
 await page.locator('#filesToUpload').setInputFiles([])

 await page.waitForTimeout(5000)


  expect (await page.locator("//li[normalize-space()='No Files Selected']")).toHaveText('No Files Selected')

  await page.waitForTimeout(5000)


 })

