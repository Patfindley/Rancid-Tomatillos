describe('Movies', () => {
  it('Should show error if movies cannot be fetched', () => {
    cy.intercept(
      {
        method: 'GET',
        url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
      },
      {statusCode: 404, body:''}
    )
    cy.visit('http://localhost:3000')
    .get('h3, [class="display-error"]')
  })

  it('Should show error if movie details cannot be fetched', () => {
    cy.intercept(
    {
      method: 'GET',
      url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919'
    },
    {statusCode: 404, body:''}
    )
    .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'Movies_test.json'})
    .visit('http://localhost:3000/')
    .get('[id="694919"]').click()
    .url().should('eq', 'http://localhost:3000/694919')
    .get('h3, [class="display-error"]')
  })

  it('Should show error if search shows no results', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'Movies_test.json'})
    .visit('http://localhost:3000/')
    .get('form input[name="input"]').type('sponge bob')
    .get('h3, [class="display-error"]')

  })
})
