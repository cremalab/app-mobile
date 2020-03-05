import { storiesOf } from "@storybook/react-native"
import React from "react"
import { Text } from "react-native"
import { Container } from "."

storiesOf("Container", module).add("default", () => (
  <Container>
    <Text>Test</Text>
  </Container>
))
