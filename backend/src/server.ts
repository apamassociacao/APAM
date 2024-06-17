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

app.get('/', async function handled(){
	return { hello: 'APAM'}
})

app.listen({
	port: 4000
}).then(() => {
	console.log('HTTP Server is running!')
})
