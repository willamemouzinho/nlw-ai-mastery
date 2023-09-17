import { FileVideo, Upload } from 'lucide-react'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { ChangeEvent, FormEvent, useMemo, useRef, useState } from 'react'

export const VideoInputForm = () => {
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const promptInputRef = useRef<HTMLTextAreaElement>(null)

  function handleFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.currentTarget

    if (!files) return

    const selectedFile = files[0]

    setVideoFile(selectedFile)
  }

  function handleUploadVideo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const prompt = promptInputRef.current?.value

    if (!videoFile) return

    // converte vídeo em aúdio
    const oi = 'q'
  }

  const previewURL = useMemo(() => {
    if (!videoFile) return null

    return URL.createObjectURL(videoFile)
  }, [videoFile])

  return (
    <form onSubmit={handleUploadVideo} className="space-y-6">
      <label
        htmlFor="video"
        className="flex flex-col items-center justify-center gap-y-2 aspect-video border border-dashed cursor-pointer rounded-md text-sm text-muted-foreground hover:bg-primary/5 transition-colors relative"
      >
        {previewURL ? (
          <video
            src={previewURL}
            controls={false}
            className="pointer-events-none absolute inset-0 rounded-md"
          />
        ) : (
          <>
            <FileVideo className="h-4 w-4" />
            Selecione um vídeo
          </>
        )}
      </label>
      <input
        type="file"
        id="video"
        accept="video/mp4"
        className="sr-only"
        onChange={handleFileSelected}
      />

      <Separator />

      <div className="space-y-2">
        <Label htmlFor="transcription_prompt" className="font-semibold">
          Prompt de transcrição
        </Label>
        <Textarea
          id="transcription_prompt"
          className="h-20 leading-relaxed resize-none"
          placeholder="Inclua palavras-chave mencionadas no vídeo separadas por vírgula (,)"
        />
      </div>

      <Button
        type="submit"
        className="w-full flex items-center gap-x-2 font-semibold"
      >
        Carregar vídeo
        <Upload className="w-4 h-4" />
      </Button>
    </form>
  )
}
