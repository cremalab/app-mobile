---
to: src/components/<%= name %>/index.tsx
---
<% if(useState) { -%>
import React, { useState } from "react"
import { Button, StyleSheet, Text, View } from "react-native"

type Props = Readonly<{}>

export function <%= name %>(_: Props) {
  const [count, setCount] = useState(0)
  return (
    <View style={styles.container}>
      <Text>You clicked {count} times</Text>
      <Button onPress={() => setCount(count + 1)} title="<%= name %>" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})
<% } else { -%>
import React from "react"
import { StyleSheet, Text } from "react-native"

type Props = Readonly<{}>

export function <%= name %>(_: Props) {
  return <Text style={styles.container}><%= name %></Text>
}

const styles = StyleSheet.create({
  container: {},
})
<% } -%>
