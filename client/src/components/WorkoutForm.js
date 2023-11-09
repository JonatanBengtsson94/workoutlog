import { useState } from "react"

function WorkoutForm() {

    const [sets, setSets] = useState([{ exercise: "", reps: 0, weight: 0 }])

    const handleAddSet = () => {
        setSets([...sets, { exercise: "", reps: 0, weight: 0 }])
    }

    const handleChange = (index, key, value) => {
        const updatedSets = [...sets]
        updatedSets[index][key] = value
        setSets(updatedSets)
    }

    return (
        <div className="main-container">
            <form>
                {sets.map((set, index) => (
                    <div key={index}>
                        <input 
                            type="text"
                            value={set.exercise}
                            onChange={e => handleChange(index, "exercise", e.target.value)}
                        />
                        <input
                            type="text"
                            value={set.reps}
                            onChange={e => handleChange(index, "reps", e.target.value)}
                        />
                        <input
                            type="text"
                            value={set.weight}
                            onChange={e => handleChange(index, "weight", e.target.value)}
                        />
                    </div>
                ))}
            </form>
            <button onClick={handleAddSet}>Add set</button>
        </div>
    )
}

export default WorkoutForm