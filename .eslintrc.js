module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "indent": ["error", 2],
    "semi": ["error", "always"],
    "no-extra-semi": ["error"],
    "no-multi-spaces": ["error"],
    "no-multiple-empty-lines": [1, {"max": 1}],
    "valid-jsdoc": ["error", {
      "requireReturn": false,
      "requireReturnType": true,
      "requireParamDescription": true,
      "requireReturnDescription": true,
      "requireParamType": true,
    }],
    "complexity": ["warn", {
      "max": 4,
    }],
    "max-depth": ["error", {
      "max": 4,
    }],
    "max-statements": ["warn", {
      "max": 10,
    }],
    "curly": ["error", "all"],
    "arrow-spacing": ["error", {
      before: true,
      after: true
    }],
  }
};