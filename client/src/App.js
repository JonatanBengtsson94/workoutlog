import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./routes/Home"
import WorkoutPage from "./routes/WorkoutPage"

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element= {<Home />}/>
                    <Route path="workout/:id" element= {<WorkoutPage />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App