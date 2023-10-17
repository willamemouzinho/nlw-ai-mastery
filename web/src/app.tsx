import { Textarea } from './components/ui/textarea'
import { Separator } from './components/ui/separator'

import { VideoInputForm } from './components/video-input-form'
import { Header } from './components/header'
import { GeneratePromptForm } from './components/generate-prompt-form'
import { useState } from 'react'
import { useCompletion } from 'ai/react'

export const App = () => {
  const [videoId, setVideoId] = useState<string | null>(null)
  const [temperature, setTemperature] = useState(0.5)

  const {
    input,
    setInput,
    handleInputChange,
    handleSubmit,
    completion,
    isLoading,
  } = useCompletion({
    api: 'http://localhost:3333/ai/complete',
    body: {
      videoId,
      temperature,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex gap-x-6 p-6">
        <div className="flex flex-col flex-1 gap-y-4">
          <div className="flex-1 flex flex-col gap-y-4">
            <Textarea
              placeholder="Inclua o prompt para a IA ..."
              className="flex-1 resize-none leading-relaxed"
              value={input}
              onChange={handleInputChange}
            />
            <Textarea
              placeholder="Resultado gerado pela IA ..."
              className="flex-1 resize-none leading-relaxed"
              value={completion}
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Lembre-se: você pode utilizar a variável{' '}
            <code className="text-violet-300">{`{transcription}`}</code> no seu
            prompt para adicionar o conteúdo da transcrição do vídeo
            selecionado.
          </p>
        </div>
        <aside className="w-80 space-y-6">
          <VideoInputForm onVideoUploaded={setVideoId} />

          <Separator />

          <GeneratePromptForm
            onChangeTemperature={setTemperature}
            valueTemperature={temperature}
            onPromptSelected={setInput}
            onFormSubmit={handleSubmit}
            onIsLoading={isLoading}
          />
        </aside>
      </main>
    </div>
  )
}
