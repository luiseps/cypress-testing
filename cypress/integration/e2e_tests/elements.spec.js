describe('Add and delete elements', () => {
    before(() => {
        cy.visit('http://the-internet.herokuapp.com/add_remove_elements/')
    })

    it('Should add an element', () => {
        cy.contains('Add Element').click()
        cy.contains('Delete').should('be.visible')
    });

    it('Should delete an element', () => {
        cy.contains('Delete').click()
        cy.get('button[class="added-manually"]').should('not.exist')
    });

    it('Should check if an element was added', () => {
        cy.contains('Add Element').click()
        cy.get('button[class="added-manually"]').its('length')
        .should('be.gt', 0)
    });
});