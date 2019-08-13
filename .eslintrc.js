module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  // parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    // 'semi': ['error', 'never'],
    'no-underscore-dangle': ['error', { 'allow': ['_id'] }],
    'no-console': ['error', { allow: ['log', 'error'] }],
    'template-curly-spacing': ['error', 'always'],
    'no-use-before-define': ['error', { 'variables': false }],
    'no-shadow': 'off',
    'global-require': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-expressions': ['error', { 'allowTaggedTemplates': true }],
  },
};
