describe('Navbar', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it("The navbar information should render on load", () => {
    cy.contains('.title', "Rotten Tomatillos")
    cy.contains('.nav-button-container', "Home")
    cy.contains('.nav-button-container', "Search Genre")
  })

  it("Should contain a searchBar input", () => {
    cy.get('form input[placeholder="Search By: Title, Genre, Rating"]')
        .get('form input[type="text"]')
        .get('form input[name="input"]')
  })

  it('should be able to type into the search input and see that value in the input', () => {
    cy.get('form input[name="input"]').type('Peninsula')
        .should('have.value', 'Peninsula')
  })

})