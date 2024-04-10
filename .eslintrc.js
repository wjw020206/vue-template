module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'vue/multi-word-component-names': 'off'
  }
};
