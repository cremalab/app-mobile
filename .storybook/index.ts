import { getStorybookUI, configure } from "@storybook/react-native"

configure(() => {
  require("../src/stories")
}, module)

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
export const StorybookUIRoot = getStorybookUI({ port: 7007, onDeviceUI: true })