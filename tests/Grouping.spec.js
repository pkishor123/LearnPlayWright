import{test, expect} from '@playwright/test'

test.beforeAll(async()=>{

  console.log('this is beforall Hook...')

})


test.afterAll(async()=>{

    console.log('this is afterall Hook...')
  
  })

  test.beforeEach(async()=>{

    console.log('this is beforeach Hook...')
  
  })

  test.afterEach(async()=>{

    console.log('this is aftereach Hook...')
  
  })



test.describe.skip('Group1', async ()=>{
   
   
    test('Test1',async ({page})=>{
        console.log('this is test 1....')
      })
      
      test('Test2',async ({page})=>{
         console.log('this is test 2...')
     })
})


test.describe('Group2',async ()=>{

    test('Test3',async ({page})=>{
        console.log('this is test 3....')
      })
    
      test('Test4',async ({page})=>{
        console.log('this is test 4.....')
      })


})

