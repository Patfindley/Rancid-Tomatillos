describe('cardContainer', () => {
  beforeEach(() => {
    cy.allMoviesPath()
  })

  it("should render card class attributes", () => {
    cy.get('img').each($el => {
      cy.wrap($el).should('have.attr', 'src')
      cy.wrap($el).should('have.attr', 'alt')
      cy.wrap($el).should('have.attr', 'id')
    })
  })

  it("should render movie cards in cardContainer from API", () => {
    cy.get(".card-container").should('be.visible')
    cy.get(".card").should('be.visible')
    cy.get(".card").should('have.length', 40)
    cy.get(".card").should('have.attr', 'alt', 'Money Plane')
    cy.get(".card").should('have.attr', 'id', '694919')
    // cy.get(".card").should('have.attr', 'alt', 'Mulan')
    // cy.get(".card").should('have.attr', 'id', '337401')
    // cy.contains(".card.id").should( "694919")
    });

  });
