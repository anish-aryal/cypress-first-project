describe('form test',()=>{

    beforeEach(()=>{
        cy.visit('/forms')
    })

    it('Test Subscribe Form',()=>{
        cy.get('h1').contains(/testing forms/i)

        //valid form data test
        cy.getTestData('subscribe-form').find('input').type('anisharyal058@gmail.com')
        cy.contains(/Successfully subbed:/i).should('not.exist')
        cy.getTestData('subscribe-btn').click()
        cy.contains(/Successfully subbed:/i).should('exist')
    })
})