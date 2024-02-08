module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        sourceType: 'module',
    },
    rules: {
        'arrow-body-style': [
            'error',
            'always',
        ],
        indent: ['error', 4],
        'one-var': 0,
        'linebreak-style': ['error', 'unix'],
        quotes: [2, 'single', { avoidEscape: true }],
        semi: ['error', 'always'],
        'max-len': [
            'error',
            {
                code: 130,
            },
        ],
    },
};
