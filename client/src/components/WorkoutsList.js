import { useEffect, useState } from "react"

function WorkoutsList() {

    const [workouts, setWorkouts] = useState([])

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

    console.log(workouts)

    return (
        <div>
            <button>Log new workout</button>
            <ul>
                <h4>Workouts</h4>
                {workouts.map(workout => (
                    <li>
                        {workout.workout_date}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WorkoutsList