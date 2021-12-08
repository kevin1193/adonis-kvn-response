declare module '@ioc:Adonis/Addons/KvnResponse' {
  interface KvnResponseI {
    ok(): object,
    data(): object,
    resource(): object,
    accepted(): object,
    error(): object,
    unableToProcess(): object,
    notFound(): object,
    forbidden(): object,
    unauthorized(): object,
    badRequest(): object
  }
}
