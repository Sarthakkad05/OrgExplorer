/**
 * ------------------------------------------------------------
 * Test D3 Chart Component
 * ------------------------------------------------------------
 * This component displays a simple line chart using raw D3.
 * Demonstrates direct SVG manipulation without abstraction.
 * ------------------------------------------------------------
 */

import { useEffect, useRef } from "react"
import * as d3 from "d3"

type DataPoint = {
  month: string
  value: number
}

const data: DataPoint[] = [
  { month: "Jan", value: 20 },
  { month: "Feb", value: 30 },
  { month: "Mar", value: 25 },
  { month: "Apr", value: 40 },
  { month: "May", value: 35 },
]

export default function TestD3Chart() {
  const svgRef = useRef<SVGSVGElement | null>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const width = 500
    const height = 250
    const margin = { top: 20, right: 20, bottom: 40, left: 40 }

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)

    svg.selectAll("*").remove()

    const xScale = d3
      .scalePoint<string>()
      .domain(data.map(d => d.month))
      .range([margin.left, width - margin.right])

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.value) ?? 0])
      .nice()
      .range([height - margin.bottom, margin.top])

    const line = d3
      .line<DataPoint>()
      .x(d => xScale(d.month) ?? 0)
      .y(d => yScale(d.value))

    // Draw line
    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#2e8b57")
      .attr("stroke-width", 2)
      .attr("d", line)

    // X Axis
    svg
      .append("g")
      .attr("transform", `translate(0, ${height - margin.bottom})`)
      .call(d3.axisBottom(xScale))

    // Y Axis
    svg
      .append("g")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(yScale))

  }, [])

  return (
    <div className="w-full">
      <svg ref={svgRef} />
    </div>
  )
}
