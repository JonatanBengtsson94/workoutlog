import Protect from "../components/Protect"
import WorkoutInfo from "../components/WorkoutInfo"
import Header from "../components/Header"

function WorkoutPage() {
    return (
        <Protect>
            <div className="container">
                <Header />
                <main>
                    <WorkoutInfo />
                </main>
            </div>
        </Protect>
    )
}

export default WorkoutPage