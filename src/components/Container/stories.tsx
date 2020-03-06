import { storiesOf } from "@storybook/react-native"
import React from "react"
import { Text } from "react-native"
import { Container } from "."

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

storiesOf("Container", module).add("example", () => (
  <Container>
    <Text>Test</Text>
  </Container>
))
