import{test,expect} from '@playwright/test'

test('Handle dropdowns',async ({page}) => {

await page.goto('https://demo.automationtesting.in/Register.html')


//multiple ways to select options from the dropdown 

//    await page.locator("//select[@id='Skills']").selectOption({label: 'Adobe Photoshop'})       //label/visible text
//    await page.locator("//select[@id='Skills']").selectOption('Adobe Photoshop')                // visible text
//   await page.locator("//select[@id='Skills']").selectOption({value: 'Android'})                // by using value  
//   await page.locator("//select[@id='Skills']").selectOption({index: 4})                        //  by using index
//   await page.selectOption("//select[@id='Skills']",'Adobe Photoshop')


//Assertion 
// 1) check number of option in dropdown - approch1

// const options =  await page.locator("//select[@id='Skills']//option")
// await expect(options).toHaveCount(78)

//2) check number or options in dropdown - approch2
//  const options= await page.$$("//select[@id='Skills']//option")
//  console.log("number of options:",options.length)
// await expect(options.length).toBe(78)

//3) check presence of value in the dropdown -approch1 
//   const content= await page.locator("//select[@id='Skills']").textContent()
//  await expect (content.includes('Android')).toBeTruthy()


//4) check presence of value in the dropdown - approch 2 -using looping
/*const options= await page.$$("//select[@id='Skills']//option")
let status = false;

for  ( const option of options){
    // console.log( await option.textContent())
    let value = await option.textContent()
    if (value.includes('Client Server')){
          status = true;
          break;
    }
}

expect(status).toBeTruthy()   

*/
//5) select option from drop-down using loop

const options= await page.$$("//select[@id='Skills']//option")
for  ( const option of options){
    // console.log( await option.textContent())
    let value = await option.textContent()
    if (value.includes('Client Server')){
          await page.selectOption("//select[@id='Skills']",value)
          break;
    }
}




await page.waitForTimeout(5000)

})