import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./routes/Home"
import WorkoutPage from "./routes/WorkoutPage"
import AboutPage from "./routes/AboutPage"
import "./styles.css"

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="workout/:id" element={<WorkoutPage />}/>
                    <Route path="/about" element={<AboutPage />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App