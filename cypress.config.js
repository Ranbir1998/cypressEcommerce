const { defineConfig } = require("cypress");
const mochawesome = require("cypress-mochawesome-reporter/plugin");
const {addCucumberPreprocessorPlugin,} = require("@badeball/cypress-cucumber-preprocessor");
const {preprocessor,} = require("@badeball/cypress-cucumber-preprocessor/browserify");


async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));
  mochawesome(on)
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  env: {
    url: "https://rahulshettyacademy.com",
  },
  reporter: 'cypress-mochawesome-reporter',
  projectId: "nodpcq",
  

 
    e2e: {
     baseUrl: "https://rahulshettyacademy.com/angularpractice/",
      //specPattern: "cypress/integration/examples/BDD/*.feature",
      setupNodeEvents,
     specPattern: 'cypress/integration/examples/JWTSessionTokes/*.js',
    },
});






// e2e: {
//   setupNodeEvents(on, config) {
//     return config;
//   },
//   specPattern: 'cypress/integration/examples/*.js',
 
// },
// });

