/**
 * ------------------------------------------------------------
 * Demo Showcase Component
 * ------------------------------------------------------------
 * Displays:
 * - Tailwind + shadcn UI example
 * - Recharts demo
 * - D3 demo
 * This acts as a visualization foundation preview.
 * ------------------------------------------------------------
 */

import { Button } from "../ui/button"
import TestChart from "../charts/TestChart"
import D3Demo from "../charts/D3Demo"

export default function DemoShowcase() {
  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center space-y-10">
        
        {/* Tailwind + shadcn demo */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            Org Explorer
          </h1>
          <Button className="px-6 py-2 text-lg">
            Ready to Explore
          </Button>
        </div>

        {/* Recharts Demo */}
        <div className="w-full bg-card rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Recharts Example
          </h2>
          <TestChart />
        </div>

        {/* D3 Demo */}
        <div className="w-full bg-card rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            D3 Example (Raw SVG)
          </h2>
          <D3Demo />
        </div>

      </div>
    </div>
  )
}
