
import { test, expect } from '@playwright/test';
import testData, { user1 } from '../../resources/testData';
const { newUser } = require('../../pageObjects/newUser');

import app from '../../helpers/app-helper';


test.describe('Users', () => {
  let eUser, nUser, randomInitials;
  let username = testData.userName;

  test.only('Add new User', async ({ page }) => {
    nUser = new newUser(page);
    app.navigateToAdmin({ page });
    randomInitials = app.randomAlphabet();

    //const user = 
    await nUser.add_new_User(randomInitials, username, testData.Password, testData.confirm_pass);
   // expect(user).toBeTruthy();

  });


  /*test('Edit', async ({ page }) => {
    nUser = new newUser(page);
    eUser = new editUser(page);
    app.navigateToAdmin({ page });
    randomInitials = app.randomAlphabet();
    const usertest = await eUser.editUser(testData.user1)
    expect(usertest).toBeTruthy();


  });*/

});











