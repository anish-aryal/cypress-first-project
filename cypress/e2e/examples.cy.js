describe('various examples', () =>{

    beforeEach(()=>{
        cy.visit('/examples')
    })

    it('multi-page testing', ()=>{
        cy.getTestData('nav-why-cypress').click();
        cy.location('pathname').should('equal','/');
        cy.wait(1500);

        cy.getTestData('nav-overview').click();
        cy.location('pathname').should('equal','/overview');
        cy.wait(1500);

        cy.getTestData('nav-fundamentals').click();
        cy.location('pathname').should('equal','/fundamentals');
        cy.wait(1500);

        cy.getTestData ('nav-forms').click();
        cy.location('pathname').should('equal','/forms');
        cy.wait(1500);

        cy.getTestData('nav-component').click();
        cy.location('pathname').should('equal','/component');
        cy.wait(1500);

        cy.getTestData('nav-best-practices').click();
        cy.location('pathname').should('equal','/best-practices');
        cy.wait(1500);

        cy.getTestData('nav-examples').click();
        cy.location('pathname').should('equal','/examples');
        cy.wait(1500);
    })

    it.only('intercepts',() =>{
        cy.intercept("POST", "/examples",{
          fixture: 'example.json'
        })
        cy.getTestData('post-button').click();
    })

})