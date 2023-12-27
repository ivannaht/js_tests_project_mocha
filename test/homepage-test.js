const { By } = require('selenium-webdriver');
const homepage = require('../pages/homepage');
const assert = require('chai').assert;
const homePageUrl = 'https://bstackdemo.com';

describe('Home page test suite', function() {
   
    this.beforeEach(async () => {  
        await homepage.goToUrl(homePageUrl);
    });

    it('Check Home page title', async () => {
        await driver.sleep(2000).then(async () => {
            await driver.getTitle().then(async (title) => {
                console.log(`verify title: ${title}`);
                assert.equal(title, 'StackDemo');
            });
        });
    });

    it('Check Sing In link', async () => {        
        await homepage.clickSignInLink().then(async () => {
            await driver.sleep(2000).then(async () => {
                await driver.getCurrentUrl().then(async (currentUrl) => {
                console.log(`verify sign in url: ${currentUrl}`);
                assert.equal(currentUrl, 'https://bstackdemo.com/signin');
                });
            });   
        });
    });
    
    it('Check that the 1st element of the list is inactive', async () => {  
        await homepage.selectSecondDropdownOption();
    });

    it('Check that the 2nd element of the list is active', async () => { 
        await homepage.selectSecondDropdownOption();     
    });
    
    this.afterAll(async () => {
        await homepage.closeBrowser();
    });
});
