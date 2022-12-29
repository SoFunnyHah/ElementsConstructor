module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'task/client/tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/prop-types': 0,
    'prefer-const': 0,
    '@typescript-eslint/no-unsafe-argument': 2,
    '@typescript-eslint/no-unsafe-assignment': 2,
    '@typescript-eslint/no-unsafe-call': 2,
    '@typescript-eslint/no-unsafe-member-access': 2,
    '@typescript-eslint/no-unsafe-return': 2,
    '@typescript-eslint/no-explicit-any': 2,
  },
};