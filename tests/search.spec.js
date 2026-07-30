const {test,expect} = require('@playwright/test');
const { HomePage } = require('../../pages/home/HomePage');
const {SearchBar} = require('../../pages/common/SearchBar');
const productsList = require('../../data/products.json');


test.describe('Search Test',()=>{

    let homePage;
    let searchBar;
    const products = productsList

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        searchBar = new SearchBar(page);
        await homePage.open();

    })

    test('TC-03: Verify product search accuracy for specific keywords', async ({page}) => {
        let phone  = products.phone;
        await searchBar.search(phone.search_key);
        await expect(page.locator('body')).toContainText(items found for "${phone.search_key}",{ignoreCase:true});
    });


    test('TC-04: Verify search auto-suggestion relevance and visibility', async () => {
        let suggest  = products.suggest;
        await searchBar.searchSuggest(suggest.search_key);
        await expect(searchBar.searchSuggestList.first()).toBeVisible();
 
    }
  



})