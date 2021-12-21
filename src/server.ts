import { logger } from "./logger"
import { configuration } from "./config"
import { FastifyReply, FastifyRequest } from "fastify"
const fastify = require('fastify')()
const PORT = configuration.getFastify_port()

fastify.get('/dietas', (request: FastifyRequest, reply: FastifyReply) =>{
    logger.info("Accesed Dietas array")
    reply.code(200).send({url: "dieta sin id"})
})

fastify.get('/dietas/:id', (request: FastifyRequest, reply: FastifyReply) =>{

})

fastify.delete('/dietas/:id', (request: FastifyRequest, reply: FastifyReply) =>{

})

fastify.put('/dietas/:id', (request: FastifyRequest, reply: FastifyReply) =>{

})

const DietaOpts = {
    type: 'object',
    required: ['username','edad', 'altura', 'peso', 'sexo', 'actividad', 'objetivo'],
    properties: {
        username: {type: 'string'},
        edad: {type: 'number'},
        altura: {type: 'number'},
        peso: {type: 'number'},
        sexo: {type: 'string'},
        actividad: {type: 'string'},
        objetivo: {type: 'string'}
    },
}

fastify.route({
    method: 'POST',
    url: '/dietas',
    schema: {
        body: DietaOpts,
        responde: {
            201: DietaOpts
        }
    },
    handler: function(request:FastifyRequest, reply:FastifyReply){
        
    }
})

const start = async () =>{
    try{
        logger.info(`Server listening in ${PORT}`)
        fastify.listen(PORT)
    }
    catch(error){
        fastify.log.error(error)
        process.exit(1)
    }
}

start()