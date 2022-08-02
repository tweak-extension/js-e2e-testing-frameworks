const selectors = require('./common/selectors')
const mock = require('./common/mock')

it('Cypress', () => {
  cy.intercept('/random-quote', mock).as('getRandomQuotes')
  cy.visit('http://localhost:3000/')
  cy.get(selectors.title).should('have.text', 'Quotez')
  cy.get(selectors.contentEmpty).should('be.visible')
  cy.get(selectors.contentEmpty).should('have.text', '...')
  cy.get(selectors.trigger).click()
  cy.get(selectors.content).should('have.text', `${mock.quote} by ${mock.author}`)
})
