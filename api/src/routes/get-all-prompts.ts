import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

export async function getAllPromptsRoute(server: FastifyInstance) {
  server.get('/prompts', async (req, reply) => {
    const prompts = await prisma.prompt.findMany()
    return reply.status(200).send(prompts)
  })
}
