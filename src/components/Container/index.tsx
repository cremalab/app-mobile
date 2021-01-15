/* eslint-disable @typescript-eslint/no-explicit-any */
import AppLoading from "expo-app-loading"
import { Asset } from "expo-asset"
import * as Font from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import React, { ReactNode, useState } from "react"
import { Image, SafeAreaView, StyleSheet } from "react-native"

export function Container({ children }: { children: ReactNode }) {
  const [isReady, setIsReady] = useState(false)

  return !isReady ? (
    <AppLoading
      startAsync={cacheResources}
      onFinish={() => {
        setIsReady(true)
        SplashScreen.hideAsync()
      }}
      onError={console.warn}
      autoHideSplash={false}
    />
  ) : (
    <SafeAreaView style={styles.container}>{children}</SafeAreaView>
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

async function cacheResources(): Promise<any> {
  const imageAssets = cacheImages([
    // 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
    // require('./assets/images/circle.jpg'),
  ])

  const fontAssets = cacheFonts([
    // FontAwesome.font
  ])

  await Promise.all([...imageAssets, ...fontAssets] as Promise<unknown>[])
}

function cacheImages(images: Array<string | number>) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image)
    } else {
      return Asset.fromModule(image).downloadAsync()
    }
  })
}

function cacheFonts(fonts: Array<Parameters<typeof Font.loadAsync>[0]>) {
  return fonts.map((font) => Font.loadAsync(font))
}
