module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser for TypeScript
  extends: [
    "eslint:recommended",
    "plugin:react-hooks/recommended", // Enables react-hooks rules
  ],
  plugins: ["react-hooks"], // Required to use react-hooks rules
  rules: {
    "no-unused-vars": "off", // disable the base no-unused-vars rule
    // Optional: Add any specific rules you want to override.
    // For example:
    // "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    // "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
  },
  parserOptions: {
    ecmaVersion: 2021, // or higher, depending on your features
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
};
