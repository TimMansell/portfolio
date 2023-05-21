module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
    'cypress/globals': true,
  },
  globals: {
    vi: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:cypress/recommended',
  ],
  plugins: ['react-refresh', 'prettier', 'cypress'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
};
