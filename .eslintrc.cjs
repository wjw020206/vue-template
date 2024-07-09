module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    './.eslintrc-auto-import.json',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'none',
      },
    ],
    'vue/no-v-html': 'off',
  },
};
