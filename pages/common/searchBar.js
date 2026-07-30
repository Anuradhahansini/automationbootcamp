const { BasePage } = require('../BasePage');
const { SELECTORS } = require('../../common/constants');

class SearchBar extends BasePage {
  constructor(page) {
    super(page);
    this.searchInput = page.locator(SELECTORS.searchInput);
    this.searchButton = page.getByRole('link', { name: 'SEARCH' });
    this.searchSuggestList = page.locator(SELECTORS.searchSuggestList);
  }

  async search(term) {
    await this.searchInput.fill(term);
    await this.searchButton.click();
    await this.waitForPageReady();
  }

  async searchSuggest(term) {
    await this.searchInput.fill(term);
    await this.searchSuggestList.first().waitFor({ state: 'visible' });
  }
}

module.exports = { SearchBar };
