/* eslint-disable @typescript-eslint/no-var-requires */
import { resolve } from "path"
import withUnimodules from "@expo/webpack-config/withUnimodules"

module.exports = ({ config }: any) => {
  return withUnimodules(config, { projectRoot: resolve(__dirname, "../") })
}
