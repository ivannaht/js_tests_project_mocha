const { By } = require('selenium-webdriver');
const homepage = require('../pages/homepage');
const assert = require('chai').assert;
const homePageUrl = 'https://bstackdemo.com';

describe('Home Page Test', function() {
   
    this.beforeEach(async () => {  
        await homepage.goToUrl(homePageUrl);
    });

    it('Home Page Title Check', async () => {
        await driver.sleep(2000).then(async () => {
            await driver.getTitle().then(async (title) => {
                console.log(`verify title: ${title}`);
                assert.equal(title, 'StackDemo');
            });
        });
    });

    it('Sing In Link Check', async () => {        
        await homepage.clickSignInLink().then(async () => {
            await driver.sleep(2000).then(async () => {
                await driver.getCurrentUrl().then(async (currentUrl) => {
                console.log(`verify sign in url: ${currentUrl}`);
                assert.equal(currentUrl, 'https://bstackdemo.com/signin');
                });
            });   
        });
    });            

    this.afterAll(async () => {
        await homepage.closeBrowser();
    });
});
