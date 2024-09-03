describe('form test',()=>{

    beforeEach(()=>{
        cy.visit('/forms')
    })

    it('Test Subscribe Form',()=>{
        cy.get('h1').contains(/testing forms/i)

        //creating aliases for getting input form field
        cy.getTestData('subscribe-form').find('input').as('subscribe-input')

        //valid form data
        cy.get('@subscribe-input').type('anisharyal058@gmail.com')
        cy.contains(/Successfully subbed:/i).should('not.exist')
        cy.getTestData('subscribe-btn').click()
        cy.contains(/Successfully subbed:/i).should('exist')
        cy.wait(3000)
        cy.contains(/Successfully subbed:/i).should('not.exist')

        //invalid form data
        cy.get('@subscribe-input').type('anisharyal@gmail.io')
        cy.contains(/ invalid email: /i).should('not.exist');
        cy.getTestData('subscribe-btn').click()
        cy.contains(/Invalid email: /i).should('exist');
        cy.wait(3000)
        cy.contains(/Invalid email: /i).should('not.exist');

        //empty form data
        cy.contains(/fail!/i).should('not.exist')
        cy.getTestData('subscribe-btn').click()
        cy.contains(/fail!/i).should('exist')
    })
})