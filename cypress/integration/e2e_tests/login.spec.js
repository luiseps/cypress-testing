describe('Login/Logout test', () => {
    before(() => {
        cy.visit('http://the-internet.herokuapp.com/login')
        cy.url().should('include', 'login')  
    });

    it('should try to login with invalid data', () => {
        cy.get('#username').type('username')
        cy.get('#password').type('password')
        cy.get('button[type="submit"]').click()
    });

    it('should display error message', () =>{
        cy.get('#flash')
            .should('be.visible')
            .and('contain', 'Your username is invalid!')
    })

    it('should login to application', () => {
        cy.fixture('credentials').then(user => {
            const username = user.username
            const password = user.password

            cy.get('#username').type(username)
            cy.get('#password').type(password)
            cy.get('button[type="submit"]').click()
        })
        cy.get('#flash')
            .should('be.visible')
            .and('contain', 'You logged into a secure area!')
    });

    it('should logout from application', () => {
        cy.get('a[class="button secondary radius"]').click()
        cy.url().should('include', 'login')
        cy.get('#flash')
            .should('be.visible')
            .and('contain', 'You logged out of the secure area!')
    });
});