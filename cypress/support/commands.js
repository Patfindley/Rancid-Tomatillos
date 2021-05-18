
Cypress.Commands.add("allMoviesPath", () => {
  cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  cy.visit('http://localhost:3000')
})