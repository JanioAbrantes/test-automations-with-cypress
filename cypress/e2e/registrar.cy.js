import { faker } from '@faker-js/faker';
import { REGISTRO, MESSAGE, BUTTON } from '../support/locators.js'

describe('Will test the register page functionalitys', () => {
    beforeEach(() => {
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.xpath(REGISTRO.REGISTRAR_PAGE).click()
    })
    it('The user click on "Registrar" button with all fields empty', () => {
        cy.get(BUTTON).click()
        cy.validateMessage(
            MESSAGE, 
            'Erro: Error: Request failed with status code 500')
    })

    it('The user click on "Registrar" button with only the name field filled', () => {
        cy.xpath(REGISTRO.NAME).type(faker.name.fullName())
        cy.get(BUTTON).click()
        cy.validateMessage(
            MESSAGE, 
            'Erro: Error: Request failed with status code 500')
    })
        
    it('The user click on "Registrar" button with only the password field filled', () => {
        cy.xpath(REGISTRO.PASSWORD).type(faker.random.alphaNumeric(8))
        cy.get(BUTTON).click()
        cy.validateMessage(
            MESSAGE, 
            'Erro: Error: Request failed with status code 500')
    })
        
    it('The user click on "Registrar" button with only the email field filled', () => {
        // This test will fail
        cy.xpath(REGISTRO.EMAIL).type(faker.internet.email())
        cy.get(BUTTON).click()
        cy.validateMessage(
            MESSAGE, 
            'Erro: Error: Request failed with status code 500')
    })
    
    it('The user should be able to create a new user with valid values', () => {
        // This test may fail
        cy.xpath(REGISTRO.NAME).type(faker.name.fullName())
        cy.xpath(REGISTRO.EMAIL).type(faker.internet.email())
        cy.xpath(REGISTRO.PASSWORD).type(faker.random.alphaNumeric(8))
        cy.get(BUTTON).click()
        cy.validateMessage(
            MESSAGE, 
            'Usuário adicionado com sucesso')
    })
    
    it('The user click on "Registrar" try to create an already created user', () => {
        cy.xpath(REGISTRO.NAME).type('Jeovanio The Bug')
        cy.xpath(REGISTRO.EMAIL).type('jeovanio@cypress.com')
        cy.xpath(REGISTRO.PASSWORD).type('123456789')
        cy.get(BUTTON).click()
        cy.validateMessage(
            MESSAGE, 
            'Erro: Error: Request failed with status code 500')
    })
        
    it('The middle screen message should be displayed properly', () => {
        cy.validateMessage(
            'small', 
            'Seu Barriga - Nunca mais esqueça de pagar o aluguel.')
    })
})