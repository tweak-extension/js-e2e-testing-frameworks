const selectors = require('./common/selectors')
const mock = require('./common/mock')

describe('Nightwatch.js', function () {
  it('Nightwatch.js', async function () {
    await browser
      // This command only works with Chromium based browsers such as Google Chrome and Microsoft Egde
      .mockNetworkResponse('http://localhost:3000/random-quote', {
        status: 200,
        body: JSON.stringify(mock),
      })
      .navigateTo('http://localhost:3000')
      .assert.elementPresent(selectors.title)
      .assert.elementPresent(selectors.contentEmpty)
      .assert.textEquals(selectors.contentEmpty, '...')
      .click(selectors.trigger)
      .assert.elementPresent(selectors.content)
      .assert.textMatches(selectors.content, `${mock.quote} by ${mock.author}`)
  })
})
