import { useState } from "react"

function ExerciseForm({ exercise }) {

    
    const [sets, setSets] = useState([{ reps: "", weight: "" }])

    const addSet = (e) => {
        e.preventDefault()
        setSets([...sets, { reps: "", weight: "" }])
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
            <h4 className="sub-title">{exercise.name}</h4>
            <div className="exercise-container">
                <h5 className="header">Reps</h5>
                <h5 className="header">Weight</h5>
                <h5 className="header"></h5>
                {sets.map((set, index) => (
                    <div key={index} className="set-input-div">
                        <input
                            type="text"
                            id="reps"
                            value={set.reps}
                            onChange={e => handleChange(index, "reps", e.target.value)}
                        />
                        <input
                            type="text"
                            id="weight"
                            value={set.weight}
                            onChange={e => handleChange(index, "weight", e.target.value)}
                        />
                        <button className="cancel-btn" onClick={e => handleRemoveSet(e, index)}>X</button>
                    </div>
                ))}
            </div>
            <button className="confirm-btn" onClick={(e) => addSet(e)}>Add set</button>
        </div>
    )
}

export default ExerciseForm
