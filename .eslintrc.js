module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 13
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    'jsx-quotes': ['error', 'prefer-double'],
    'indent': ['error', 2],
    'semi': ['error', 'always'],
    'react/prop-types': 'off'
  }
};
