import React, { useState } from "react"
import { Button, StyleSheet, Text, View } from "react-native"

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <View>
      <Text>Count is: {count}</Text>
      <View style={styles.button}>
        <Button onPress={() => setCount(count - 1)} title="-" />
      </View>
      <View style={styles.button}>
        <Button onPress={() => setCount(count + 1)} title="+" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    margin: 8,
  },
})
