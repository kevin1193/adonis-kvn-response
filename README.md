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
    "adonis-kvn-response/build/adonis-typings"
  ]
}
```

## Example

### response.ok()
```
public async someFunction({ response, auth }: HttpContextContract) {
  return response.ok('Your messaged here.')
}
```
### response.data()
```
public async someFunction({ response, auth }: HttpContextContract) {
  return response.data({
    email: email,
    name: name
  }, 'Your messaged here is optional')
}
```
### response.resource()
Note: Need to install adonis-bumblebee-ts to be able to use this function for transforming data
```
public async listItems({ response, auth, transform }: HttpContextContract) {
  return response.resource(await transform.collection(items, ItemTransformer))
}

public async showItem({ response, auth, transform }: HttpContextContract) {
  return response.resource(await transform.item(item, ItemTransformer))
}
```
### response.accepted()
Note: For creating record status code = 201
```
public async store({ response, auth, transform }: HttpContextContract) {
  return response.accepted({
    id: id,
    name: name
  })
}
```
#### response.error()

### response.unableToProcess()

### response.notFound()

### response.forbidden()

### response.unauthorized()

### response.badRequest()
