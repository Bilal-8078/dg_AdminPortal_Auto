import testData from '../resources/testData';


class Adminclass {
    /**
    * @param {import('@playwright/test').Page} page
    */

    constructor(page) {
        this.page = page;

        this.adminBtn = page.getByRole('link', { name: 'Admin' });

        this.userManagement = page.locator('li').filter({ hasText: 'User Management' }).locator('i');
        this.manuItem = page.getByRole('menuitem', { name: 'Users' });
        this.userNameInput = page.getByRole('textbox').nth(1);
        // this.page.getByRole('textbox').nth(1).fill('Admin');
        // this.page.getByText('-- Select --').first().click();
        // this.page.getByRole('option', { name: 'Admin' }).locator('span').click();
        // this.page.getByRole('button', { name: 'Search' }).click();
        // this.page.getByRole('button', { name: '' }).click();
        // this.page.locator('form').getByText('Admin').click();
        // this.page.getByRole('button', { name: 'Save' }).click();
    }

    async searchUser(user) {
        await this.adminBtn.click();
        await this.userManagement.click();
        await this.manuItem.click();
        await this.userNameInput.isVisible();
        await this.userNameInput.fill(user);
    }



};

module.exports = { Adminclass };