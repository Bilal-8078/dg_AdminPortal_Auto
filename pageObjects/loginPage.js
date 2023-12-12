import testData from '../resources/testData';
require('dotenv').config();

class LoginPage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;


        this.email = page.getByLabel('Email *')

        this.passw = page.getByLabel('Password', { exact: true })
        this.login = page.getByRole('button', { name: 'Login' })
        this.mainLogo = page.locator('css-5g8z84')

        /* this.pageHeading = page.getByAltText('company-branding');
         this.username = page.getByPlaceholder('Username');
         this.password = page.getByPlaceholder('Password');
         this.loginBtn = page.getByRole('button', { name: 'Login' });
         this.dashbord = page.locator('oxd-topbar-header-breadcrumb');*/
    }

    async verifyLogin() {
        return await this.mainLogo.waitFor({state:'visible'}) ? true : false;
    }

    /**
     * Login on the Web App
     * @param {string} user Username of the web app
     * @param {string} pass Password of the web app
     *   */

    async loginToWebUI(user, pass) {


        await this.email.waitFor({ state: "visible", timeout: 60000 });
        await this.email.fill(user);
        await this.passw.fill(pass);

        await this.login.click();
    }

};

module.exports = { LoginPage };
