const { test, expect } = require('@playwright/test')
const selectors = require('./common/selectors')
const mock = require('./common/mock')

test('Playwright', async ({ page }) => {
  await page.route('http://localhost:3000/random-quote', route => route.fulfill({
    status: 200,
    body: JSON.stringify(mock),
  }))
  await page.goto('http://localhost:3000/')
  await expect(page.locator(selectors.title)).toHaveText('Quotez')
  await expect(page.locator(selectors.contentEmpty)).toBeVisible()
  await expect(page.locator(selectors.contentEmpty)).toHaveText('...')
  await page.locator(selectors.trigger).click()
  await expect(page.locator(selectors.content)).toBeVisible()
  await expect(page.locator(selectors.content)).toHaveText(`${mock.quote} by ${mock.author}`)
})
