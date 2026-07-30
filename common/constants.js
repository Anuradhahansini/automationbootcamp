const BASE_URL = process.env.BASE_URL || 'https://www.daraz.lk';

const SELECTORS = {
    loginTrigger: '#anonLogin',
    accountTrigger: '#myAccountTrigger',
    dialogClose: '.next-dialog-close',
    loginError: '.next-feedback-error, .next-feedback-error, [class*="error"]',
    languageSwitch: '#topActionSwitchLang',
    searchInput: '#q',
    searchSuggestItem: '[class*="suggest-list"] a[class*="suggest-common"]',
    cartTrigger: '.lzd-nav-cart a',
    cartBadge: '#topActionCartNumber',
    logo: 'a[data-spm="dhome"]',
    productItem: '[data-qa-locator="product-item"]',
    priceMinInput: 'input[placeholder="Min"]',
    priceMaxInput: 'input[placeholder="Max"]',
    priceApplyBtn: 'div:has(> input[placeholder="Min"]) button',
    brandCheckbox: 'input[businesstype="brand"]',
};

const ROUTES = {
    home: '/',
    catalog: '/catalog/',
};

const TIMEOUTS = {
    default: 15000,
    navigation: 3000,
};

module.exports = { BASE_URL, SELECTORS, TIMEOUTS };