import { useEffect } from "react"

function WorkoutStat(props) {

    useEffect(() => {
        return console.log(props.sets)
    },[])

    return (
        <div className="main-container">
            
        </div>
    )
}

export default WorkoutStat