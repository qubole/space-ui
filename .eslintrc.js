module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        }
    },
    plugins: [
        'ember'
    ],
    extends: [
        'eslint:recommended',
        'plugin:ember/recommended'
    ],
    env: {
        browser: true,
        mocha: true
    },
    rules: {
        'new-parens': 'error',
        'no-bitwise': 2,
        'camelcase': [
            1,
            {
                'properties': 'never'
            }
        ],
        'curly': [
            1,
            'all'
        ],
        'eqeqeq': 2,
        'guard-for-in': 2,
        'no-extend-native': 2,
        'no-caller': 2,
        'no-empty': 2,
        'no-irregular-whitespace': 2,
        'quotes': [
            2,
            'single'
        ],
        'no-undef': 2,
        'no-unused-vars': 2,
        'complexity': 2,
        'max-len': [
            1,
            {
                'code': 120,
                'ignoreComments': true
            }
        ],
        'semi': 2,
        'no-eval': 2,
        'no-lone-blocks': 2,
        'comma-style': [
            2
        ],
        'no-shadow': 2,
        'dot-notation': 2,
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1
            }
        ],
        'consistent-this': [
            2,
            'that',
            'self'
        ],
        'one-var-declaration-per-line': 2,
        'key-spacing': 2,
        'comma-dangle': 2,
        'comma-spacing': 2,
        'eol-last': 2,
        'no-lonely-if': 2,
        'no-alert': 2,
        'no-unreachable': 2,
        'max-statements': [1, 40],
        'no-trailing-spaces': 1,
        'no-multi-spaces': 2,
        'no-multiple-empty-lines': 2
    },
    overrides: [
    // node files
        {
            files: [
                '.eslintrc.js',
                '.template-lintrc.js',
                'ember-cli-build.js',
                'index.js',
                'testem.js',
                'blueprints/*/index.js',
                'config/**/*.js',
                'tests/dummy/config/**/*.js'
            ],
            excludedFiles: [
                'addon/**',
                'addon-test-support/**',
                'app/**',
                'tests/dummy/app/**'
            ],
            parserOptions: {
                sourceType: 'script',
                ecmaVersion: 2015
            },
            'env': {
                'browser': false,
                'node': true,
                'jquery': true
            },
            plugins: ['node'],
            rules: Object.assign({}, require('eslint-plugin-node').configs.recommended.rules, {
                // add your custom rules and overrides for node files here
            })
        }
    ]
};
