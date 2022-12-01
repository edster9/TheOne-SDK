# The One - SDK

[![NPM version](https://badgen.net/npm/v/@ed.sahakian/theone)](https://www.npmjs.com/package/@ed.sahakian/theone)
[![License](https://badgen.net/npm/license/@ed.sahakian/theone)](https://www.npmjs.com/package/@ed.sahakian/theone)

A simple JavaScript API wrapper for accesing the The One API `https://the-one-api.dev/`

Install with [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/):

```bash
# via npm
npm install @ed.sahakian/theone

# or Yarn
yarn add @ed.sahakian/theone
```

## Usage

```js
// Import the package
import TheOne from '@ed.sahakian/theone'

// Initialize the SDK
const client = new TheOne({
	apiKey: 'XXX-API-KEY-XXX',
})

// Example of fetching all the books
client.books.getAll().then((res) => {
	console.log(res)
})

// Get one book by ID
client.books.getOne('XXX-ID-XXX').then((res) => {
	console.log(res)
})
```

Advanced usage of API using (pagination and sorting) based on The One SDK documentation `https://the-one-api.dev/documentation`

```js
// Limit the result to first 100 character quotes only
client.quotes.getAll({ limit: '100' }).then((res) => {
	console.log(res)
})

// Limit the result to first 100 characters and sort on "name" column by asceding order
client.characters.getAll({ sort: 'name:asc', limit: '100' }).then((res) => {
	console.log(res)
})
```

## Test Client

The included `test-client` directory is a sample mini application using `TheOne SDK`

The example has examples of the SDK usage in `./test-client/src/index.ts`

```bash
cd test-client
yarn
yarn run dev
```
