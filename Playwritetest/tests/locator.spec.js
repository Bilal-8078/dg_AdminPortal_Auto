import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/cart.html')

    await page.click('id=login2')
    await page.fill('id=loginusername','Touseef')
    await page.fill('id=loginpassword', 'Test@123')
    await page.click("//button[normalize-space()='Log in']")

})



