import { faker } from '@faker-js/faker';

describe('Irá testar as funcionalidades da página de Login', () => {
    beforeEach(() => {
        cy.visit('https://barrigareact.wcaquino.me/')
    })
    it('The user click on "Entrar" button with all fields empty', () => {
        // This test will fail
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'status code 40')
    })
    it('The user click on "Entrar" button with the password field empty', () => {
        const email_field = '[data-test="email"]'
        cy.get(email_field).type(faker.internet.email())
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'status code 40')
    })
    it('The user click on "Entrar" button with the email field empty', () => {
        const password_field = '[data-test="passwd"]'
        cy.get(password_field).type(faker.random.alphaNumeric(8))
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'status code 40')
    })

    it('The user tries to login with a valid email and invalid password', () => {
        const email_field = '[data-test="email"]'
        const password_field = '[data-test="passwd"]'
        cy.get(email_field).type('jeovanio@cypress.com')
        cy.get(password_field).type(faker.random.alphaNumeric(8))
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'status code 401')
    })

    it('The user should be able to login with valid values', () => {
        const email_field = '[data-test="email"]'
        const password_field = '[data-test="passwd"]'
        cy.get(email_field).type('jeovanio@cypress.com')
        cy.get(password_field).type('123456789')
        cy.get('.btn').click()
        cy.get('.toast-message').then(($toast) => {
            const txt = $toast.text()
            cy.log(txt)
            expect(txt).to.be.equal('**Bem Vindo, Jeovanio The Bug**')
        })
    })

    it('The middle screen message should be displayed properly', () => {
        cy.get('small').should(
            'contain', 
            'Seu Barriga - Nunca mais esqueça de pagar o aluguel.')
    })
})