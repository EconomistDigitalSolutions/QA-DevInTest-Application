module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "indent": ["error", 2],
        "semi": ["error", "always"],
        "no-multi-spaces": ["error"],
        "no-multiple-empty-lines": [1, {"max": 1}],
        "require-jsdoc": ["error", {
            "require": {
                "FunctionDeclaration": true,
                "MethodDefinition": true,
                "ArrowFunctionExpression": true,
                "FunctionExpression": true,
            }
        }],
        "complexity": ["warn", {
            "max": 4,
        }],
        "max-depth": ["error", {
            "max": 4,
        }],
        "max-statements": ["warn", {
            "max": 8,
        }],
        "curly": ["error", "all"],
        "arrow-spacing": ["error", {
            before: true,
            after: true
        }],
    }
};