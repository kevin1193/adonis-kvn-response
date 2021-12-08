
import KvnResponse from '../KvnResponse'
import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

declare module '@ioc:Adonis/Core/HttpContext' {
  interface HttpContextContract {
    kvnResponse?: any
  }
}

export default class AppProvider {
  public static needsApplication = true

  constructor (protected app: ApplicationContract, protected context: HttpContextContract) {}

  public register () {
    const kvnResponse = new KvnResponse(this.context)

    this.app.container.singleton('Adonis/Addons/KvnResponse', () => kvnResponse)
  }

  public async boot () {
    const Context = this.app.container.use('Adonis/Core/HttpContext')
    Context.getter(
      'kvnResponse',
      () => {
        return new KvnResponse(this.context)
      }
    )
  }

  public async ready () {
    // App is ready
  }

  public async shutdown () {
    // Cleanup, since app is going down
  }
}
