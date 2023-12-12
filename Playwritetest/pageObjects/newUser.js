import { log } from 'console';
import testData from '../resources/testData';


class newUser {
    /**
    * @param {import('@playwright/test').Page} page
    */

    constructor(page) {
        this.page = page;
        // Commoun Locators
        

        // New Users Section
        this.addUser = page.locator('//*[@class="orangehrm-header-container"]/button')
        this.dropDown_Icon = page.locator('form i').first()
        this.dropDown_Option = page.getByRole('option', { name: 'ESS' }).locator('span')

        this.click_Employeename = page.getByPlaceholder('Type for hints...')
        this.fill_Employeename = page.getByPlaceholder('Type for hints...')
        this.employeeNameOption = page.getByRole('listbox');
        this.Select_Employeename = page.getByRole('option')
        this.dropdown_Icon_Status = page.locator('form i').nth(1)
        this.Select_Status_option = page.getByRole('option', { name: 'Enabled' })
        this.click_Username = page.getByRole('textbox').nth(2)
        this.Fill_UserName = page.getByRole('textbox').nth(2)
        this.click_pass = page.getByRole('textbox').nth(3)
        this.fill_pass = page.getByRole('textbox').nth(3)
        this.click_confirm_pass = page.getByRole('textbox').nth(4)
        this.fill_confirm_pass = page.getByRole('textbox').nth(4)
        this.Click_save = page.getByRole('button', { name: 'Save' })
        this.message = page.locator('//*[@id="oxd-toaster_1"]/div');
       
        // Edit Users Section
        this.editButton= page.locator('oxd-icon-button oxd-table-cell-action-space' )
        this.clickUsernamefield = page.getByRole('textbox').nth(2)
        this.updateText = page.getByRole('textbox').nth(2).fill('Admin1');
        this.clickSave = page.getByRole('button', { name: 'Save' })
        this.message = page.locator('//*[@id="oxd-toaster_1"]/div');
        this.editRowColumns = page.locator('oxd-table-row oxd-table-row--with-border');


    }


    async add_new_User(employeeName, userName, userPassword, confirmPass) {
        await this.addUser.click();

        await this.page.waitForURL('**\/saveSystemUser')
        await this.dropDown_Icon.waitFor({ state: 'visible' });
        await this.dropDown_Icon.click();
        await this.dropDown_Option.click();

        await this.click_Employeename.click();
        await this.fill_Employeename.fill(employeeName);

        await this.employeeNameOption.waitFor({ state: 'visible' });
        await this.page.waitForTimeout(3000);
        await this.employeeNameOption.press('ArrowDown');
        await this.employeeNameOption.click();

        await this.dropdown_Icon_Status.click();
        await this.Select_Status_option.click();
        await this.click_Username.click();
        await this.Fill_UserName.fill(userName);
        await this.click_pass.click();
        await this.fill_pass.fill(userPassword);
        await this.click_confirm_pass.click();
        await this.fill_confirm_pass.fill(confirmPass);
        await this.Click_save.click();
        await this.message.waitFor({ state: 'visible', timeout: 6000 });
        return (await this.message.allInnerTexts()).includes('Successfully') ? true : false;
    }

    async editUser (user1)
    {

       let firstColumn = await this.editRowColumns.first().filter({has:'oxd-icon-button oxd-table-cell-action-space'});
       firstColumn.last().click();
        await this.clickUsernamefield.click();
      
        await this.updateText.fill(user1)
        await this.clickSave.click()
        await this.message.waitFor({ state: 'visible', timeout: 6000 });
        return (await this.message.allInnerTexts()).includes('Successfully') ? true : false;

   }
};


module.exports = { newUser };