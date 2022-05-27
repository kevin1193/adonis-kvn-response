import TransformerAbstractI from 'adonis-bumblebee-ts/build/Bumblebee/TransformerAbstract'
declare module '@ioc:Adonis/Core/HttpContext' {
  interface HttpContextContract {
    transform?: any;
  }
}

declare module '@ioc:Adonis/Core/Response' {
  interface ResponseContract {
    ok(message?: String): this

    data(data: {}, message?: String): this

    resource(resource: TransformerAbstractI, meta?:{}, message?: String): this

    accepted(data: {}, message?: String): this

    error(errors: {}, message?: String): this

    unableToProcess(errors: {}, message?: String): this

    notFound(message?: String): this

    forbidden(message?: String): this

    unauthorized(message?: String): this

    badRequest(message?: String): this
  }
}
