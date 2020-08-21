import { render, waitFor } from "@testing-library/react-native"
import React from "react"
import { App } from "."

describe("App", () => {
  it("renders", async () => {
    // Arrange
    const title = "Welcome to crema-app-mobile"
    const subtitle = "Open up App.tsx to start working on your app!"

    // Act
    const { getByText, queryByText } = render(<App />)
    await waitFor(() => queryByText(title))
    const received = getByText(subtitle)

    // Assert
    expect(received).toBeDefined()
  })
})
