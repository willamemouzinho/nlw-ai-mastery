import { Wand2 } from 'lucide-react'
import { Label } from './ui/label'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { Slider } from './ui/slider'

export const GeneratePromptForm = () => {
  return (
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
        <span className="block text-xs text-muted-foreground italic">
          Você poderá customizar essa opção em breve
        </span>
      </div>

      <Separator />

      <div className="space-y-4">
        <Label className="font-semibold">Temperatura</Label>
        <Slider min={0} max={1} step={0.1} className="cursor-pointer" />
        <span className="block text-xs text-muted-foreground italic leading-relaxed">
          Valores mais altos tendem a deixar o resultado mais criativo, porém
          com mais chances d eerros.
        </span>
      </div>

      <Separator />

      <Button
        type="submit"
        className="w-full flex items-center gap-x-2 font-semibold"
      >
        Executar
        <Wand2 className="w-4 h-4" />
      </Button>
    </form>
  )
}
