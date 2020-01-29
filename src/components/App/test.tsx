import React from "react"
import { App } from "."
import { render } from "@testing-library/react-native"

describe("App", () => {
  it("renders", () => {
    const { container } = render(<App />)
    expect(container).toBeDefined()
  })
})
