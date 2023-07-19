import { faker } from '@faker-js/faker';
import { LOGIN, MESSAGE, BUTTON, MENU } from '../support/locators.js'

describe('Will test the Financial movement page functionalitys', () => {
        
    beforeEach(() => {
        cy.login()
        cy.createAccount()
        cy.get(MENU.MOVIMENTACAO).click()
    })
    it('There should be no message if you do not have any account registered', () => {
        cy.get(MESSAGE).should('not.exist')
    })

    it('The user creates a income movement successfully', () => {
        //
    })

    it('The user creates a expense movement successfully', () => {
        //
    })

    afterEach(() => {
        cy.resetar()
    })

    })