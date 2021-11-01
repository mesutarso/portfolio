module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['next/core-web-vitals', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: { 'no-unused-vars': 'error', indent: ['error', 2] },
};
