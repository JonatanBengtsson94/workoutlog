import Header from "../components/Header"
import LoginForm from "../components/LoginForm"

function Login() {
    return (
        <div className="container">
            <Header />
            <main>
                <LoginForm />
            </main>
        </div>
    )
}

export default Login