import { Header } from "./components/header"
import { Sidebar } from "./components/sidebar"
import { Left } from "./components/textarea"

export const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex gap-x-6 p-6">
        <Left/>
        <Sidebar/>
      </main>
    </div>
  )
}