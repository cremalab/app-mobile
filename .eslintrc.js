module.exports = {
    root: true,
    extends: [
      "plugin:@typescript-eslint/recommended",
      "prettier",
      "prettier/@typescript-eslint",
      "react-app",
      "plugin:prettier/recommended"
    ],
    plugins: [
      "@typescript-eslint",
      "react",
      "react-native"
    ],
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/explicit-function-return-type": "off", // TS can infer this
    },
    settings:  {
      react:  {
        version:  "detect",  // Tells eslint-plugin-react to automatically detect the version of React to use
      },
    },
  }