const puppeteer = require('puppeteer')
const selectors = require('./common/selectors')
const mock = require('./common/mock')

it('Puppeteer (powered by Jest)', async () => {
  const browser = await puppeteer.launch({ headless: true }) // headless: false to see the browser
  const page = await browser.newPage()
  await page.setRequestInterception(true)
  page.on('request', request => {
    if (request.url().endsWith('/random-quote')) {
      request.respond({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(mock),
      })
    } else {
      request.continue()
    }
  })
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' })
  const titleEl = await page.$(selectors.title)
  const title = await titleEl.evaluate(e => e.textContent)
  expect(title).toEqual('Quotez')
  const emptyContentEl = await page.$(selectors.contentEmpty)
  const emptyContentText = await emptyContentEl.evaluate(e => e.textContent)
  expect(emptyContentText).toEqual('...')
  const triggerEl = await page.$(selectors.trigger)
  await triggerEl.click()
  await page.waitForNetworkIdle()
  const contentEl = await page.$(selectors.content)
  const contentText = await contentEl.evaluate(e => e.textContent)
  expect(contentText).toEqual(`${mock.quote} by ${mock.author}`)
  await browser.close()
})
