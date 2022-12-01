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

The SDK creates a sperate class per top level api endpoint into its own module and a wrapper class `TheOne` encapsulates all the top level modules.

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
┣ 📜base.ts
┣ 📜index.ts
┗ 📜types.ts

### Limitations
