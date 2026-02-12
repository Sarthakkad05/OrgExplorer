import './App.css'
import { Button } from "./components/ui/button"
import TestChart from "./components/charts/TestChart"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center space-y-10">
        {/* tailwind css and shadcn ui components example */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-green-500">
            Org Explorer
          </h1>
          <Button className="px-6 py-2 text-lg">
            Ready to Explore
          </Button>
        </div>

        {/* recharts example chart */}
        <div className="w-full bg-zinc-900 rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Organization Activity Overview
          </h2>
          <TestChart />
        </div>

      </div>
    </div>
  )
}

export default App

