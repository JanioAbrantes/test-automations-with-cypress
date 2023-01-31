import { faker } from '@faker-js/faker';

describe('Irá testar as funcionalidades da página de Registro', () => {
    beforeEach(() => {
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.xpath('//a[.="Registrar"]').click()
    })
    it('The user click on "Registrar" button with all fields empty', () => {
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'status code 500')
    })

    it('The user click on "Registrar" button with only the name field filled', () => {
        const name_field = '//input[@type="text"]'
        cy.xpath(name_field).type(faker.name.fullName())
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'status code 500')
    })
        
    it('The user click on "Registrar" button with only the password field filled', () => {
        const password_field = '//input[@type="password"]'
        cy.xpath(password_field).type(faker.random.alphaNumeric(8))
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'status code 500')
    })
        
    it('The user click on "Registrar" button with only the email field filled', () => {
        // This test will probably fail
        const email_field = '//input[@type="email"]'
        cy.xpath(email_field).type(faker.internet.email())
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'status code 500')
    })
    
    it('The user should be able to create a new user with valid values', () => {
        // This test may fail
        const name_field = '//input[@type="text"]'
        const email_field = '//input[@type="email"]'
        const password_field = '//input[@type="password"]'
        cy.xpath(name_field).type(faker.name.fullName())
        cy.xpath(email_field).type(faker.internet.email())
        cy.xpath(password_field).type(faker.random.alphaNumeric(8))
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'sucesso')
    })
    
    it('The user click on "Registrar" try to create an already created user', () => {
        const name_field = '//input[@type="text"]'
        const email_field = '//input[@type="email"]'
        const password_field = '//input[@type="password"]'
        cy.xpath(name_field).type('Jeovanio The Bug')
        cy.xpath(email_field).type('jeovanio@cypress.com')
        cy.xpath(password_field).type('123456789')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'status code 500')
    })
        
        
    it('The middle screen message should be displayed properly', () => {
        cy.get('small').should(
            'contain', 
            'Seu Barriga - Nunca mais esqueça de pagar o aluguel.')
    })
})