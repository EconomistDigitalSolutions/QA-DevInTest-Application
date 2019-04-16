const { Given, When, Then } = require('cucumber');
const { By } = require('selenium-webdriver');
const assert = require('assert');
const World = require('../support/world');

let jobsSector;

When(/^I search for jobs with keyword (.*) in location (.*) within (.*) miles$/, async (keyword, location, miles) => {
    await World.driver.findElement({id:'keywords'}).sendKeys(keyword);
    await World.driver.findElement({id:'location'}).sendKeys(location);
    await World.driver.findElement({css:"#RadialLocation>option[value='" + miles + "']"}).click(); 
    return await World.driver.findElement({css: "input[type='submit'][value='Search']" }).submit();
});

Then(/^search results should contain keyword (.*)$/, async (keyword) => {
    let searchResultsHeading = await World.driver.findElement({ id: 'searching' }).getText();
    return searchResultsHeading.toUpperCase().includes(keyword.toUpperCase());
});

When(/^I search for jobs by sector (.*)$/, async (sector) => {
    jobsSector = sector;
    return await World.driver.findElement({ xpath: "//a[.='" + sector + "']" }).click();
});

Then(/^I should see jobs only from that sector(.*)$/, async (sectorKeywords) => {
    let splitKeys = sectorKeywords.trim().split(",");    
    let jobListItems = await World.driver.findElements({css:"#listing>li[class*='item-']"});    
    for(let item of jobListItems) {
        let itemTxt = await item.getText();
        if(!includesSectorKeyword(splitKeys, itemTxt)) {
            assert(false,"Job description does not contain any sector keyword : " + itemTxt );
        }
    }
    // second condition : heading mentions the right sector
    let jobsHeading = await World.driver.findElement({ id: 'browsing' }).getText(); 
    return assert(jobsHeading.includes(jobsSector));
});

/**
 * utility function to check if the targetString contains any of an array of strings
 * @param {*} sectorKeywordsArray 
 * @param {*} str 
 */
function includesSectorKeyword(keywordsArray, targetString) {
    targetString = targetString.toUpperCase();
    let includes = false; // boolean 
    for (let key of keywordsArray) {
         if(targetString.includes(key.toUpperCase())) {
            includes = true;
            break;
        }  
    }
    return includes;
}

When('I click further on a job listing', async () => {
    return await World.driver.findElement({ css: "#listing li a" }).click();
});

Then('I should see job details and a widget to apply', async () => {
    let btn = await World.driver.findElement(By.linkText("Apply"));
    let jobDescription = await World.driver.findElement({ css: "div.job-description" }).getText();
    return assert(btn && (jobDescription!==""));
});
