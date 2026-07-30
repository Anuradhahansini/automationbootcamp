const BASE_URL = process.env.BASE_URL || 'https://www.daraz.lk';

const SELECTORS = {
    loginTrigger: '#anonLogin',
    accountTrigger: '#myAccountTrigger',
    dialogClose: '.next-dialog-close',
    loginError: '.next-feedback-error, .next-feedback-error, [class*="error"]',
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