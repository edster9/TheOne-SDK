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

The SDK creates a sperate class per top level api endpoint into its own module and a wrapper class `TheOne` encapsulates all the top level modules. Each API modules will contain its own type definitions

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

### Limitations
