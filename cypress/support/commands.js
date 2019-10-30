import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('checkDesktopSnapshot', (el) => {
  cy.viewport('macbook-11');
  cy.matchImageSnapshot('desktop');
});

Cypress.Commands.add('checkMobileSnapshot', (el) => {
  cy.viewport('iphone-5');
  cy.matchImageSnapshot('mobile');
});

addMatchImageSnapshotCommand({
  failureThreshold: 5, // threshold for entire image
  failureThresholdType: 'percent' // percent of image or number of pixels
});
