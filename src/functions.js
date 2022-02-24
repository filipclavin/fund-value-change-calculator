import { createUser } from "./firebase-api"

export const signUp = async (email, password, confirmPassword) => {
    try {
        if (password === confirmPassword) {
            return createUser(email, password)
        } else {
            throw new Error('Passwords don\'t match')
        }

    } catch (err) {
        console.log(err)
        return
    }
}