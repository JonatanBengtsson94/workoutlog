import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import baseURL from "../apis/workoutlog"
import WorkoutStat from "./WorkoutStat"

function WorkoutInfo() {

    const { id } = useParams()
    const [sets, setSets] = useState()

    const getSets = async () => {
        try {
            const response = await fetch(`${baseURL}/workouts/${id}`, {
                credentials: "include"
            })
            const jsondata = await response.json()
            setSets(jsondata.sets)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getSets()
    }, [])

    return (
        <div className="main-container">
            <h4 className="sub-title">Workout</h4>
             <table className="exercise-table">
                <thead>
                    <tr>
                        <th>Exercise</th>
                        <th>Reps</th>
                        <th>Weight</th>
                    </tr>
                </thead>
                <tbody>
                    {sets && sets.map(set => (
                        <tr key={set.set_id}>
                            <td>{set.exercise}</td>
                            <td>{set.reps}</td>
                            <td>{set.weight} kg</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {sets && <WorkoutStat sets={sets}/>}
        </div>
    )
}

export default WorkoutInfo