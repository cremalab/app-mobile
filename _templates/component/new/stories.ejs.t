---
to: src/components/<%= name %>/stories.tsx
---
import { storiesOf } from "@storybook/react-native"
import React from "react"
import { <%= name %> } from "."

storiesOf("<%= name %>", module).add("example", () => <<%= name %> />)
