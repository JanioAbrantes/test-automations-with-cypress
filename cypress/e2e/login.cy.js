import { faker } from '@faker-js/faker';

describe('Irá testar as funcionalidades da página de Login', () => {
    beforeEach(() => {
        cy.visit('https://barrigareact.wcaquino.me/')
    })
    it('The user click on "entrar" button with all fields empty', () => {
        // This test will fail
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'status code 40')
    })
    it('The user click on "entrar" button with the password field empty', () => {
        const email_field = '[data-test="email"]'
        cy.get(email_field).type(faker.internet.email())
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'status code 40')
    })
    it('The user click on "entrar" button with the email field empty', () => {
        const password_field = '[data-test="passwd"]'
        cy.get(password_field).type(faker.random.alphaNumeric(8))
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'status code 40')
    })
})