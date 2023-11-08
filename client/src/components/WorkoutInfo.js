import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

function WorkoutInfo() {

    const { id } = useParams()
    const [workoutInfo, setWorkoutInfo] = useState()

    const getWorkoutInfo = async () => {
        try {
            const response = await fetch(`http://localhost:4000/api/v1/sets/${id}`)
            const jsondata = await response.json()
            console.log(jsondata)
            setWorkoutInfo(jsondata)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getWorkoutInfo()
    }, [])

    return (
        <div>
             <table>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                    </tr>
                </tbody>
                </table> 
        </div>
    )
}

export default WorkoutInfo