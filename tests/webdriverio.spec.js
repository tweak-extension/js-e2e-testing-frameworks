const selectors = require('./common/selectors')
const mock = require('./common/mock')

describe('Webdriver.IO', () => {
  it('Webdriver.IO', async () => {
    // Proxy error: Could not proxy request /random-quote from localhost:3000 to http://localhost:3000
    // const iomock = await browser.mock('http://localhost:3000/random-quote')
    // iomock.respond(mock)
    // Proxy error: end
    await browser.url('http://localhost:3000/')
    await expect($(selectors.title)).toHaveText('Quotez')
    expect(await $(selectors.contentEmpty).isDisplayedInViewport()).toBe(true)
    await expect($(selectors.contentEmpty)).toHaveText('...')
    const btn = await $(selectors.trigger)
    await btn.click()
    // await $(selectors.content).waitForExist({ timeout: 3000 })
  })
})
