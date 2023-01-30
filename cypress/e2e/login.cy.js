const faker = require("faker");

describe('Irá testar as funcionalidades da página de Login', () => {
    beforeEach(() => {
        cy.visit('https://barrigareact.wcaquino.me/')
    })
    it.only('lalala', () => {
        const email_field = '[data-test="email"]'
        cy.get('contain', 'email').type(faker.Internet.email())
    })
    it('lalala3', () => {
        let titulo = cy.title();
        cy.log(titulo);
    })
    it('lalala5', () => {
        let titulo = cy.title();
        cy.log(titulo);
    })
})