
import { getAuth, createUserWithEmailAndPassword, signOut as firebaseSignOut, signInWithEmailAndPassword } from "firebase/auth"
import { db } from './firebase'
import { collection, getDocs } from 'firebase/firestore'

const auth = getAuth()
const usersCollectionRef = collection(db, 'users')

export const createUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password)
        .then(res => res.user)
        .catch(err => err)
}

export const signIn = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password)
        .then(res => {
            console.log(res)
            return res.user
        })
        .catch(err => console.log(err))
}

export const signOut = async () => {
    firebaseSignOut(auth)
}
