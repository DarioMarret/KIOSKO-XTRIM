import 'dotenv/config'
import Fastify from 'fastify'
import swagger from "./utils/swagger"
import Producer from './router/routes'
import Turnos from './router/routes.turnos'
import Fastifycors from "@fastify/cors"

const fastify = Fastify({
    logger: {
        level: 'info',
    }
});

fastify.register(require("@fastify/swagger"), swagger.options)
fastify.register(Fastifycors, {})


fastify.register(async fastify => {

    fastify.setErrorHandler(async err => {
        console.log(err.message)
        throw new Error(err.message)
    })

    Producer.forEach(route => {
        fastify.route(route)
    })

    Turnos.forEach(route => {
        fastify.route(route)
    })

})


fastify.setErrorHandler(async err => {
    console.log(err.message)
    throw new Error(err.message)
})






const start = async () => {
    try {
        await fastify.listen({ port: process.env.PORT, host: process.env.HOST || '' })
        await fastify.swagger();
        console.log(`server listening on ${process.env.PORT}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start()