---
to: src/components/<%= name %>/test.tsx
---
<% if(!withExample) { -%>
import { <%= name %> } from "."
import React from "react"

describe("<%= name %>", () => {
  it.todo(`<%= name %> needs to be tested`)
})
<% } else if(useState) { -%>
import { <%= name %> } from "."
import { render, fireEvent } from "@testing-library/react-native"
import React from "react"

describe("<%= name %>", () => {
  it("has correct message before clicking", () => {
    // Arrange
    const message = "You clicked 0 times"

    // Act
    const { getByText } = render(<<%= name %> />)
    const received = getByText(message)

    // Assert
    expect(received).toBeDefined()
  })

  it("has correct message after clicking", () => {
    // Arrange
    const name = "Click Me"
    const message = "You clicked 1 times"

    // Act
    const { getByText } = render(<<%= name %> />)
    const button = getByText(name)
    fireEvent.press(button)
    const received = getByText(message)

    // Assert
    expect(received).toBeDefined()
  })
})
<% } else { -%>
import { <%= name %> } from "."
import { render } from "@testing-library/react-native"
import React from "react"

describe("<%= name %>", () => {
  it("name prop is rendered", () => {
    // Arrange
    const name = "<%= name %>"

    // Act
    const { getByText } = render(<<%= name %> />)
    const received = getByText(name)

    // Assert
    expect(received).toBeDefined()
  })
})
<% } -%>