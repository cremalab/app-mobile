const expoPreset = require("jest-expo/jest-preset")

module.exports = Object.assign(expoPreset, {
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFilesAfterEnv: ["./src/setupTests.ts"],
  collectCoverageFrom: [
    "!node_modules",
    "!src/**/?(*.)stories.{ts,tsx}",
    "!src/index.tsx",
    "!src/serviceWorker.ts",
    "!src/setupTests.ts",
    "!src/index.storybook.tsx",
    "!src/**/?(*.)test.{ts,tsx}",
    "!**/*.d.ts",
    "!src/stories/*",
    "src/**/*.{ts,tsx}",
  ],
  transformIgnorePatterns: [
    ...expoPreset.transformIgnorePatterns,
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.|react-navigation|@react-navigation/.|@unimodules/.*|unimodules|sentry-expo|native-base)",
  ],
})
