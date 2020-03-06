import { storiesOf } from "@storybook/react-native"
import React from "react"
import { Counter } from "."

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

storiesOf("Counter", module).add("example", () => <Counter />)
