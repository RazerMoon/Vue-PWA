module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "plugin:vue/vue3-recommended",
    "@vue/typescript/recommended",
    "prettier/@typescript-eslint",
  ],
  parserOptions: {
    'comma-dangle': ['error', 'always-multiline'],
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaVersion: 2018,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'vue/script-indent': 'warn'
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        mocha: true,
      },
    },
  ],
};
