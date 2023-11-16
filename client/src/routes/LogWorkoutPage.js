import Protect from "../components/Protect"
import Header from "../components/Header"
import WorkoutForm from "../components/WorkoutForm"

function LogWorkoutPage() {
    return (
        <Protect>
            <div className="container">
                <Header />
                <main>
                    <WorkoutForm />
                </main>
            </div>
        </Protect>
    )
}

export default LogWorkoutPage