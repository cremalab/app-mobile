import { fireEvent, render } from "@testing-library/react-native"
import React from "react"
import { Counter } from "."

describe("Counter", () => {
  it("displays the initial count", () => {
    // Arrange
    const text = "Count is: 0"

    // Act
    const { getByText } = render(<Counter />)
    const received = getByText(text)

    // Assert
    expect(received).toBeDefined()
  })

  it("can decrement count", () => {
    // Arrange
    const text = "Count is: -1"
    const buttonText = "-"

    // Act
    const { getByText } = render(<Counter />)
    const button = getByText(buttonText)
    fireEvent.press(button)
    const received = getByText(text)

    // Assert
    expect(received).toBeDefined()
  })

  it("can increment count", () => {
    // Arrange
    const text = "Count is: 1"
    const buttonText = "+"

    // Act
    const { getByText } = render(<Counter />)
    const button = getByText(buttonText)
    fireEvent.press(button)
    const received = getByText(text)

    // Assert
    expect(received).toBeDefined()
  })
})
