import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./routes/Home"
import Login from "./routes/Login"
import WorkoutPage from "./routes/WorkoutPage"
import AboutPage from "./routes/AboutPage"
import LogWorkoutPage from "./routes/LogWorkoutPage"

import "./styles.css"
import DashboardPage from "./routes/DashboardPage"

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="workout/:id" element={<WorkoutPage />}/>
                    <Route path="/about" element={<AboutPage />}/>
                    <Route path="/logworkout" element={<LogWorkoutPage />}/>
                    <Route path="/dashboard" element={<DashboardPage />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App