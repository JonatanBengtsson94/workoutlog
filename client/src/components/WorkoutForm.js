import { useState } from "react"

function WorkoutForm() {

    const [sets, setSets] = useState([{ exercise: "", reps: 0, weight: 0 }])

    const handleAddSet = () => {
        setSets([...sets, { exercise: "", reps: 0, weight: 0 }])
    }

    const handleChange = (index, key, value) => {
        setSets(prevState => {
            const updatedSets = [...prevState]
            updatedSets[index][key] = value
            return updatedSets
        })
    }

    return (
        <div className="main-container">
            <h4 className="sub-title">Sets in workout</h4>
            <button className="new-workoutbtn" onClick={handleAddSet}>Add set</button>
            <form>
                {sets.map((set, index) => (
                    <div key={index} className ="exercise-input-div">
                        <label htmlFor={`exercise-${index}`}>Exercise</label>
                        <input 
                            type="text"
                            id={`exercise-${index}`}
                            value={set.exercise}
                            onChange={e => handleChange(index, "exercise", e.target.value)}
                        />
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
                    </div>
                ))}
            </form>
            <button className="new-workoutbtn">Save workout</button>
        </div>
    )
}

export default WorkoutForm