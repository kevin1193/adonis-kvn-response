# Adonis v5 Kvn Response

This addon adds the functionality to integrate common REST API responses to Response class of HttpContext.


## Installation

Make sure to install it using `npm` or `yarn`.

```bash
# npm
npm i adonis-kvn-response
node ace invoke adonis-kvn-response

# yarn
yarn add adonis-kvn-response
node ace invoke adonis-kvn-response
```

## Usage

Make sure to register the provider inside `.adonisrc.json` file.

```json
"providers": [
  "...other packages",
  "adonis-kvn-response"
]
```

For TypeScript projects add to `tsconfig.json` file:
```json
"compilerOptions": {
  "types": [
    "...other packages",
    "adonis-kvn-response"
  ]
}
```