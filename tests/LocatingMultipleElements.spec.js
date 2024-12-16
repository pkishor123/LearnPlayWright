import{test , expect} from '@playwright/test'

test('LocateMultipleElement',async ({page})=> {


    await page.goto('')

    /*
    const links = await page.$$('')
  
    for (const link of links){

       const  linktext =await link.textContent();
       console.log(linktext);
    }

   */
 
    // sometimes elements not load properly then user this 
    page.waitForSelector("")


     const products = await page.$$("")

     for ( const product of products){

       const  productName = await product.textContent()
       console.log(productName)
     }

})