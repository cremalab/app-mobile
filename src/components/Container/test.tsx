import { render, waitForElement } from "@testing-library/react-native"
import React from "react"
import { Text } from "react-native"
import { Container } from "."

describe("Container", () => {
  it("renders", async () => {
    const { getByText, queryByText } = render(
      <Container>
        <Text>Test</Text>
      </Container>,
    )

    await waitForElement(() => queryByText("Test"))
    const text = getByText("Test")

    expect(text).toBeDefined()
  })
})
