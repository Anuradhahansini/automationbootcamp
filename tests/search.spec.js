const {test,expect} = require('@playwright/test');
const { HomePage } = require('../pages/home/HomePage');
const {SearchBar} = require('../pages/common/searchBar');
const { SearchResultsPage } = require('../pages/common/searchResultsPage');
const productsList = require('../data/product.json');


test.describe('Search Test',()=>{

    let homePage;
    let searchBar;
    let searchResultsPage;
    const products = productsList

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        searchBar = new SearchBar(page);
        searchResultsPage = new SearchResultsPage(page);
        await homePage.open();

    })

    test('TC-03: Verify product search accuracy for specific keywords', async ({page}) => {
        let phone  = products.phones;
        await searchBar.search(phone.search_key);
        await expect(page.locator('body')).toContainText(`items found for "${phone.search_key}"`,{ignoreCase:true});
    });


    test('TC-04: Verify search auto-suggestion relevance and visibility', async () => {
        let suggest  = products.suggest;
        await searchBar.searchSuggest(suggest.search_key);
        await expect(searchBar.searchSuggestList.first()).toBeVisible();
    });

    test('TC-05: Price range filter (Min/Max)', async () => {
        let watch = products.watches;
        await searchBar.search(watch.search_key);
        await searchResultsPage.applyPriceRange(watch.min_price, watch.max_price);
        await expect(searchResultsPage.priceMinInput).toHaveValue(watch.min_price);
        await expect(searchResultsPage.priceMaxInput).toHaveValue(watch.max_price);
    });

    test('TC-06: Brand filter on search results', async ({page}) => {
        let phone = products.phones;
        await searchBar.search(phone.search_key);
        await expect(searchResultsPage.brandCheckbox.first()).toBeVisible();

        await searchResultsPage.applyFirstBrandFilter();
        await expect(page).toHaveURL(/daraz\.lk/);
    });

    test('TC-18: Search URL contains query parameter', async ({page}) => {
        let phone = products.phones;
        await searchBar.search(phone.search_key);
        await expect(page).toHaveURL(new RegExp(`[?&]q=${encodeURIComponent(phone.search_key).replace(/%20/g, '(%20|\\+)')}`, 'i'));
    });

    test('TC-19: Search results display product listing items', async () => {
        let phone = products.phones;
        await searchBar.search(phone.search_key);
        expect(await searchResultsPage.productItems.count()).toBeGreaterThan(0);
    });

    test('TC-20: Invalid search shows zero results', async ({page}) => {
        let invalid = products.invalid;
        await searchBar.search(invalid.search_key);
        expect(await searchResultsPage.productItems.count()).toBe(0);
        await expect(page.locator('body')).toContainText(/no result/i);
    });

    test('TC-21: Suggestion list includes typed keyword', async () => {
        let suggest = products.suggest;
        await searchBar.searchSuggest(suggest.search_key);
        await expect(searchBar.searchSuggestList.first()).toContainText(
            new RegExp(suggest.search_key, 'i')
        );
    });

    test('TC-22: Run consecutive searches with different keywords', async ({page}) => {
        let phone = products.phones;
        let headphones = products.headphones;

        await searchBar.search(phone.search_key);
        await expect(page.locator('body')).toContainText(`items found for "${phone.search_key}"`, {ignoreCase:true});

        await searchBar.search(headphones.search_key);
        await expect(page.locator('body')).toContainText(`items found for "${headphones.search_key}"`, {ignoreCase:true});
    });

})
