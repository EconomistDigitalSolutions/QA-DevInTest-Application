const { After, Before } = require('cucumber');
const World = require('../support/world');
const dataReader = require('../support/helpers/dataReader');

/**
 * Calls buildDriver function if there is a test case
 */
function testCaseHook(finished, testCase, callback) {
  if (!finished) {
    World.start();
    dataReader.setSource();
  }

  if (callback) {
    callback();
  }
}

const after = testCaseHook.bind(this, true);

const before = testCaseHook.bind(this, false);

Before(before);
After(after);
After(() => World.end());
