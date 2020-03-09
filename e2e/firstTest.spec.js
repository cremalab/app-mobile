const { reloadApp } = require("detox-expo-helpers")

describe("Example", () => {
  beforeEach(async () => {
    await await reloadApp()
  })

  it("should have welcome screen", async () => {
    await expect(element(by.label("Welcome to crema-app-mobile"))).toBeVisible()
  })

  it("should start the count at 0", async () => {
    await expect(element(by.label("Count is: 0"))).toBeVisible()
  })

  it("should be able to increment the count", async () => {
    await element(by.label("+"))
      .atIndex(0)
      .tap()
    await expect(element(by.label("Count is: 1"))).toBeVisible()
  })

  it("should be able to decrement the count", async () => {
    await element(by.label("-"))
      .atIndex(0)
      .tap()
    await expect(element(by.label("Count is: -1"))).toBeVisible()
  })
})
