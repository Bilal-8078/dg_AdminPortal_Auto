import { log } from 'console';
import testData from '../resources/testData';
import { url } from 'inspector';

class GenralInfo {

  /**
* @param {import('@playwright/test').Page} page
*/

  constructor(page) {
    this.page = page;

    this.clickGenTab = page.locator('li').filter({ hasText: 'Organization' })

    // this.selectGenTabOption = page.getByRole('menuitem', { name: 'General Information' })

    this.message = page.locator('//*[@id="oxd-toaster_1"]/div');

    this.turnOnTogle = page.locator('label').filter({ hasText: 'Edit' }).locator('span');

    this.orgnaizationName = page.locator('div:nth-child(2) > .oxd-input').first();

    this.clickSave = page.getByRole('button', { name: 'Save' });

    this.clickAccount = page.getByRole('link', { name: 'Account Limits' })
      this.savebutton = page.locator('#mui-22')



  }

  async verifyMessage() {
    await this.message.waitFor({ state: 'visible', timeout: 6000 });
    const msg = await this.message.innerText();
    return msg;
  }

  async toggle() {
    await this.turnOnTogle.check()

  }

  async editGeneralinfo(updateOrgName) {
    await this.selectGenealtab('General Information')
    await this.toggle()
    await this.orgnaizationName.clear()
    await this.orgnaizationName.fill(updateOrgName)
    await this.clickSave.click()
    const msg = await this.verifyMessage();

    return msg.includes('Successfully') ? true : false;

  }

  async selectGenealtab(selectGenTabOption) {
    await this.clickGenTab.click();
    this.page.getByRole('menuitem', { name: selectGenTabOption }).click()
  }

  async verifyEnablefield() {
    await this.selectGenealtab('General Information')
    await this.toggle()
    const org = await this.orgnaizationName.isEnabled();
    console.log(org);
    return org;


  }

  async navigateToAccountlimit()
  {
      await this.clickAccount.click()
      await this.savebutton.click()

    } 

}

module.exports = { GenralInfo };