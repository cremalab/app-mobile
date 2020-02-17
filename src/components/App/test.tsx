import { render } from "@testing-library/react-native"
import React from "react"
import { App } from "."

describe("App", () => {
  it("renders", () => {
    const { getByText } = render(<App />)
    const text = getByText("Open up App.tsx to start working on your app!")
    expect(text).toBeDefined()
  })
})
