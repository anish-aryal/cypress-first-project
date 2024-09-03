describe('template spec', () => {
  beforeEach(()=>{
    cy.visit('/fundamentals')
  })
  it('contains correct header', () => {
    cy.get ('h1').should('contain.text', 'Testing Fundamentals');
  })
  it(' correct accordian', () => {
    cy.contains(/Your tests will exist in a describe block./i).should('not.be.visible')
    cy.getDataTest('accordion-1') .click()
    cy.contains(/Your tests will exist in a describe block./i).should('be.visible')
    cy.getDataTest('accordion-1').click()
    cy.contains(/Your tests will exist in a describe block./i).should('not.be.visible')
  })
})