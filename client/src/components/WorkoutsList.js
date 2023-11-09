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
        <div className="main-container">
            <button className="new-workoutbtn">Log new workout</button>
            <h4 className="sub-title">Workouts</h4>
            <div className="workouts-div">
                <ul>
                    {workouts && workouts.map(workout => (
                        <li className="workouts" key={workout.workout_id}>
                            <button className="workout-btn" onClick={() => navigate(`/workout/${workout.workout_id}`)}>
                                {Intl.DateTimeFormat('en-GB', { dateStyle: "long"}).format(new Date(workout.workout_date))}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default WorkoutsList