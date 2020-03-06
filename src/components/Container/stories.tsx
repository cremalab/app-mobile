import { storiesOf } from "@storybook/react-native"
import React from "react"
import { Text } from "react-native"
import { Container } from "."

storiesOf("Container", module).add("example", () => (
  <Container>
    <Text>Test</Text>
  </Container>
))
