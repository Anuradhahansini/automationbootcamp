const { test, expect } = require('@playwright/test');
const {HomePage} = require('../pages/home/HomePage');

test.describe('HomePage', ()=>{
    let homePage;

    test.beforeEach(async({page}) =>{
        homePage = new HomePage(page);

        await homePage.open();
    });

    test.afterEach(async({page}) =>{
       console.log("-------Test case complted");
    });

    test(' TC-10 Homepage loads with correct title and URL' , async ({page}) =>{

        await homePage.expectHomeLoaded();
    });

    test('TC-11 Key header elements visible (search, login, cart, language)', async ({page}) => {
        await expect(homePage.searchInput).toBeVisible();
        await expect(homePage.loginTrigger).toBeVisible();
        await expect(homePage.cartTrigger).toBeVisible();
        await expect(homePage.languageSwitch).toBeVisible();
    });

    test('TC-12 Guest cart badge is empty or zero', async ({page}) => {
        const badgeText = (await homePage.cartBadge.textContent())?.trim() ?? '';
        expect(['', '0']).toContain(badgeText);
    });

    test('TC-13 Logo navigates back to homepage from catalog', async ({page}) => {
        await homePage.goToCatalog('phone');
        await expect(page).toHaveURL(/catalog/);

        await homePage.logo.click();
        await homePage.waitForPageReady();
        await expect(page).not.toHaveURL(/catalog/);
        await expect(page).toHaveURL(/daraz\.lk\/(\?.*)?$/);
    });

})
