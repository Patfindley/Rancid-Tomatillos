describe('MovieInfo', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should be able to access single movie\'s details', () => {
    cy.get('[id="694919"]').click()
  })

  it('Should fetch movie\'s trailer', () => {
    cy.get('[id="694919"]').click()
    .get('iframe, button')
  })

  it('Should contain movie a movie poster', () => {
    cy.get('[id="694919"]').click()
    .get('img').each($el => {
      cy.wrap($el).should('have.attr', 'src')
      cy.wrap($el).should('have.attr', 'alt')
    })
  })

  it('Should display movie title', () => {
      cy.get('[id="694919"]').click()
      .get('.movie-title')
      .should('have.text', 'Money Plane')
    })

  it('Should display movie stats', () => {
      cy.get('[id="694919"]').click()
      .get('.release-genre-run')
      .should('have.text', '2020/09/29, Action, 1h 22m')
    })

  it('Should display movie rating', () => {
    cy.get('[id="694919"]').click()
    .get('.movie-rating')
    .should('have.text', 'Average Rating: 6.1/10')
  })

  it('Should display movie overview', () => {
    cy.get('[id="694919"]').click()
    .get('.movie-overview')
    .should('have.text', 'Overview: A professional thief with $40 million in debt and his family\'s life on the line must commit one final heist - rob a futuristic airborne casino filled with the world\'s most dangerous criminals.')
  })

})
