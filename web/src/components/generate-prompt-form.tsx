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
import { PromptSelect } from './prompt-select'
import { FormEvent } from 'react'
// import { useState } from 'react'

interface GeneratePromptFormProps {
  onChangeTemperature: (value: number) => void
  valueTemperature: number
  onPromptSelected: (prompt: string) => void
  onFormSubmit: (event: FormEvent<HTMLFormElement>) => void
  onIsLoading: boolean
}

export const GeneratePromptForm = (props: GeneratePromptFormProps) => {
  // const [temperature, setTemperature] = useState(0.5)
  // const [videoId, setVideoId] = useState<string | null>(null)

  // function onPromptSelected(template: string) {
  //   console.log(template)
  // }

  return (
    <form onSubmit={props.onFormSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label className="font-semibold">Prompt</Label>
        <PromptSelect onPromptSelected={props.onPromptSelected} />
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
        <Slider
          min={0}
          max={1}
          step={0.1}
          value={[props.valueTemperature]}
          onValueChange={(value) => props.onChangeTemperature(value[0])}
          className="cursor-pointer"
        />
        <span className="block text-xs text-muted-foreground italic leading-relaxed">
          Valores mais altos tendem a deixar o resultado mais criativo, porém
          com mais chances d eerros.
        </span>
      </div>

      <Separator />

      <Button
        disabled={props.onIsLoading}
        type="submit"
        className="w-full flex items-center gap-x-2 font-semibold"
      >
        Executar
        <Wand2 className="w-4 h-4" />
      </Button>
    </form>
  )
}
