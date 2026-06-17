import { test, expect } from '@playwright/test';
import HomePage from '../../pages/home/HomePage';
import LoginPage from '../../pages/user/LoginPage';
import user from '../../data/user.json';

test('Tc-01 -Successful login with valid credentials', async ({ page }) => {
    let homePage = new HomePage(page);
    let loginPage = new LoginPage(page);

    const validUserData = user.valid;
    
    await homePage.open();
    await loginPage.login(validUserData.email, validUserData.password);
    
// ✅ නිවැරදි
await expect(loginPage.userAccount).toContainText(validUserData.displayName);
});