module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['airbnb', 'airbnb/hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'import/order': ['error', {
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
      groups: [
        ['builtin', 'external'],
      ],
      'newlines-between': 'always',
    }],
    'import/prefer-default-export': 0,
    'max-len': ['error', 120],
    'no-else-return': 0,
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0 }],
    'no-nested-ternary': 0,
    'no-use-before-define': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-unescaped-entities': 0,
    'react/no-unused-prop-types': 0,
    'react/state-in-constructor': 0,
    'react/forbid-prop-types': [1, { checkContextTypes: false, checkChildContextTypes: false }],
    'react/function-component-definition': 0,
    'react/no-unstable-nested-components': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react-hooks/exhaustive-deps': 2,
    // TODO: its ok to have console.logs while learning a new technology :) remove later
    'no-console': 0,
  },
  settings: {},
  ignorePatterns: ['**/*.d.ts', '.eslintrc.js'],
};
