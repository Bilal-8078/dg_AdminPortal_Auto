const { LoginPage } = require('../pageObjects/loginPage.js');
require('dotenv').config();

import { chromium } from '@playwright/test';

async function globalLogin() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  const login = new LoginPage(page);

  const URL = process.env.base_url;
  const Username = process.env.user_name;
  const Password = process.env.user_pass;

  await page.goto(URL);

  console.log(`Running Automated Tests on ${URL}\n`);

  const loggedInURL = await page.url();
  // await page.waitForURL(/login/)
  if (loggedInURL.includes('login')) {

    console.log(`Setting up Credentials for logging In via User: (${Username}), Password: (******)\n`);

    await login.loginToWebUI(Username, Password);
    await page.waitForTimeout(2000)
    // if (await page.url().includes('home')) {
    //   console.log('Login Successful!\n');
    // } else {
    //   process.exit(22);
    // }
    await page.context().storageState({ path: "user.json" });
  }

  await page.context().storageState({ path: "user.json" });
}
export default globalLogin