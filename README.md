# Crema App - Mobile 📱

[![Build Status](https://github.com/cremalab/crema-app-mobile/workflows/CI/badge.svg)](https://github.com/cremalab/crema-app-mobile/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![runs with expo](https://img.shields.io/badge/Runs%20with%20Expo-4630EB.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.io/)

This project includes configuration and tooling that conforms to Crema's baseline best-practices for a Mobile Application.

**🧰 Tools Used**

- [Expo](https://expo.io/) for simple configuration 😅
- [ESLint](https://eslint.org) for code linting
- [Jest](https://jestjs.io) for unit tests
- [Loki](https://loki.js.org) for visual testing
- [Prettier](https://prettier.io) for code formatting (via ESLint plugin)
- [Storybook](https://storybook.js.org) for component playground (and used by Loki)
- [TypeScript](http://www.typescriptlang.org) for Static Typing in JavaScript ([Learn](http://www.typescriptlang.org/docs/handbook/basic-types.html))

## 🏗 Setup

1. [Install Node/NPM](https://nodejs.org/en/)
2. [Install NVM](https://github.com/creationix/nvm#installation-and-update) (Node Version Manager)
3. `nvm install 'lts/*' && nvm use`
4. `npm i -g expo-cli`
5. `npm i` (install project dependencies)
6. [Install the ESLint plugin for ~~your editor~~ VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
7. Enable "Auto-Fix on Save" in `settings.json`:
```
// There will likely be other settings within this JSON object...
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```
8. Ensure that `XCode` and the related command line tools are setup using [this guide](https://docs.expo.io/versions/latest/workflow/ios-simulator/)
9. Ensure that `Android Studio` and a virtual device (Emulator) are setup using [this guide](https://docs.expo.io/versions/v37.0.0/workflow/android-studio-emulator/)
10. Ensure that `adb` is setup correctly, if you have followed step `9` it should be.
    - If `adb --version` outputs a version then you should be good to go.


## 👟 Run

### Start Expo

You can start the expo process with a number of different commands that each do something slightly different.

- `npm start` - Starts the expo development server but does not open the app on any devices.
- `npm run start:ios`, `npm run start:android`, `npm run start:web` - Starts the expo development server and attempts to open the app on a device that matches the platform in the script (i.e. `ios`, `android`, or `web`).
- `npm run start:visual` - Starts the expo development server using the storybook entry point (i.e. `index.storybook.tsx` ) as well as starts the storybook server.


### On Device

There are a number of different ways to run your app, some virtual and some on physical hardware.

#### iOS Simulator

As long as XCode is setup correctly you should be able to start the Simulator directly from the Expo dev tools by pressing `i` in the terminal, clicking `Run on iOS simulator`, or by starting the app with `npm run start:ios`.

- [Expo Docs - iOS Simulator](https://docs.expo.io/versions/v37.0.0/workflow/ios-simulator/)

#### Android Emulator

If Android Studio is installed correctly you should be able to open an emulator by following these steps:

1. Open the Android Studio app
2. Click the button `Configure` in the bottom right of the window
3. Click `AVD Manager` from the list of options
4. Click `Launch this AVD in the Emulator` (It's the green play icon )
    - If there are no devices in the list then create one by clicking `Create Virtual Device` 
5. You should be able to launch the app on the Emulator from the Expo dev tools by pressing `a` in the terminal, clicking `Run on Android device/emulator`, or by starting the app with `npm run start:android`.

- [Expo Docs - Android Studio Emulator](https://docs.expo.io/versions/v37.0.0/workflow/android-studio-emulator/)

#### Actual Device

_More to come in the future, for now here are some convenient links to consider._

- [Expo Docs - Testing on Physical Devices](https://docs.expo.io/versions/v37.0.0/guides/testing-on-devices/)

## 📋 Test

### Lint

Linting is done with `ESlint` and `Prettier` and can be ran with `npm run test:lint` or `npm run test:lint:fix` which will attempt to auto-fix any issues that it can.

The relevant configuration files are:
- `.eslintrc.js`
- `.prettierrc.js`

### Types

Type checking is done with `tsc` and can be ran with `npm run test:types` or started in watch mode with `npm run start:types`.

The typescript config is at `tsconfig.json`.

### Unit

Unit testing is done with Jest and can be ran with `npm run test:unit` or started in watch mode with `npm run start:unit`.

### Visual

Visual testing is done with a combination of Storybook and Loki and has a little more setup that the other test scripts.

#### Start Storybook

1. Expo needs to be started with the Storybook root, this is done by running `npm run start:visual`. 
1. Load the App onto any device you are testing.

At this point clicking on one of the stories in the Web UI should display that story on any device that loaded the App onto.

Story files are first placed in the same directory as the component and then imported into `src/stories/index.tsx`.

_Notes:_
- _If you are testing on Android make sure the Android Emulator is already running before you run `npm run start:expo`. You need to stop any other expo processes before you run this._
- _If you see `adb: error: no devices/emulators found` then it didn't connect to the Android emulator for some reason._
- _You may need to reload the app on the devices to connect to Storybook, you can do this with CMD+R on iOS or pulling down the notification shade and clicking reload on Android._

#### Run Loki

To start Loki you run `npm run test:visual`, `npm run test:visual:ios`, or `npm run test:visual:android` depending on which target you want to test.

## 🚚 Build

_More to come in the future, for now here are some convenient links to consider._

- [Expo Docs - Configuration](https://docs.expo.io/versions/v37.0.0/workflow/configuration/)
- [Expo Docs - Publishing](https://docs.expo.io/versions/v37.0.0/workflow/publishing/)
- [Expo Docs - Distribution](https://docs.expo.io/versions/v37.0.0/distribution/introduction/)

## Troubleshoot

_More to come in the future, for now here are some convenient links to consider._

- [Expo Docs - Logging](https://docs.expo.io/versions/v37.0.0/workflow/logging/)
- [Expo Docs - Debugging](https://docs.expo.io/versions/v37.0.0/workflow/debugging/)
- [Expo Docs - Common Development Errors](https://docs.expo.io/versions/v37.0.0/workflow/common-development-errors/)

## ⚙️ Scripts

Run the following scripts with `npm run <SCRIPT_HERE>`:

- `start` - start the expo bundler
- `start:android` - start the expo bundler and an android emulator
- `start:ios` - start the expo bundler and an iOS simulator
- `start:web` - start the expo bundler and the web app
- `start:visual` - start component playground with storybook
- `start:types` - start tsc in watch mode
- `start:unit` - start the unit tests in watch mode
- `test:ci` - run the same tests that the CI runs
- `test:types` - run tsc
- `test:lint` - run linter
- `test:lint:fix` - run linter and fix if possible
- `test:unit` - run unit tests
- `test:visual` - run visual tests with loki (this assumes that storybook is running)
- `test:visual:approve` - approve visual changes
- `test:visual:update` - update or create visual references
- `new:component` - generate a new component
- `new:util` - generate a new util
- `new:type` - generate a new type

> These scripts are located in `package.json` and do not represent the entirety of available scripts, but are the most commonly used.

## 🏛 Structure

The `src` directory is where the meat of your app is located. Below is a printout of its file-tree with a description for each part.

```
src
├── assets // Fonts, Images, Etc.
│   └── logo.svg
├── components // Create a new one with `npm run new:component`
│   └── App
│       ├── __snapshots__ // Generated by Jest from `test.tsx`
│       │   └── test.tsx.snap
│       ├── README.md // Documentation
│       ├── index.tsx // Main Module Code
│       ├── stories.tsx // Playground stories (npm run test:playground)
│       └── test.tsx // Unit Tests (Jest)
├── types // Centralize Type Definitions
│   ├── Entity.ts // Base Type
│   ├── EntityThing.ts // A Sub-Type
│   ├── Id.ts // A Type Alias of `string`
│   ├── MapStateToProps.ts // Includes our `State`
│   ├── State.ts // Redux state interface
│   └── Thing.ts // Silly example used by `EntityThing`
├── utils // Create a new one with `npm run new:util`
│   ├── mySpecialUtil
│   │   ├── __snapshots__ // Generated by Jest from `test.ts`
│   │   │   └── test.tsx.snap
│   │   ├── README.md // Documentation
│   │   ├── index.tsx // Main Module Code
│   │   └── test.tsx // Unit Tests (Jest)
│   ├── decoratorCentered // Used in stories.tsx
│   └── shallowRender // Used to render components in test.tsx
├── stories // Directory used to load storybook stories in one place
│   └── index.tsx
├── index.storybook.tsx // Root Storybook UI Module
└── index.tsx // Root Module
```