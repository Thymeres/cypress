const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : 'https://www.automationexercise.com/',
    specPattern : 'cypress/tests/**/*.cy.js'
  },
  // viewportWidth : 
  // this.viewportHeight:
});
