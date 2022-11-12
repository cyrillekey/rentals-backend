import { FastifyPluginAsync } from 'fastify'

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.route({
    method: 'POST',
    url: '/signup',
    handler: (request,reply)=>{
    
      reply.send({})
    } 
  })
}

export default root;
