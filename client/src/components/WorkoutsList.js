import { useEffect, useState } from "react"

function WorkoutsList() {

    const [workouts, setWorkouts] = useState([])

    const getWorkouts = async () => {
        try {
            const response = await fetch("http://localhost:4000/api/v1/workouts")
            const data = await response.json()
            setWorkouts(data)
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
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Exercises</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                    </tr>
                </tbody>
            </table> 
        </div>
    )
}

export default WorkoutsList