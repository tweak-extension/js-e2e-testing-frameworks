const { Selector, RequestMock } = require('testcafe')
const selectors = require('./common/selectors')
const mock = require('./common/mock')

const tcMock = RequestMock()
  .onRequestTo('http://localhost:3000/random-quote')
  .respond(JSON.stringify(mock), 202)

fixture`TestCafe`
  .page('http://localhost:3000')
  .requestHooks(tcMock)

test('TestCafe', async t => {
  await t
    .expect(Selector(selectors.title).innerText).eql('Quotez')
    .expect(Selector(selectors.contentEmpty).exists).ok()
    .expect(Selector(selectors.contentEmpty).innerText).eql('...')
    .click(Selector(selectors.trigger))
    .expect(Selector(selectors.content).exists).ok()
    .expect(Selector(selectors.content).innerText).eql(`${mock.quote} by ${mock.author}`)
})
