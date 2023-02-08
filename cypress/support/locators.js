const LOCATORS = {
    LOGIN: {
        EMAIL: '[data-test="email"]',
        PASSWORD: '[data-test="passwd"]'
    },
    REGISTRO: {
        REGISTRAR_PAGE: '//a[.="Registrar"]',
        NAME: '//input[@type="text"]',
        EMAIL: '//input[@type="email"]',
        PASSWORD: '//input[@type="password"]'
    },
    ACCOUNTS: {
        NAME: '[data-test="nome"]',
        EDIT: name => `//td[.='${name}']/..//i[@class='far fa-edit']`,
        ACCOUNT: name => `//td[.='${name}']`
    },
    EXTRATO: {
        

    },
    MOVIMENTACAO: {

    },
    MENU: {
        MOVIMENTACAO: '[data-test="menu-movimentacao"]',
        HOME: '[data-test="menu-home"]',
        EXTRATO: '[data-test="menu-extrato"]',
        SETTINGS: '[data-test="menu-settings"]',
        CONTAS: '[href="/contas"]',
        RESET: '[href="/reset"]',
        LOGOUT: '[href="/logout"]'
    },
    BUTTON: '.btn',
    MESSAGE: '.toast-message',
    DELETE_BTN: '//i[@class="far fa-trash-alt"]'
}

export default LOCATORS