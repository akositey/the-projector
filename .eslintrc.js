module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/strongly-recommended" //needs eslint-plugin-vue,
  ],
  parserOptions: {
    parser: "babel-eslint", //needs babel-eslint
    ecmaVersion: 2019,
    sourceType: "module",
    allowImportExportEverywhere: true
  },
  plugins: ["vue"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/max-attributes-per-line": [
      2,
      {
        singleline: 20,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    "vue/attribute-hyphenation": [
      "error",
      "never",
      {
        ignore: []
      }
    ]
  },
  settings: {
    "import/resolver": "webpack.mix.js" //needs eslint-import-resolver-webpack
  }
};
