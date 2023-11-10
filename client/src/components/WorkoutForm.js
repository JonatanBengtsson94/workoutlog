import { useState } from "react"

function WorkoutForm() {

    const [sets, setSets] = useState([{ exercise: "", reps: "", weight: "" }])

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

    return (
        <div className="main-container">
            <button className="confirm-btn" onClick={handleAddSet}>Add set</button>
            <h4 className="sub-title">Sets in workout</h4>
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
                        <button className="cancel-btn" onClick={ e => handleRemoveSet(e, index)}>X</button>
                    </div>
                ))}
                <button className="confirm-btn">Save workout</button>
            </form>
        </div>
    )
}

export default WorkoutForm