import Protect from "../components/Protect"
import Header from "../components/Header"
import WorkoutsList from "../components/WorkoutsList"

function Home() {
    return (
        <Protect>
            <div className="container">
                <Header />
                <main>
                    <WorkoutsList />
                </main>
            </div>
        </Protect>
    )
}

export default Home