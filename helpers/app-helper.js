import testData from '../resources/testData';

exports.navigateToAccountLimit = async ({ page }) => {
  const baseURL = new URL(testData.Base_Url);
  console.log(baseURL.origin)
    await page.goto(`${baseURL.origin}/account-settings/`);
}
/*
// exports.navigateToAdmin = async ({ page }) => {
//     await page.goto(`${testData.Base_Url}/admin/viewSystemUsers`);
// }

// A function that returns a random alphabet
exports.randomAlphabet = () => {
  // An array of all the alphabets
  let alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
                   "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
                   // A random index between 0 and 25
  let index = Math.floor(Math.random() * 26);
  // Return the alphabet at the random index
  return alphabets[index];

}

exports.navigateToPim = async ({ page }) => {
  await page.goto(`${testData.Base_Url}/pim/viewEmployeeList`);
}

*/

