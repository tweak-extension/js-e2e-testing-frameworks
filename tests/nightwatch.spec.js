const selectors = require('./common/selectors')
const mock = require('./common/mock')

describe('Nightwatch.js', function () {
  it('Nightwatch.js', async function () {
    await browser
      .mockNetworkResponse('http://localhost:3000/random-quote', {
        status: 200,
        body: JSON.stringify(mock),
      })
      .navigateTo('http://localhost:3000')
      .assert.textEquals(selectors.title, 'Quotez')
      .assert.elementPresent(selectors.contentEmpty)
      .assert.textEquals(selectors.contentEmpty, '...')
      .click(selectors.trigger)
      .assert.elementPresent(selectors.content)
      .assert.textMatches(selectors.content, `${mock.quote} by ${mock.author}`)
  })
})
