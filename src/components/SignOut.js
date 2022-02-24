import { useContext } from "react"
import { Context } from "../App"
import { signOut } from "../firebase-api"


const SignOut = () => {

    const { setUser } = useContext(Context)

    return (
        <button onClick={() => {
            signOut()
            setUser()
        }}>Sign out</button>
    )
}

export default SignOut