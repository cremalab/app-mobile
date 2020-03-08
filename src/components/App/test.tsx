import { render, waitForElement } from "@testing-library/react-native"
import React from "react"
import { App } from "."

describe("App", () => {
  it("renders", async () => {
    const { getByText, queryByText } = render(<App />)

    await waitForElement(() => queryByText("Welcome to crema-app-mobile"))
    const text = getByText("Open up App.tsx to start working on your app!")

    expect(text).toBeDefined()
  })
})
