import { LOGIN, BUTTON, MENU, MESSAGE, DELETE_BTN, ACCOUNTS } from './locators.js'

Cypress.Commands.add('validateMessage', (locator, message) => {
    cy.get(locator).then(($msg) => {
        let txt = $msg.text()
        expect(txt).to.be.eq(message)
    })
})

Cypress.Commands.add('login', () => {
    cy.visit('https://barrigareact.wcaquino.me/')
    cy.get(LOGIN.EMAIL).type('jeovanio@cypress.com')
    cy.get(LOGIN.PASSWORD).type('123456789')
    cy.get(BUTTON).click()
    cy.get(MESSAGE).click()
})

Cypress.Commands.add('resetar', () => {
    cy.get(MENU.SETTINGS).click()
    cy.get(MENU.RESET).click()
    cy.wait(1000)
    cy.get(MENU.EXTRATO).click()
    cy.get(MESSAGE).click({ multiple: true })
    cy.xpath(DELETE_BTN).each($el => {
        cy.wrap($el).click()
    })
    cy.get(MENU.SETTINGS).click()
    cy.get(MENU.CONTAS).click()
    cy.xpath(DELETE_BTN).each($el => {
        cy.wrap($el).click()
    })
})

Cypress.Commands.add('createAccount', () => {
    cy.get(MENU.SETTINGS).click()
    cy.get(MENU.CONTAS).click()
    cy.get(ACCOUNTS.NAME).type('boleto')
    cy.get(BUTTON).click()
})