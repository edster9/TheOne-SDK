# SDK Design

### Requirements

To create an API wrapper for The One SDK, which is a Lord of the Rings API. `https://the-one-api.dev`

### Credits

This project is inspired by `https://github.com/imdurgadas/sdk-typescript` repository

### Libraries

- `microbunle`
- `typescript`
- `isomorphic-unfetch`

### Design Philosophy

#### Tech Stack

The SDK uses `typescript` and the `microbundle` package to create the NPM package. Microbundle is great because of a zero-config style to preprae a package that can be used from Web or NodeJS.

For calling REST API endpoints, the `isomorphic-unfetch` package is a good choice for providing Browser level and Backend API request calling in a unified way.

#### Structure

The One API end points are devided into top level models `book` `movie` `chapter` `character` and `quote`

The SDK creates a sperate modal class per top level AP endpoint module into its own modal and a wrapper class `TheOne` encapsulates all the top level modals. Each API modal will contain its own type definitions

```bash
📦src
┣ 📂books
┃ ┣ 📜index.ts
┃ ┗ 📜types.ts
┣ 📂chapters
┃ ┣ 📜index.ts
┃ ┗ 📜types.ts
┣ 📂characters
┃ ┣ 📜index.ts
┃ ┗ 📜types.ts
┣ 📂movies
┃ ┣ 📜index.ts
┃ ┗ 📜types.ts
┣ 📂quotes
┃ ┣ 📜index.ts
┃ ┗ 📜types.ts
```

#### API Modal Base Class

Each API Modal is extended from the `Base` class that recieves the API configuration object (`baseURL` and `apiKey`)

The `Base` class incapsulates the fetch request using a templatized `request<T>(...params)` function.

```js
protected request<T>(
    endpoint: string,
    options?: RequestInit,
    auth?: boolean,
): Promise<T>
```

`options` can be used to pass additional headers and other request call options (such as reqeust method: `POST` or `PUT`)

`auth` is used to add additional Authorization headers to each request call for adding the Bearer token if the `endpoint` in questions requires an authentication token.

#### Docs Template Object

All API calls return data using a similar pattern

Example: The `book` API

```js
{
    "docs": [
        {
            "_id": "5cf5805fb53e011a64671582",
            "name": "The Fellowship Of The Ring"
        }
    ],
    "total": 3,
    "limit": 1000,
    "offset": 0,
    "page": 1,
    "pages": 1
}
```

Return data contains a `docs` array of results along with metadata about the result set

A templatized `Docs` datatype is created by the SDK to wrap each SDK result with the respective datatypes

Example: The `book` api will return `Docs<Book>` datatype

```js
const result: Docs<Book> = await client.books.getAll()
```

`results` object will contain a `docs` memeber of type `Book[]` which is an array of Book object

#### SDK query options

The One API documentation `https://the-one-api.dev/documentation` explains the use of additional query options for `pagination`, `sorting` and `filtering` each API request

`TheOne` SDK calls can include a configuraion object to proxy the API configuration options to the request call.

```js
// The API request call example

// Options configuration to limit the API request to only 100 rows of returned data
const options {
    limit: '100'
}

// Transform the options object into a URI string
// `limit=100`
const params = new URLSearchParams(options).toString()

// Append the options URI to the full API request URL
// `https://the-one-api.dev/v2/book?limit=100`
return this.request(`/${resourceName}` + (params && `?${params}`))
```

#### SDK Limitations

Currently the API options for `pagination`, `sorting` and `filtering` is limited to the `getAll()` method for each model

`filtering` options are not fully supported and will need additional configuration rules and logic to implement correctly.
