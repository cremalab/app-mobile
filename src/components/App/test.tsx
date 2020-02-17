import React from "react"
import { App } from "."
import { render } from "@testing-library/react-native"

describe("App", () => {
  it("renders", () => {
    const { getByText } = render(<App />)
    const text = getByText("Open up App.tsx to start working on your app!")
    expect(text).toBeDefined()
  })
})
