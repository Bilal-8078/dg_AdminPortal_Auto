import { test, expect } from '@playwright/test';
import testData from '../../resources/testData';
const { GenralInfo } = require('../../pageObjects/AccountLimit');
const {accountLimit} = require('../../pageObjects/accountLimit_Setting');
import app from '../../helpers/app-helper';
import exp from 'constants';

test.describe('Jobs', () => {

  let genInfo;

  test('Navigate to AccountLimit  ', async ({ page }) => {
    genInfo = new GenralInfo(page);
    await app.navigateToAccountLimit({ page });
  });

  test('clear and add basic account settings',async({page}) =>{
    await accountLimit

  });

});
