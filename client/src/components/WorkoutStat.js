import { useState, useEffect } from "react"
import * as d3 from "d3"

function WorkoutStat(props) {

    const[histogram, setHistogram] = useState({})

    useEffect(() => {
        createHistogram()
        createPie()
    },[])

    const createHistogram = () => {
        const dict = {}
        for (const set of props.sets) {
            const currCount = dict[set.bodypart] ?? 0
            dict[set.bodypart] = currCount + 1
        }
        setHistogram(dict)
    }   

    const createPie = () => {
        //Chart
        const width = 200
        const height = 200
        const radius = 100
        const pie= d3.pie()
        const arc = d3.arc()
            .innerRadius(0)
            .outerRadius(radius)

        const svg = d3.select("svg")
            .append("g")
            .attr("transform", `translate(${width / 2}, ${height / 2})`)
        
        svg.selectAll("path")
            .data(pie(Object.values(histogram)))
            .enter()
            .append("path")
            .attr("d", arc)
            .attr("fill", (d, i) => d3.schemeCategory10[i])

        //Legend
        
    }



    return (
        <div className="stat-container">
            <svg width="200" height="200">

            </svg>
        </div>
    )
}


//<svg>
//{Object.keys(histogram).map((key, index) => (
//    <rect
//        x={0}
//        y={yScale(key)}
//        width={xScale(histogram[key])}
//        height={yScale.bandwidth()}>
//    </rect>
//))}
//</svg>

export default WorkoutStat