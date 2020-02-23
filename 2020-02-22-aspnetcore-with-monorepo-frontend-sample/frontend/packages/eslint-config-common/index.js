// https://eslint.org/docs/developer-guide/shareable-configs
module.exports = {
    'extends': [
        'standard'
    ],
    'rules': {
        'indent': ['error', 4],
        'space-before-function-paren': ['error', {"anonymous": "always", "named": "never", "asyncArrow": "always"}],
        'object-curly-spacing': ['error', 'always'],
        'operator-linebreak': ['error', 'before']
    },
    "overrides": [
        {
            "files": ["**/*.ts?(x)"],
            "rules": {
                '@typescript-eslint/indent': ['error', 4],
                //'@typescript-eslint/space-before-function-paren': ['error', 'never'],
                '@typescript-eslint/explicit-function-return-type': ['off'],
                '@typescript-eslint/promise-function-async': ['off'],
                '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }]
            }
        }
    ]
}