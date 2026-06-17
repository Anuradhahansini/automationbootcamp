class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginTriger = page.getByRole('link', { name: 'Login' });
        this.emailInput = page.getByRole('textbox', { name: 'Please enter your Phone or' });
        this.passwordInput = page.getByRole('textbox', { name: 'Please enter your password' });
        this.logingButton = page.getByRole('button', { name: 'LOGIN' });

        // ✅ span එකනිසා locator id එකෙන් හොයනවා
        this.userAccount = page.locator('#myAccountTrigger');
    }

    async openLoginModel() {
        await this.loginTriger.click();
    }

    async login(email, password) {
        await this.openLoginModel();
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.logingButton.click();
    }
}

export default LoginPage;