import fastify from 'fastify'

const app = fastify({
  //just to format the development log
  logger: {
    transport:{
      target: 'pino-pretty',
       options: {
        colorize: true
       }
    }
  }
})

app.get('/', async function handled(request, reply){
  return { hello: 'APAM'}
})

app.listen({
  host: '0.0.0.0',
  port: 4000
})
