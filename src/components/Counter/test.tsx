import React from "react"
import { Counter } from "."
import { render, fireEvent } from "@testing-library/react-native"

describe("Counter", () => {
  it("displays the initial count", () => {
    const { getByText } = render(<Counter />)
    const text = getByText("Count is: 0")
    expect(text).toBeDefined()
  })

  it("can decrement count", () => {
    const { getByText } = render(<Counter />)
    const button = getByText("-")
    fireEvent.press(button)
    const text = getByText("Count is: -1")
    expect(text).toBeDefined()
  })

  it("can increment count", () => {
    const { getByText } = render(<Counter />)
    const button = getByText("+")
    fireEvent.press(button)
    const text = getByText("Count is: 1")
    expect(text).toBeDefined()
  })
})
