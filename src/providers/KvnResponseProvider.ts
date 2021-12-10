
import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import TransformerAbstractI from 'adonis-bumblebee-ts/build/Bumblebee/TransformerAbstract'

declare module '@ioc:Adonis/Core/Response' {
  interface ResponseContract {
    ok(message: String): this

    data(data: {}, message: String): this

    resource(resource: TransformerAbstractI, meta:{}, message: String): this

    accepted(data: {}, message: String): this

    error(errors: {}, message: String): this

    unableToProcess(errors: {}, message: String): this

    notFound(message: String): this

    forbidden(message: String): this

    unauthorized(message: String): this

    badRequest(message: String): this
  }
}

export default class AppProvider {
  public static needsApplication = true

  constructor (protected application: ApplicationContract) {}

  public async boot () {
    const Response = this.application.container.use('Adonis/Core/Response')

    Response.macro('ok', function (message: String) {
      this.status(200).json({
        message,
      })
      return this
    })

    Response.macro('data', function (data:{}, message: String = 'Ok') {
      this.status(200).json({
        message,
        data,
      })
      return this
    })

    Response.macro('resource', function (resource:TransformerAbstractI, meta:{} = {}, message:String = 'Ok') {
      const data = resource
      this.status(200).json({
        message,
        data,
        meta,
      })
      return this
    })

    Response.macro('accepted', function (data: {}, message: String= 'Accepted') {
      this.status(202).json({
        message,
        data,
      })
      return this
    })

    Response.macro('error', function (errors: {}, message: String= 'Internal Server Error') {
      this.status(500).json({
        message,
        errors,
      })
      return this
    })

    Response.macro('unableToProcess', function (errors:{}, message:String = 'Unprocessable Entity') {
      this.status(422).json({
        message,
        errors,
      })
      return this
    })

    Response.macro('notFound', function (message:String = 'Not Found') {
      this.status(404).json({
        message,
      })
      return this
    })

    Response.macro('forbidden', function (message:String = 'Forbidden') {
      this.status(403).json({
        message,
      })
      return this
    })

    Response.macro('unauthorized', function (message:String = 'Unathorized') {
      this.status(401).json({
        message,
      })
      return this
    })

    Response.macro('badRequest', function (message:String = 'Bad Request') {
      this.status(400).json({
        message,
      })
      return this
    })
  }
}
