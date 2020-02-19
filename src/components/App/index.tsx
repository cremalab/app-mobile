import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Counter } from "../Counter"

export function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to crema-app-mobile</Text>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Example interactivity:</Text>
      <Counter />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
