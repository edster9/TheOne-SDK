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
import TheOne from "@ed.sahakian/theone";

// Initialize the SDK
const client = new TheOne({
  apiKey: "XXX-API-KEY-XXX",
});

// Example of fetching all the books
client.books.getAll().then((res) => {
  console.log(res);
});
```
