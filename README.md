# qawingify 

  **Folder Structure:**
- **cypress/**
  - downloads/
  - e2e/
    - login.cy.js  // to testing Login page
    - home.cy.js   //to testing Home Page
  - fixtures/
  - support/
    - e2e.js
- **controllers/**
  - loginController.js
- **models/**
  - userModel.js
- **routes/**
  - loginRoutes.js
- **views/**
  - home.ejs
  - LoginForm.ejs
- node_modules/
- cypress.config.js
- package-lock.json
- package.json

Project Overview:

This project is a web application that includes features for user login and a home page. It is built using Node.js and incorporates the Cypress test automation framework for end-to-end testing.

Folder Structure:

The cypress/ directory contains all the files related to Cypress, including test files, fixtures, support files, and a downloads directory to store downloaded files during tests.

The e2e/ directory inside cypress/ contains the end-to-end test files. The login.cy.js file includes test cases for the login functionality, and the home.cy.js file includes test cases for the home page functionality.

The fixtures/ directory inside cypress/ is used to store test data fixtures that are used in the tests.

The support/ directory inside cypress/ contains supporting files for Cypress tests. The e2e.js file is a configuration and setup file for end-to-end tests.

The controllers/ directory contains the controller files responsible for handling the application's logic. The loginController.js file specifically handles login-related functionality.

The models/ directory contains model files that define the data structures or entities in the application. The userModel.js file represents the user data and includes operations related to users.

The routes/ directory contains the route handler files that define the endpoint handlers for different routes in the application. The loginRoutes.js file specifically handles login-related routes.

The views/ directory contains the view files or templates that are rendered by the server and sent to clients. The home.ejs file is an EJS template for the home page, and the LoginForm.ejs file is an EJS template for the login form.

The node_modules/ directory is created by npm and contains the project's dependencies.

The cypress.config.js file is the configuration file for Cypress.

The package-lock.json file is automatically generated by npm and locks the dependency versions.

The package.json file is the configuration file that contains project metadata, such as the project name, version, and dependencies.

This project structure is designed to provide a clear separation of concerns and maintainability of the codebase. It follows common conventions for organizing Node.js applications and includes the necessary files for end-to-end testing using Cypress.