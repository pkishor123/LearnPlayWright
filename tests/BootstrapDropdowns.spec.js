import{test,expect} from '@playwright/test'

test('Bootstrap Dropdown',async ({page}) => {

  await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')


   await page.locator("//button[@class='multiselect dropdown-toggle btn btn-default']").click()  //clcik on the dropdown 


    //1. 
    // const options= await page.locator("//ul//li//label//input")
    // await expect(options).toHaveCount(11)


    //2. 
    // const options= await page.$$("//ul//li//label//input")
    // await expect(options.length).toBe(11)


    //3.select multyple options from drop-down
    // const options= await page.$$("//ul//li//label")
    // for( let option of options) {
    //       const value= await option.textContent()
    //     //  console.log("the value is:",value)
    //     if(value.includes('Java') || value.includes('Angular'))  {

    //       await option.click()

    //     }




     //deselect options which are alredy selected 
     const options= await page.$$("//ul//li//label")
     for( let option of options) {
           const value= await option.textContent()
         //  console.log("the value is:",value)
         if(value.includes('HTML') || value.includes('CSS'))  {
 
           await option.click()
 
         }




    }


  await page.waitForTimeout(5000)






})