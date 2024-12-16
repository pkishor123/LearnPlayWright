import{test , expect, chromium} from '@playwright/test'


// only annotation 
/*
test.only('test1',async({page})=>{
    console.log('this is my test1...')
 })
 */
   
 
 /*
 //akip annotation
 test.skip('test2',async({page})=>{
  console.log('this is my test2...')
  })
 */




  /*
// skip by if condition 
  test('test3',async({page , browserName})=>{
    console.log('this is my test3...')
    if(browser===chromium){
        test.skip()
    }
})
 */

//fixme
/*
test('test4',async({page})=>{
      test.fixme() 
      console.log('this is my test4')
})

  */
 
//Fail usefull for negative test cases 
/*
test('test5',async({page})=>{
    test.fail() // expect
    console.log('this is my test5')
    expect(1).toBe(1)  // actual 

    // expect (f) & actual (p) = fail 
    // expect (F) & actual (f) = test get pass
})


test('test6',async({page, browserName})=>{
    console.log('this is test6')
    if(browserName==='firefox'){ 
        test.fail() // expected
    }

     // expect (f) & actual (p) = fail 
    // expect (F) & actual (f) = test get pass
})
*/

test('test7',async({page})=>{
    test.slow()
  console.log('this is test7..')
  await page.goto('https://roughauction.testsjit.in/#/login')

})
