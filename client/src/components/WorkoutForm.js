import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import baseURL from "../apis/workoutlog"

function WorkoutForm() {

    const [sets, setSets] = useState([{ exercise: "", reps: "", weight: "" }])
    const [exercises, setExercises] = useState([])
    const [workoutDate, setWorkoutDate] = useState()
    const navigate = useNavigate()

    const getExercises = async () => {
        try {
            const response = await fetch(`${baseURL}/exercises`)
            const jsondata = await response.json()
            setExercises(jsondata.data.exercises)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getExercises()
    }, [])

    const handleAddSet = () => {
        setSets([...sets, { exercise: "", reps: "", weight: "" }])
    }

    const handleRemoveSet = (e, index) => {
        e.preventDefault()
        setSets(prevState => {
            const updatedSets = [...prevState]
            updatedSets.splice(index, 1)
            return updatedSets
        })
    }

    const handleChange = (index, key, value) => {
        setSets(prevState => {
            const updatedSets = [...prevState]
            updatedSets[index][key] = value
            return updatedSets
        })
    }

    const submitSets = async (id) => {
        try {
            sets.forEach(async set => {
                const response = await fetch(`${baseURL}/sets`, {
                    method: "POST",
                    body: JSON.stringify({
                        reps: parseInt(set.reps),
                        exercise_id: parseInt(set.exercise),
                        workout_id: parseInt(id),
                        weight: parseInt(set.weight)
                    }),
                    credentials: "include",
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
            })
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }

    const submitWorkout = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`${baseURL}/workouts`, {
                method: "POST",
                body: JSON.stringify({
                    date: `${workoutDate}`
                }),
                credentials: "include",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            const jsondata = await response.json()
            const newWorkoutId = jsondata.workout.workout_id
            submitSets(newWorkoutId)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="main-container">
            <button className="confirm-btn" onClick={handleAddSet}>Add set</button>
            <h4 className="sub-title">Sets in workout</h4>
            <form>
                {sets.map((set, index) => (
                    <div key={index} className ="exercise-input-div">
                        <label htmlFor={`exercise-${index}`}>Exercise</label>
                        <select 
                            id={`exercise-${index}`}
                            value={set.exercise}
                            onChange={e => handleChange(index, "exercise", e.target.value)}
                        >
                            <option key="nochoice" value="">Chose exercise</option>
                            {exercises.map(exercise => (
                                <option key={exercise.exercise_id} value={exercise.exercise_id}>{exercise.name}</option>
                            ))}
                        </select>
                        <label htmlFor={`reps-${index}`}>Reps</label>
                        <input
                            type="text"
                            id={`reps-${index}`}
                            value={set.reps}
                            onChange={e => handleChange(index, "reps", e.target.value)}
                        />
                        <label htmlFor={`weight-${index}`}>Weight</label>
                        <input
                            type="text"
                            id={`weight-${index}`}
                            value={set.weight}
                            onChange={e => handleChange(index, "weight", e.target.value)}
                        />
                        <button className="cancel-btn" onClick={e => handleRemoveSet(e, index)}>X</button>
                    </div>
                ))}
                <label htmlFor="workout-date" className="workout-date-label">Date for workout</label>
                <input
                    type="date"
                    id="workout-date"
                    value={workoutDate}
                    onChange={e => setWorkoutDate(e.target.value)}
                />
                <button className="confirm-btn" onClick={e => submitWorkout(e)}>Save workout</button>
            </form>
        </div>
    )
}

export default WorkoutForm