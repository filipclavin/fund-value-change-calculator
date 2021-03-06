import { initializeApp } from "firebase/app"
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAngsHe2wSYSZ_c8e6tAMTquC8NfB67bu0",
    authDomain: "fund-value-change-calculator.firebaseapp.com",
    projectId: "fund-value-change-calculator",
    storageBucket: "fund-value-change-calculator.appspot.com",
    messagingSenderId: "424536751336",
    appId: "1:424536751336:web:f67b03b3e56ead7a069d5d",
    measurementId: "G-YXBEDPE6E4"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)