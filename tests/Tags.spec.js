import{test,expect} from '@playwright/test'

test('test1@sanity',async({page})=>{
   console.log('this is my test1...')
})


test('test2@sanity',async({page})=>{
 console.log('this is my test2...')
 })

 
test('test3@regression',async({page})=>{
    console.log('this is my test3...')
 })

 
test('test4@regression',async({page})=>{
    console.log('this is my test4...')
 })

 
test('test5@sanity@regression',async({page})=>{
    console.log('this is my test5...')
 })