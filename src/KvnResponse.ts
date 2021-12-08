'use strict'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TransformerAbstractI from 'adonis-bumblebee-ts/build/Bumblebee/TransformerAbstract'

export default class KvnResponse {
  private response

  constructor ({ response }: HttpContextContract) {
    this.response = response
  }

  public async ok (message:String = 'Ok') {
    this.response.status(200).json({
      message,
    })
  }

  public async data (data:{}, message:String = 'Ok') {
    this.response.status(200).json({
      message,
      data,
    })
  }

  public async resource (resource:TransformerAbstractI, meta:{} = {}, message:String = 'Ok') {
    const data = await resource
    this.response.status(200).json({
      message,
      data,
      meta,
    })
  }

  public async accepted (data:{}, message:String = 'Accepted') {
    this.response.status(202).json({
      message,
      data,
    })
  }

  public async error (errors:{}, message:String = 'Internal Server Error') {
    this.response.status(500).json({
      message,
      errors,
    })
  }

  public async unableToProcess (errors:{}, message:String = 'Unprocessable Entity') {
    this.response.status(422).json({
      message,
      errors,
    })
  }

  public async notFound (message:String = 'Not Found') {
    this.response.status(404).json({
      message,
    })
  }

  public async forbidden (message:String = 'Forbidden') {
    this.response.status(403).json({
      message,
    })
  }

  public async unauthorized (message:String = 'Unathorized') {
    this.response.status(401).json({
      message,
    })
  }

  public async badRequest (message:String = 'Bad Request') {
    this.response.status(400).json({
      message,
    })
  }
}
