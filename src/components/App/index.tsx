import React from "react"
import { Text } from "react-native"
import { Container } from "../Container"
import { Counter } from "../Counter"

export function App() {
  return (
    <Container>
      <Text>Welcome to crema-app-mobile</Text>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Example interactivity:</Text>
      <Counter />
    </Container>
  )
}
