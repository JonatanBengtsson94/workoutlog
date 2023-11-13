import Header from "../components/Header"

function Login() {
    return (
        <div className="container">
            <Header />
            <main>
                <form>
                    <input type="text"></input>
                    <input type="password"></input>
                </form>
            </main>
        </div>
    )
}

export default Login