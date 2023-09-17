import { FileVideo, Upload, Wand2 } from "lucide-react"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Slider } from "./ui/slider"

export const Sidebar = () => {
  return (
    <aside className="w-80 space-y-6">
      <form action="" className="space-y-6">
        <label
          htmlFor="video"
          className="flex flex-col items-center justify-center gap-y-2 aspect-video border border-dashed cursor-pointer rounded-md text-sm text-muted-foreground hover:bg-primary/5 transition-colors">
          <FileVideo className="h-4 w-4" />
          Selecione um vídeo
        </label>
        <input
          type="file"
          id="video"
          accept="video/mp4"
          className="sr-only"
        />

        <Separator />

        <div className="space-y-2">
          <Label htmlFor="transcription_prompt" className="font-semibold">Prompt de transcrição</Label>
          <Textarea
            id="transcription_prompt"
            className="h-20 leading-relaxed resize-none"
            placeholder="Inclua palavras-chave mencionadas no vídeo separadas por vírgula (,)" />
        </div>

        <Button type="submit" className="w-full flex items-center gap-x-2 font-semibold">
          Carregar vídeo
          <Upload className="w-4 h-4" />
        </Button>
      </form>

      <Separator />

      <form action="" className="space-y-6">
        <div className="space-y-2">
          <Label className="font-semibold">Prompt</Label>
          <Select>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="title">Título do YouTube</SelectItem>
              <SelectItem value="description">Descrição do YouTube</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="font-semibold">Modelo</Label>
          <Select disabled defaultValue="gpt3.5">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
            </SelectContent>
          </Select>
          <span className="block text-xs text-muted-foreground italic">Você poderá customizar essa opção em breve</span>
        </div>

        <Separator />

        <div className="space-y-4">
          <Label className="font-semibold">Temperatura</Label>
          <Slider 
            min={0}
            max={1}
            step={0.1}
            className="cursor-pointer"
          />
          <span className="block text-xs text-muted-foreground italic leading-relaxed">
            Valores mais altos tendem a deixar o resultado mais criativo, porém com mais chances d eerros.
          </span>
        </div>

        <Separator/>

        <Button type="submit" className="w-full flex items-center gap-x-2 font-semibold">
          Executar
          <Wand2 className="w-4 h-4" />
        </Button>
      </form>
    </aside>
  )
}