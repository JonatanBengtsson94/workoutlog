import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import baseURL from "../apis/workoutlog"

function Protect(props) {
    const navigate = useNavigate()
    const [isAuthenticated, setAuthenticated] = useState(false)

    const authenticate = async () => {
        try {
            const response = await fetch(`${baseURL}/login`, {
                credentials: "include"
            })
            const jsondata = await response.json()
            if (jsondata.authenticated === "true") {
                setAuthenticated(true)
            } else {
                navigate("/login")
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        authenticate()
      }, [])

    return isAuthenticated ? <>{props.children}</> : null
}

export default Protect