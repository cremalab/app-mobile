---
to: src/components/<%= name %>/index.tsx
---
<% if(!withExample) { -%>
import React from "react"

export function <%= name %>() {
  return <></>
}
<% } else if(useState) { -%>
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
import { StyleSheet, Text, View } from "react-native"

type Props = Readonly<{}>

export function <%= name %>(_: Props) {
  return (
    <View style={styles.container}>
      <Text><%= name %></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})
<% } -%>
