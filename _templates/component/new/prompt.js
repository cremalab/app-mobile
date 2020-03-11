/* eslint-disable @typescript-eslint/no-var-requires */
const i = require("inflection")

module.exports = {
  prompt: ({ prompter }) => {
    return prompter
      .prompt({
        type: "input",
        name: "name",
        message: "Component name:",
      })
      .then(({ name: nameRaw }) => {
        const name = i.camelize(nameRaw || "Example", false)

        return prompter
          .prompt({
            default: "N",
            message: `Did you want to generate <${name} /> with example code?`,
            name: "withExample",
            type: "toggle",
          })
          .then(({ withExample }) => {
            if (withExample) {
              return prompter
                .prompt({
                  default: "N",
                  message: `Did you want to include useState in the example <${name} />?`,
                  name: "useState",
                  type: "toggle",
                })
                .then(({ useState }) => ({
                  name,
                  withExample,
                  useState,
                }))
            }

            return {
              name,
              withExample,
              useState: false,
            }
          })
      })
  },
}
