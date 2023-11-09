import WorkoutInfo from "../components/WorkoutInfo"
import Header from "../components/Header"

function WorkoutPage() {
    return (
        <div className="container">
            <Header />
            <main>
                <WorkoutInfo />
            </main>
        </div>
    )
}

export default WorkoutPage