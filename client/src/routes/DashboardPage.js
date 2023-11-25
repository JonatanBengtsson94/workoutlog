import Header from "../components/Header"
import Protect from "../components/Protect"
import Dashboard from "../components/Dashboard"



function DashboardPage() {
    return (
        <Protect>
            <div className="container">
                <Header />
                <Dashboard />
            </div>
        </Protect>
    )
}

export default DashboardPage 
    

   