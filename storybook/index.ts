import { configure, getStorybookUI } from "@storybook/react-native"
import "loki/configure-react-native"
import "./rn-addons"

configure(() => {
  import("../src/stories")
}, module)

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
export const StorybookUIRoot = getStorybookUI({
  port: 7007,
  host: "localhost",
  onDeviceUI: false,
  asyncStorage: null,
})
