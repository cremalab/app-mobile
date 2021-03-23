const { spawn } = require("cross-spawn")

let hasError = false

const watchModeRegExp = /Watch\smode\sis\snot\ssupported\sin\sthis\senvironment/
let isWatchModeNotSupported = false

const devToolsRegExp = /Developer\stools\srunning/
let isDevToolsRunning = false

const appRunningRegExp = /Your\snative\sapp\sis\srunning/
let isAppRunning = false

function testExpoStdOut(data = "") {
  if (devToolsRegExp.test(String(data))) {
    isDevToolsRunning = true
  }

  if (appRunningRegExp.test(String(data))) {
    isAppRunning = true
  }

  if (watchModeRegExp.test(String(data))) {
    isWatchModeNotSupported = true
  }
}

function testExpoProcess(exitOnFail = false) {
  if (
    exitOnFail &&
    (hasError || isWatchModeNotSupported || !isDevToolsRunning || !isAppRunning)
  ) {
    console.error("Expo failed to start.")
    process.exit(1)
  } else if (
    !hasError &&
    !isWatchModeNotSupported &&
    isDevToolsRunning &&
    isAppRunning
  ) {
    console.log("Expo process working as expected.")
    process.exit(0)
  }
}

const expo = spawn("npm", ["run", "start:ci"])

expo.stdout.on("data", (data) => {
  testExpoStdOut(data)
})

expo.stderr.on("data", (data) => {
  console.log(String(data))
  hasError = true
})

expo.on("error", (error) => {
  console.log(String(error.message))
  process.exit(1)
})

// In 30s everything should have started, if not then it is not working
setTimeout(() => {
  testExpoProcess(true)
}, 30000)

// Every 5s check if everything is working
setInterval(() => {
  testExpoProcess(false)
}, 5000)
