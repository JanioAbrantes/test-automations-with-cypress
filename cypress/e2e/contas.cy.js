import { faker } from '@faker-js/faker'
import { MENU, ACCOUNTS, MESSAGE, BUTTON, DELETE_BTN} from '../support/locators.js'

describe('Will test the Accounts page functionalitys', () => {
        beforeEach(() => {
            cy.login()
            cy.get(MENU.SETTINGS).click()
            cy.get(MENU.CONTAS).click()
        })

        it('The user creates an account successfully', () => {
            cy.get(ACCOUNTS.NAME).type(faker.random.alphaNumeric(5))
            cy.get(BUTTON).click()
            cy.get(MESSAGE).should('exist')
        })

        it('The user can not create an duplicate account', () => {
            cy.get(ACCOUNTS.NAME).type('baka')
            cy.get(BUTTON).click()
            cy.get(ACCOUNTS.NAME).type('baka')
            cy.get(BUTTON).click()
            cy.get(MESSAGE).should('exist')
        })

        it('The user can edit an account name', () => {
            let name = 'baka'
            cy.get(ACCOUNTS.NAME).type(name)
            cy.get(BUTTON).click()
            cy.xpath(ACCOUNTS.EDIT(name)).click()
            cy.get(ACCOUNTS.NAME).type(' janai')
            cy.get(MESSAGE).click()
            cy.get(BUTTON).click()
            cy.get(MESSAGE).should('exist')
            cy.xpath(ACCOUNTS.ACCOUNT('baka janai')).should('exist')
        })

        it('The user can delete an account', () => {
            let name = 'baka'
            cy.get(ACCOUNTS.NAME).type(name)
            cy.get(BUTTON).click()
            cy.xpath(DELETE_BTN).click()
            cy.get(MESSAGE).should('exist')
            cy.xpath(ACCOUNTS.ACCOUNT('baka')).should('not.exist')
        })

        afterEach(() => {
            cy.resetar()
        })
    })