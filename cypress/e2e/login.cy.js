import { faker } from '@faker-js/faker';
import { LOGIN, MESSAGE, BUTTON } from '../support/locators.js'

describe('Will test the Login page functionalitys', () => {
    beforeEach(() => {
        cy.visit('https://barrigareact.wcaquino.me/')
    })
    
    it('The user click on "Entrar" button with all fields empty', () => {
        // This test will fail
        cy.get(BUTTON).click()
        cy.validateMessage(
            MESSAGE, 
            'Erro: Error: Request failed with status code 400')
    })
    it('The user click on "Entrar" button with the password field empty', () => {
        //  This test may fail
        cy.get(LOGIN.EMAIL).type(faker.internet.email())
        cy.get(BUTTON).click()
        cy.validateMessage(
            MESSAGE, 
            'Erro: Error: Request failed with status code 400')
    })
    it('The user click on "Entrar" button with the email field empty', () => {
        cy.get(LOGIN.PASSWORD).type(faker.random.alphaNumeric(8))
        cy.get(BUTTON).click()
        cy.validateMessage(
            MESSAGE, 
            'Erro: Error: Request failed with status code 401')
    })

    it('The user tries to login with a valid email and invalid password', () => {
        cy.get(LOGIN.EMAIL).type('jeovanio@cypress.com')
        cy.get(LOGIN.PASSWORD).type(faker.random.alphaNumeric(8))
        cy.get(BUTTON).click()
        cy.validateMessage(
            MESSAGE, 
            'Erro: Error: Request failed with status code 401')        
    })

    it('The user should be able to login with valid values', () => {
        cy.logIn()
        cy.validateMessage(
            MESSAGE, 
            'Bem vindo, Jeovanio The Bug!')
    })

    it('The middle screen message should be displayed properly', () => {
        cy.validateMessage(
            'small', 
            'Seu Barriga - Nunca mais esqueça de pagar o aluguel.')
    })
})