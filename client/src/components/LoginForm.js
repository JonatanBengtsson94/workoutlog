import { useState } from "react"
import { useNavigate } from "react-router-dom"

function LoginForm() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const submitLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch("http://localhost:4000/login", {
                method: "POST",
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
                credentials: "include",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            if (response.ok) {
                const responseData = await response.json()
                console.log(responseData)

                if (responseData.authenticated === "true") {
                    navigate("/")
                }
            }
            
        } catch (err) {
            console.log(err)
        }
    }

    const handleChange = (value, id) => {
        if (id === "username") {
            setUsername(value)
        } else {
            setPassword(value)
        }
    }

    return (
        <div className="main-container">
            <form className="login-form">
                <label htmlFor={username}>Username</label>
                <input
                    type="text" 
                    id="username" 
                    value={username}
                    onChange={e => handleChange(e.target.value, e.target.id)}>
                </input>
                <label htmlFor={password}>Password</label>
                <input 
                    type="password" 
                    id="password" 
                    value={password}
                    onChange={e => handleChange(e.target.value, e.target.id)}>
                </input>
                <button className="confirm-btn" onClick={e => submitLogin(e)}>Log in</button>
            </form>
        </div>
    )
}

export default LoginForm