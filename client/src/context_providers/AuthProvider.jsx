import { useEffect, useState } from "react";
import { AuthContext } from "./Contexts";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/__config__";
import axios from "axios";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const signUpWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => signOut(auth)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log('User state changed from authstate', currentUser);

            //send request to backend to get jwt token
            if (currentUser) {
                const userData = { email: currentUser.email }
                axios.post('http://localhost:3000/jwt', userData, { withCredentials: true })
                    .then(response => {
                        const data = response.data;
                        console.log(data)
                    })
            }
            //send request to backend to clear jwt token
            else {
                axios.post('http://localhost:3000/logout', {}, { withCredentials: true })
                    .then(response => {
                        const data = response.data;
                        console.log(data)
                    })
            }
        })
        return () => unsubscribe()
    }, [])


    const info = {
        user,
        setUser,
        loading,
        error,
        setLoading,
        setError,
        signUpWithEmail,
        loginWithEmail,
        logout
    }
    return < AuthContext.Provider value={info}>{children}</AuthContext.Provider >
};

export default AuthProvider;