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

    it('intercepts',() =>{
        cy.intercept("POST", "/examples",{
          fixture: 'example.json'
        })
        cy.getTestData('post-button').click();
    })

    it.only('grudge list',() =>{
        cy.contains(/add some grudges/i)
        cy.getTestData('grudge-list').within(()=>{
            cy.get('li').should('have.length',0)
        })

        cy.getTestData('clear-btn').should('not.be.exist')
        cy.getTestData('grudgelist-title').should('have.text','Add Some Grudges')

        //adding grudge to the grudge list
        cy.getTestData('grudge-input').within(()=>{
            cy.get('input').type('some grudge')
        })
        cy.getTestData('add-grudge-button').click()
        cy.getTestData('grudge-list').within(()=>{
            cy.get('li').should('have.length',1)
        })
        cy.getTestData('grudgelist-title').should('have.text','Grudges')

        //adding second grudge
        cy.getTestData('grudge-input').within(()=>{
            cy.get('input').type('Second grudge')
        })
        cy.getTestData('add-grudge-button').click()
        cy.getTestData('grudge-list').within(()=>{
            cy.get('li').should('have.length',2)
            cy.get('li').its(0).should('contains.text','some grudge')
        })

        //removing first grudge
        cy.getTestData('grudge-list').within(()=>{
            cy.get('li').its(0).within(()=>{
                cy.get('button').click()
            })

        })
        cy.getTestData('grudge-list').within(()=>{
            cy.get('li').should('have.length',1)
        })


        //clearing all the grudges
        cy.getTestData('clear-btn').should('be.visible')
        cy.getTestData('clear-btn').click()
        cy.getTestData('grudge-list').within(()=>{
            cy.get('li').should('have.length',0)
        })

    })

})