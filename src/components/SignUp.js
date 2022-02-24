import { useContext, useState } from "react"
import { Context } from "../App"
import { signUp } from "../functions"
import { StyledForm, StyledLabel } from "../style"

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const { setUser } = useContext(Context)

    return (
        <StyledForm onSubmit={async e => {
            e.preventDefault()
            setUser(await signUp(email, password, confirmPassword))
        }}>
            <StyledLabel>
                Email:
                <input type="email" name="email" value={email} onInput={e => setEmail(e.target.value)} required />
            </StyledLabel>
            <StyledLabel>
                Password:
                <input type="password" name="password" value={password} onInput={e => setPassword(e.target.value)} required />
            </StyledLabel>
            <StyledLabel>
                Confirm password:
                <input type="password" name="confirm-password" value={confirmPassword} onInput={e => setConfirmPassword(e.target.value)} required />
            </StyledLabel>
            <button>Sign up</button>
        </StyledForm>
    )
}

export default SignUp