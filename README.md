# ✍️ Complete Guide to Test Chrome Extensions with Puppeteer

We host here a set of test implementation examples with various E2E JavaScript testing frameworks. This repo is referenced in our [blog](https://tweak-extension.com/blog/comparison-e2e-javascript-testing-frameworks).

Each test is a minimal example of a given framework that allows us to compare them in terms of developer experience. All the tests run against the same react application located in `src`.

## Running instructions

1. Run `npm run start:test`
2. Run a test with a given framework, for example `npm run test:playwright`

## Project structure

```
.
├── src                                   👉 React application
│   ├── app.css
│   ├── app.js
│   ├── ...
├── tests                                 👉 Test cases
│   ├── common                                  👉 Common utilities used across all tests
│   │   ├── mock.js
│   │   └── selectors.js
│   ...
```

## 📚 Other Interesting Blogposts

* [Complete Guide to Test Chrome Extensions with Puppeteer](https://tweak-extension.com/blog/complete-guide-test-chrome-extension-puppeteer)
* [How to Simulate HTTP Request Errors](https://tweak-extension.com/blog/how-to-simulate-error-http-request)
* [The Different Shades of Testing Web Apps: Aiming for Balance](https://tweak-extension.com/blog/web-application-testing)
