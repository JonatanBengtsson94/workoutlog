import Header from "../components/Header"
import WorkoutForm from "../components/WorkoutForm"

function LogWorkoutPage() {
    return (
        <div className="container">
            <Header />
            <main>
                <WorkoutForm />
            </main>
        </div>
    )
}

export default LogWorkoutPage