import { PrismaClient } from "@prisma/client";
import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from "fastify";
import fp from "fastify-plugin";

export default fp(async (fastify,opts)=>{
    fastify.decorate('prisma',(request:FastifyRequest,reply:FastifyReply,done:HookHandlerDoneFunction)=>{
        const prisma = new PrismaClient();
        return prisma
    })
})

declare module 'fastify' {
    export interface FastifyInstance {
        prisma: PrismaClient
    }
}