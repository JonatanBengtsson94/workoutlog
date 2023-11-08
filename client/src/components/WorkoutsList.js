import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function WorkoutsList() {

    const [workouts, setWorkouts] = useState([])
    const navigate = useNavigate()

    const getWorkouts = async () => {
        try {
            const response = await fetch("http://localhost:4000/api/v1/workouts")
            const jsondata = await response.json()
            setWorkouts(jsondata.data.workouts)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getWorkouts()
    }, [])

    return (
        <div>
            <button>Log new workout</button>
            <ul>
                <h4>Workouts</h4>
                {workouts && workouts.map(workout => (
                    <li key={workout.workout_id}>
                        <button onClick={() => navigate(`/workout/${workout.workout_id}`)}>
                            {Intl.DateTimeFormat('en-GB', { dateStyle: "long"}).format(new Date(workout.workout_date))}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WorkoutsList