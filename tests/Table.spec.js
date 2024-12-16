import{test , expect} from '@playwright/test'


test('Handling table', async ({page})=> {


    //https://testautomationpractice.blogspot.com/ 
await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

 const table = await page.locator("//div[@class='tableFixHead']//table[@id='product']")

 //1) total number of rows and colums 

  const columns= await table.locator("//thead//tr//th")
  console.log("number of columns:", await columns.count())
 
   const rows =await table.locator("//tbody//tr")
   console.log("number of rows:",await rows.count())
  
   expect(await columns.count()).toBe(4)
   expect(await rows.count()).toBe(9)


 // 2) find perticular table data 
/*
  const matchedRow = rows.filter({
       has: page.locator('td'),
       hasText: 'Kolkata'
    })

   matchedRow.locator('').check()
*/



//3) select multiple product by re-usable function
await selectProduct(rows,page,kokkata)
await selectProduct(rows,page,Chennai)
await selectProduct(rows,page,Pune)






//4) print alll product detail using loop 

for(let i=0; i< await rows.count();i++){

        const row=    rows.nth(i);
        const tds= row.locator('td')


      for(let j=0; j< await tds.count()-1 ; j++){
        console.log(await tds.nth(j).textContent())
 }

}



//5) print all data from all pagination 

const pages= await page.locator('.pagination li a')
console.log("number of pages in the table", await pages.count())

for(let p=0 ; p< await pages.count(); p++){

     if(p>0){
   await pages.nth(p).click

     }
 
     for(let i=0; i< await rows.count();i++){

     const row=    rows.nth(i);
     const tds= row.locator('td')

   
   for(let j=0; j< await tds.count()-1 ; j++){
   console.log(await tds.nth(j).textContent())
}

}



}




  await page.waitForTimeout(5000)

})



 async function selectProduct(rows, page , name){
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: name
     })
 
   await  matchedRow.locator('').check()
}