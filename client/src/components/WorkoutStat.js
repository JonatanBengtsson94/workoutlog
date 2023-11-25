import { useEffect } from "react"
import { pie, arc, select, schemeCategory10 } from "d3"

function WorkoutStat(props) {

    useEffect(() => {
        createPie()
    })

    const createPie = () => {
        // Histogram
        const dict = {}
        for (const set of props.sets) {
            const currCount = dict[set.bodypart] ?? 0
            dict[set.bodypart] = currCount + 1
        }

        // Chart
        const width = 200
        const height = 200
        const radius = 100
        const pieGenerator = pie()
        const arcGenerator = arc()
            .innerRadius(0)
            .outerRadius(radius)

        const svg = select("svg")
            .append("g")
            .attr("transform", `translate(${width / 2}, ${height / 2})`)
        
        svg.selectAll("path")
            .data(pieGenerator(Object.values(dict)))
            .enter()
            .append("path")
            .attr("d", arcGenerator)
            .attr("fill", (d, i) => schemeCategory10[i])

        // Legend
        const legend = svg.append("g")
            .attr("transform", `translate(${width + 10}, -80)`)

        const legendItems = legend.selectAll(".legend-item")
            .data(Object.keys(dict))
            .enter()
            .append("g")
            .attr("class", "legend-item")
            .attr("transform", (d, i) => `translate(0, ${i * 20})`)

        legendItems.append("rect")
            .attr("width", 18)
            .attr("height", 18)
            .attr("fill", (d, i) => schemeCategory10[i])

        legendItems.append("text")
            .attr("x", 24)
            .attr("y", 9)
            .attr("dy", "0.35em")
            .text((d, i) => `${Object.keys(dict)[i]} (${Object.values(dict)[i]})`)
        }

    return (
        <div className="stat-container">
            <svg width="500" height="500"></svg>
        </div>
    )
}


export default WorkoutStat