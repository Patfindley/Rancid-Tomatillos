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

  it("should render movie cards in cardContainer from API data", () => {
    cy.get(".card-container").should('be.visible')
    cy.get(".card").should('be.visible')
    cy.get(".card").should('have.length', 40)
    cy.get(".card").should('have.attr', 'alt', 'Money Plane')
    cy.get(".card").should('have.attr', 'id', '694919')
    });

    it("Should display an error message if data is not returned from the API", () => {
      const errorMessage = "Uh oh! We're in the back looking for the movies, please try again!";
      cy.intercept(
          {
            method: "GET",
            url: "https://rancid-tomatillos.herokuapp.com/api/v2/movies"
          },{
            statusCode: 500,
            message: errorMessage
          }
      )
      cy.visit("http://localhost:3000")
          .wait(1000)
          .get("h1").contains(errorMessage)
    })
  });

