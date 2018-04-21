module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
  rules: {
    indent: [
      'warn',
      2,
    ],
    'linebreak-style': [
      'warn',
      'unix',
    ],
    quotes: [
      'warn',
      'single',
    ],
    semi: [
      'warn',
      'always',
    ],
  },
};
