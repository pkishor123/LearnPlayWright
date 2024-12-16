import{test , expect} from '@playwright/test'


test('frames', async ({page})=> {

  await page.goto('https://ui.vision/demo/webtest/frames/')

//total frames  
     const allframes = await page.frames()
     console.log("number of frames", allframes.length)
     

     //Approch 1: using name or url 
  
     //  const frame1=  await page.frame('name')  //if nam is present
 
//    const frame1= await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'})
//     await frame1.fill("//input[@name='mytext1']", 'Hello' )

    


    //approch 2 -using frame locator
    const inputbox= await page.frameLocator("frame[src='frame_1.html']").locator("//input[@name='mytext1']")

    await inputbox.fill('Hello')

    
    await page.waitForTimeout(5000)

})