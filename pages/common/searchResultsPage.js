const { SELECTORS } = require('../../common/constants');

class SearchResultsPage {
  constructor(page) {
    this.page = page;
    this.productItems = page.locator(SELECTORS.productItem);
    this.priceMinInput = page.locator(SELECTORS.priceMinInput);
    this.priceMaxInput = page.locator(SELECTORS.priceMaxInput);
    this.priceApplyBtn = page.locator(SELECTORS.priceApplyBtn);
    this.brandCheckbox = page.locator(SELECTORS.brandCheckbox);
  }

  async applyPriceRange(min, max) {
    await this.priceMinInput.fill(String(min));
    await this.priceMaxInput.fill(String(max));
    await this.priceApplyBtn.click();
    await this.page.waitForLoadState('load');
  }

  async applyFirstBrandFilter() {
    await this.brandCheckbox.first().click();
    await this.page.waitForLoadState('load');
  }
}

module.exports = { SearchResultsPage };
