const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'tests/cypress.spec.js',
    supportFile: 'tests/cypress/support/e2e.js',
  },
  video: false,
})
