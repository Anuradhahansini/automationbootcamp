const { SELECTORS } = require('../../common/constants');

class SearchBar {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator(SELECTORS.searchInput);
    this.searchSuggestList = page.locator(SELECTORS.searchSuggestItem);
  }

  async search(keyword) {
    await this.searchInput.fill(keyword);
    await this.searchInput.press('Enter');
    await this.page.waitForLoadState('load');
  }

  async searchSuggest(keyword) {
    await this.searchInput.fill(keyword);
    await this.searchInput.press('End');
    await this.searchSuggestList.first().waitFor({ state: 'visible', timeout: 30000 });
  }
}

module.exports = { SearchBar };
