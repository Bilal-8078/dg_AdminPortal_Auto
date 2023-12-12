import { test, expect } from '@playwright/test';
import testData from '../../resources/testData';
//const app = require('../helpers/app-helper');

//import Adminclass from '../pageObjects/Admin'
const { Adminclass } = require('../../pageObjects/Admin');


test('Search user', async ({ page }) => {


    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

    const admin = new Adminclass(page);

    await admin.searchUser(testData.user);

});