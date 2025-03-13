import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // Ensures Cypress only runs tests in /e2e/
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
  },
});
