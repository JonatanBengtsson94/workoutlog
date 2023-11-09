import Header from "../components/Header"
import WorkoutsList from "../components/WorkoutsList"

function Home() {
    return (
        <div className="container">
            <Header />
            <main>
                <WorkoutsList />
            </main>
        </div>
    )
}

export default Home