import { useState, useEffect } from "react"
import baseURL from "../apis/workoutlog"
import ExerciseForm from "./ExerciseForm.js"

function WorkoutForm() {

    const [exerciseTypes, setExerciseTypes] = useState([])
    const [exercises, setExercises] = useState([])
    const [selectedExerciseType, setSelectedExerciseType] = useState()
    const [selectionIsOpen, setSelectionIsOpen] = useState(false)

    const updateSets = (excerciseId, sets) => {
        console.log(excerciseId)
        console.log(sets)
    }

    const getExerciseTypes = async () => {
        try {
            const response = await fetch(`${baseURL}/exercises`)
            const jsondata = await response.json()
            setExerciseTypes(jsondata.data.exercises)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getExerciseTypes()
    }, [])

    const addExercise = (exercise) => {
        setExercises([...exercises, exercise])
    }

    const handleSelect = (e) => {
        addExercise(JSON.parse(e.target.value))
        setSelectionIsOpen(false)
    }


    return (
        <div className="main-container">
            {!selectionIsOpen && 
                <button className="confirm-btn" onClick={() => setSelectionIsOpen(true)}>
                    Add Exercise
                </button>
            }
            {selectionIsOpen &&
                <select onChange={handleSelect}>
                    {exerciseTypes.map(exerciseType => (
                        <option 
                            key={exerciseType.exercise_id} 
                            value={JSON.stringify(exerciseType)}
                    >
                            {exerciseType.name}
                        </option>
                    ))}
                </select>
            }
            <form>
                {exercises.map((exercise) => (
                    <div key={exercise.exercise_id} className="exercise-input-div">
                       <ExerciseForm exercise={exercise} /> 
                    </div>
                ))}
            </form>
        </div>
    )
}

export default WorkoutForm

    /*
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
*/
        /*
        <div className="main-container">
            <button className="confirm-btn" onClick={handleAddSet}>Add set</button>
            <h4 className="sub-title">Sets in workout</h4>:
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
    */
