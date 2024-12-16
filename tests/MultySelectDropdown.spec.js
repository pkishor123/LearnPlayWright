import{test,expect} from '@playwright/test'

test('Handle multyselect dropdowns',async ({page}) => {
  
// select multiple option from multi select dropdown 
//   await page.selectOption("element", ['blue','yellow','red'])

  //Assertion 
  //1) check number of option in dropdown 
//    const Option=await page.locator('element')
//    expect(Option).toHaveCount(5)
 
   //2) check number of option in dropdown using JS array
//   const option= await page.$$('element')
//   console.log("number of options",option.length)
//   await expect("number of options",option.length).toBe(5)



})