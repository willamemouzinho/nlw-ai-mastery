import fastify from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { getAllPromptsRoute } from './routes/get-all-prompts'
import { uploadVideoRoute } from './routes/upload-video'
import { createTranscriptionRoute } from './routes/create-transcription'
import { generateAICompletionRoute } from './routes/generate-ai-completion'

const server = fastify()

const corsOptions = {
  credentials: true,
  origin: /localhost:3333/,
}

server.register(fastifyCors, corsOptions)

server.register(getAllPromptsRoute)
server.register(uploadVideoRoute)
server.register(createTranscriptionRoute)
server.register(generateAICompletionRoute)

server.get('/', (req, reply) => {
  return reply.status(200).send('Home')
})

server.listen(
  {
    port: 3333,
  },
  (err) => {
    if (err) throw err
    console.log(`server listening on 3333 port`)
  },
)
