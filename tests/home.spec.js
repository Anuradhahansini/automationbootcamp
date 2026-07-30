const { test, expect } = require('@playwright/test');
const {HomePage} = require('../../pages/home/HomePage');

test.describe('HomePage', ()=>{
    let homePage; 

    test.beforeEach(async({page}) =>{
        homePage = new HomePage(page);

        homePage.open();
    });

    test.afterEach(async({page}) =>{
       console.log("-------Test case complted");
    });

    test(' TC-10 Homepage loads with correct title and URL' , async (page) =>{
        
        await homePage.expectHomeLoaded();
        // await expect(this.page).toHaveURL(/daraz\.lk/);
        // await expect(this.page).toHaveTitle(/Daraz/i);
    });

    // test('TC-11  Key header elements visible (search, login, cart, language)' , async (page) =>{
       
        

    // });
    










})