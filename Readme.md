# Cypress testing
This project contains some basic validations using cypress.

## Run tests
- Compile project
    - npm install
- Run login tests
    - npx cypress run --spec "cypress/integration/e2e_tests/login.spec.js"
- Run elements tests
    - npx cypress run --spec "cypress/integration/e2e_tests/elements.spec.js"
- Run all tests
    - npm run cy:run