import{test , expect, chromium} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';


test('test',async ({page})=>{


    //login 
   const login = new LoginPage(page);
   login.gotoLoginPage();
   login.login('pavanol','test@123')
   await page.waitForTimeout(3000)

   // Home 
   const Home= new HomePage(page)
   await Home.addProductToCart('Nexus 6')
   await page.waitForTimeout(3000)
   await home.gotocart();

   //cart
  const cart = new CartPage(page)
  const status = await cart.checkProductInCart('Nexus 6')
  await expect(status).toBe(true)
  await page.waitForTimeout(3000)



})