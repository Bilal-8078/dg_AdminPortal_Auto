const { test, expect } = require('@playwright/test');

exports.accountLimit_Setting = class accountLimit_Setting {
    constructor(page) {
        this.accountLimitLink = this.page.getByRole('link', { name: 'Account Limits' });

        //locators for Basic Account Settings
        this.basic_walletBalanceLimit = this.page.locator("(//input[@name='walletBalanceLimit'])[1]");
        this.basic_dailyTransferLimit = this.page.locator("(//input[@name='dailySpendLimit'])[1]");
        this.basic_debitLimit = this.page.locator("(//input[@name='dailyDebitLimit'])[1]");
        this.basic_monthlyDebitLimit = this.page.locator("(//input[@name='monthlyDebitLimit'])[1]");
        this.basic_maxBalancaLimit = this.page.locator("(//input[@name='maxBalanceLimit'])[1]");
        this.basic_monthlyMaximumCashIn = this.page.locator("(//input[@name='monthlyMaximumCashinLimit'])[1]");
        this.saveBasicAccountSetting = this.page.locator("(//button[@type='submit'])[1]");

        //locator for Max Account Settings
        this.max_walletBalanceLimit = this.page.locator("(//input[@name='walletBalanceLimit'])[2]");
        this.max_dailyTransferLimit = this.page.locator("(//input[@name='dailySpendLimit'])[2]");
        this.max_debitLimit = this.page.locator("(//input[@name='dailyDebitLimit'])[2]");
        this.max_monthlyDebitLimit = this.page.locator("(//input[@name='monthlyDebitLimit'])[2]");
        this.max_maxBalancaLimit = this.page.locator("(//input[@name='maxBalanceLimit'])[2]");
        this.max_monthlyMaximumCashIn = this.page.locator("(//input[@name='monthlyMaximumCashinLimit'])[2]");
        this.saveMaxAccountSetting = this.page.locator("(//button[@type='submit'])[2]");
    }

    async clearBasicAccountSetting(){
        await this.basic_walletBalanceLimit.fill('');
        await this.basic_dailyTransferLimit.fill('');
        await this.basic_debitLimit.fill('');
        await this.basic_monthlyDebitLimit.fill('');
        await this.basic_maxBalancaLimit.fill('');
        await this.basic_monthlyMaximumCashIn.fill('');
    }

    async addBasicAccountSetting(){
        await this.basic_walletBalanceLimit.type(350000);
        await this.basic_dailyTransferLimit.type(35000);
        await this.basic_debitLimit.type(2000);
        await this.basic_monthlyDebitLimit.type(1000);
        await this.basic_maxBalancaLimit.type(1000);
        await this.basic_monthlyMaximumCashIn.type(1000);  
        await this.saveBasicAccountSetting.click();
    }

    async clearMaxAccountSetting(){
        await this.max_walletBalanceLimit.fill('');
        await this.max_dailyTransferLimit.fill('');
        await this.max_debitLimit.fill('');
        await this.max_monthlyDebitLimit.fill('');
        await this.max_maxBalancaLimit.fill('');
        await this.max_monthlyMaximumCashIn.fill('');
    }

    async addBasicAccountSetting(){
        await this.max_walletBalanceLimit.type(350000);
        await this.max_dailyTransferLimit.type(35000);
        await this.max_debitLimit.type(2000);
        await this.max_monthlyDebitLimit.type(1000);
        await this.max_maxBalancaLimit.type(1000);
        await this.max_monthlyMaximumCashIn.type(1000);
        await this.saveMaxAccountSetting.click();
    }
    
}