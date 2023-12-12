import testData from '../resources/testData';
require('dotenv').config();

class loginPage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;

        this.pageHeading = page.getByAltText('company-branding');
        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.loginBtn = page.getByRole('button', { name: 'Login' });
        this.dashbord = page.locator('oxd-topbar-header-breadcrumb');
    }

    async verifyLogin() {
        return await this.page.url().includes('dashboard') ? true : false;
    }

    /**
     * Login on the Web App
     * @param {string} user Username of the web app
     * @param {string} pass Password of the web app
     *   */

    async loginToWebUI(user, pass) {

        await this.pageHeading.isVisible();
        await this.username.waitFor({ state: 'visible' })
        await this.username.waitFor({ state: "visible", timeout: 60000 });
        await this.username.fill(user);
        await this.password.fill(pass);

        await this.loginBtn.click();
    }

};

module.exports = { loginPage };
