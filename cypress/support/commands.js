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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { LOGIN, BUTTON } from './locators.js'

Cypress.Commands.add('validateMessage', (locator, message) => {
    cy.get(locator).then(($msg) => {
        let txt = $msg.text()
        expect(txt).to.be.eq(message)
    })
})

Cypress.Commands.add('logIn', () => {
    cy.get(LOGIN.EMAIL).type('jeovanio@cypress.com')
    cy.get(LOGIN.PASSWORD).type('123456789')
    cy.get(BUTTON).click()
})