const { expect } = require('@playwright/test');
const { BasePage } = require('../BasePage');
const { SELECTORS } = require('../../common/constants');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.loginTrigger = page.locator(SELECTORS.loginTrigger);
    this.searchInput = page.locator(SELECTORS.searchInput);
    this.languageSwitch = page.locator(SELECTORS.languageSwitch);
    this.cartTrigger = page.locator(SELECTORS.cartTrigger);
    this.cartBadge = page.locator(SELECTORS.cartBadge);
    this.logo = page.locator(SELECTORS.logo);

  }

  async open() {
    await this.goto('/');
    await this.waitForPageReady();
  }

  async expectHomeLoaded() {
    await expect(this.page).toHaveURL(/daraz\.lk/);
    await expect(this.page).toHaveTitle(/Daraz/i);
  }

  async goToCatalog(query = 'phone') {
    await this.goto(`/catalog/?q=${query}`);
    await this.waitForPageReady();
  }

}

module.exports = { HomePage };