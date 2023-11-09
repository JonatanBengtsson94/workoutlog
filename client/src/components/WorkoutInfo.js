import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

function WorkoutInfo() {

    const { id } = useParams()
    const [sets, setSets] = useState()

    const getSets = async () => {
        try {
            const response = await fetch(`http://localhost:4000/api/v1/workouts/${id}`)
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
                            <td>{set.name}</td>
                            <td>{set.reps}</td>
                            <td>{set.weight} kg</td>
                        </tr>
                    ))}
                </tbody>
                </table> 
        </div>
    )
}

export default WorkoutInfo