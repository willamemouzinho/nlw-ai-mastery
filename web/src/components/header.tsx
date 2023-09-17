import { Github } from 'lucide-react'
import { Button } from './ui/button'

export const Header = () => {
  return (
    <header className="px-6 py-3 flex items-center justify-between border-b">
      <h1 className="text-xl font-bold">upload.ai</h1>

      <div className="flex items-center gap-x-4">
        <span className="text-sm text-muted-foreground">
          Desenvolvido com 💜 na NLW da Rocketseat
        </span>
        <Button
          variant={'secondary'}
          className="font-semibold flex items-center gap-x-1"
        >
          <Github className="w-4 h-4" />
          Github
        </Button>
      </div>
    </header>
  )
}
