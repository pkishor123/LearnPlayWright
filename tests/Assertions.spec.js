import{test , expect} from '@playwright/test'

test('AssertionTest', async ({page})=>{

await page.goto('https://demo.nopcommerce.com/register')

// expect(page),tohaveURL()    page has url   
 await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

 // // expect(page),toHaveTitle()    page has title
 await expect(page).toHaveTitle('nopCommerce demo store. Register')

 //await expect(locator).toBeVisible()  Element is visible 

 const logoElement= await page.locator("//div[@class='header-logo']")
 await expect(logoElement).toBeVisible()

//await expect(locator).toBeEnabled()   	Element is enabled
//await expect(locator).toBeDisabled()      Element is disabled
   const  searchStoreBox  =  await page.locator("//input[@id='small-searchterms']")
   await expect(searchStoreBox).toBeEnabled()


//await expect(locator).toBeChecked()	Checkbox is checked

//radio button 
 const maleRedioButton =await page.locator("//input[@id='gender-male']")
 await  maleRedioButton.click()
 await expect(maleRedioButton).toBeChecked()


//check box
const newsLetterCheckbox =await page.locator("//input[@id='Newsletter']")
await expect(newsLetterCheckbox).toBeChecked()


//await expect(locator).toHaveAttribute()	Element has a DOM attribute
 const regButton =  await page.locator("//button[@id='register-button']")
 await expect(regButton).toHaveAttribute('type','submit')

//await expect(locator).toHaveText()	Element matches text
await  expect(page.locator("//h1[normalize-space()='Register']")).toHaveText('Register') //full text


//await expect(locator).toContainText()	Element contains text
await  expect(page.locator("//h1[normalize-space()='Register']")).toContainText('Reg') //partial text


//await expect(locator).toHaveValue()	Input has a value
 const emailInput=  await page.locator("//input[@id='Email']")
await emailInput.fill('test@gmail.com');
await expect(emailInput).toHaveValue('test@gmail.com')


//await expect(locator).toHaveCount()	List has exact number of children

const option = await page.locator("//select[@name='DateOfBirthMonth']//option")
await expect(option).toHaveCount(13)



})