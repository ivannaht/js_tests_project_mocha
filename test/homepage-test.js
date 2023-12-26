const { By } = require('selenium-webdriver');
const homepage = require('../pages/homepage');
const assert = require('chai').assert;
const baseurl = 'https://bstackdemo.com';


describe('Home Page Test', function() {
    this.timeout(50000);
   
    beforeEach(async function() {  
        await homepage.goToUrl(baseurl);
    });

    it('Home Page Title Check', async function() {
        await driver.sleep(2000).then(async () => {
            await driver.getTitle().then(async (title) => {
                console.log(`verify title: ${title}`);
                assert.equal(title, 'StackDemo');
            });
        });
    });

    it('Sing In Link Check', async function() {        
        await driver.findElement(By.xpath('//a[@id="signin"]')).click().then(async () => {
            await driver.sleep(2000).then(async () => {
                await driver.getCurrentUrl().then(async (currentUrl) => {
                console.log(`verify sign in url: ${currentUrl}`);
                assert.equal(currentUrl, 'https://bstackdemo.com/signin');
                });
            });   
        });
    });


    afterEach(async function() {
        // await homepage.closeBrowser();
    });
});
