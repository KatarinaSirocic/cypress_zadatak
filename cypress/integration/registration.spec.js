describe('registracija', ()=>{
    it('Registarcija sa validnim podacima', ()=>{
        cy.visit('/register')
        cy.get('#first-name').type('ime')
        cy.get('#last-name').type('prezime')
        cy.get('input[type="email"]').type('nekiiiemail@gmail.com')
        cy.get('#password').type('12345678')
        cy.get('#password-confirmation').type('12345678')
        cy.get('.form-check-input').check().should('be.checked')
        cy.get('button[type="submit"]').click()

    })
})