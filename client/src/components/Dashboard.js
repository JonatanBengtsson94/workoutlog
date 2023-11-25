// Formula for calculating 1rm
// 1.0278 - 0.0278 * reps
import { useEffect, useState } from "react"
import WorkoutStat from "./WorkoutStat"
import baseURL from "../apis/workoutlog"

function Dashboard() {

    const [workouts, setWorkouts] = useState([])
    const [sets, setSets] = useState([])

    const getWorkouts = async () => {
        try {
            const response = await fetch(`${baseURL}/workouts`, {
                credentials: "include"
            })
            const jsondata = await response.json()
            setWorkouts(jsondata.data.workouts)
        } catch (err) {
            console.log(err)
        }
    }

    const getSets = async (workouts) => {
        console.log(workouts)
        workouts.forEach(async workout => {
            const response = await fetch(`${baseURL}/workouts/${workout.workout_id}`, {
                credentials: "include"
            })
            const jsondata = await response.json()
            setSets(prevState => {
                return [...prevState, ...jsondata.sets] 
            }) 
        })
    }
    
    useEffect(() => {
        getWorkouts()
    }, [])

    useEffect(() => {
        getSets(workouts)
    }, [workouts])

    return (
        <div className="main-container">
            <div className="benchpress-div"></div>
            <div className="deadlift-div"></div>
            <div className="squat-div"></div>
            {sets && <WorkoutStat sets={sets}></WorkoutStat>}
        </div>
    )
}

export default Dashboard