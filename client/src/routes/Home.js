import Header from "../components/Header"
import WorkoutsList from "../components/WorkoutsList"

function Home() {
    return (
        <div className="container">
            <Header />
            <WorkoutsList />
        </div>
    )
}

export default Home