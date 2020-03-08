const jestPreset = require("@testing-library/react-native/jest-preset")
const expoPreset = require("jest-expo/jest-preset")

module.exports = Object.assign(expoPreset, jestPreset, {
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
})
