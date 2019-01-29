const { After, Before } = require('cucumber');
const World = require('../support/world');

/**
 * Hooks into test case lifecycles
 * @param {boolean} finished Whether the test case has finished
 * @param {object} testCase The case in context
 * @param {function} callback The callback to call once the hook is executed
 */
function testCaseHook(finished, testCase, callback) {
  // If we've not finished then we're just starting a test!
  // So we start the driver up and set the video name
  if (!finished) {
    World.start();
  }

  if (callback) {
    callback();
  }
}

/**
 * Called after each test finishes
 */
const after = testCaseHook.bind(this, true);

/**
 * Called before each test begins
 */
const before = testCaseHook.bind(this, false);

Before(before);
After(after);
After(() => World.end());
