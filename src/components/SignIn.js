import { useContext, useState } from "react"
import { Context } from "../App"
import { signIn } from "../firebase-api"
import { StyledForm, StyledLabel } from "../style"

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(Context)

    return (
        <StyledForm onSubmit={async e => {
            e.preventDefault()
            setUser(await signIn(email, password))
        }}>
            <StyledLabel>
                Email:
                <input type="email" name="email" value={email} onInput={e => setEmail(e.target.value)} required />
            </StyledLabel>
            <StyledLabel>
                Password:
                <input type="password" name="password" value={password} onInput={e => setPassword(e.target.value)} required />
            </StyledLabel>
            <button>Sign in</button>
        </StyledForm>
    )
}

export default SignIn