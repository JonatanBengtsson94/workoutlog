import WorkoutInfo from "../components/WorkoutInfo"
import Header from "../components/Header"

function WorkoutPage() {
    return (
        <div className="container">
            <Header />
            <h1>Workout</h1>
            <WorkoutInfo />
        </div>
    )
}

export default WorkoutPage