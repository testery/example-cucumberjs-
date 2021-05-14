import { Given, When, Then } from "@cucumber/cucumber";
import authenticate from '../paths/authenticate.path';
const assert = require("assert").strict;
const testData = require('../../TestData');

// Given I have valid credentials
Given('I have valid credentials', async () => {
    testData.testUser = testData.validUser;
    testData.testPass = testData.validPass;
});

var _res = null;
// When I submit the credentials
When('I submit the credentials', async () => {
    _res = await authenticate.postCredentails(testData.testUser, testData.testPass);
});

// Then I should expect a 200 response
Then('I should expect a {int} response', async (expectedHttpStatusCode) => {
    assert.equal(expectedHttpStatusCode, _res.statusCode, _res.text);
});