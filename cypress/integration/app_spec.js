describe('E2E App Test', function() {
    it('Loads page', function() {
        cy.visit('http://localhost:3000/')
        cy.get('h1')
            .contains("Applied Blockchain")
    })
    it('Test empty value', function () {
        cy.get('#btnConnect')
            .click()
        cy.get('#error')
            .contains('Address not valid!')
    })
    it('Test nonsense value', function () {
        cy.get('#eth-address')
            .type('Blah')
        cy.get('#btnConnect')
            .click()
        cy.get('#error')
            .contains('Address not valid!')
    })
    it('Test real address (0x omitted)', function () {
        cy.get('#eth-address')
            .clear()
            .type('738d145faabb1e00cf5a017588a9c0f998318012')
        cy.get('#btnConnect')
            .click()
        cy.get('#eth-balance')
            .contains('0.019254563')
    })
    it('Test real address (with 0x)', function () {
        cy.reload()
        cy.get('#eth-address')
            .type('0x738d145faabb1e00cf5a017588a9c0f998318012')
        cy.get('#btnConnect')
            .click()
        cy.get('#eth-balance')
            .contains('0.019254563')
    })
})