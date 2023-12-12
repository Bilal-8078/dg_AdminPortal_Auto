## Tenovos Playwright Functional Tests
 
### Overview
 
Tenovos Playwright Tests is an internal project developed by Tenovos, a private organization. Access to and use of this project is restricted to authorized personnel within the organization. It is imperative not to share or distribute this project with individuals who are not part of Tenovos or lack proper authorization.
 
This project demonstrates how Playwright can be utilized for comprehensive end-to-end testing of web applications. Playwright is a powerful and versatile automation tool designed for modern web testing. This README provides an insight into the project's functionality and provides guidance for executing the tests.
 
Please note that this project is intended for internal use only and should not be shared with unauthorized individuals or made public.
 
### Getting Started
 
Before you commence, ensure that you have the following prerequisites in place:
 
- **Node.js and npm:** It's essential to have Node.js and npm installed on your system.
 
### Installation
 
1. Clone this repository to your local machine:
 
   ```bash
   git clone https://github.com/Tenovos/tenovos-qa-automation.git
   ```
 
2. Navigate to the project directory:
 
   ```bash
   cd playwright-functional-test
   ```
 
3. Install project dependencies:
 
   ```bash
   npm install
   ```
 
### Configuration
 
Feel free to customize the Playwright configuration to align with your specific requirements. You can adjust settings like the browsers to use and other options in the `playwright.config.js` file.
 
### Updating Playwright
 
To ensure you have the latest version of Playwright, execute the following command:
 
```bash
npm install -D @playwright/test@latest
```
 
You can always verify the installed Playwright version by running:
 
```bash
npx playwright --version
```
 
### Download Latest Web Drivers
 
For Playwright to operate seamlessly, it necessitates up-to-date web drivers. To obtain the latest web drivers, use the following command:
 
```bash
npx playwright install
```
 
### Running Tests
 
Execute the Playwright tests by invoking the following command:
 
```bash
npx playwright test
```
 
You can also target specific features or tests using dedicated commands. Just specify the feature or folder name:
 
- To run the Admin Metadata tests:
 
  ```bash
  npm run admin:metadata
  ```
 
- For Admin Security tests:
 
  ```bash
  npm run admin:security
  ```
 
- To run Admin Content tests:
 
  ```bash
  npm run admin:content
  ```
 
### Project Structure
 
- `testFeatures/`: This directory houses the Playwright test scripts.
- `playwright.config.js`: It serves as the configuration file for Playwright.
- `package.json`: Contains project dependencies and custom scripts.
 
### Contribution
 
Contributions are always welcome. If you wish to contribute to this project, don't hesitate to open issues or submit pull requests.
 
### License
 
This project operates under the MIT License. For more details, please refer to the [LICENSE.md](LICENSE.md) file.