import { test, expect } from '@playwright/test';
import testData from '../../resources/testData';
const { GenralInfo } = require('../../pageObjects/AccountLimit')
import app from '../../helpers/app-helper';
import exp from 'constants';

test.describe('Jobs', () => {
   
  let genInfo;
     
    // test.beforeEach(async ({ page }, testInfo) => {
    //   let genInfo;
    //   console.log(`Running ${testInfo.title}`);
    //   genInfo = new GenralInfo(page);
      
    // });
  
    // Add Job
  
    test('Navigate to AccountLimit  ', async ({ page }) => {
      genInfo = new GenralInfo(page);
     await app.navigateToAccountLimit({page});
     //genInfo.navigateToAccountlimit();
      /*
      const egenInfo = await genInfo.editGeneralinfo(testData.updateOrgName);
      expect(egenInfo).toBeTruthy();*/
    }); 
  
  });
  