import { useEffect, useState } from "react";
import { AuthContext } from "./Contexts";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/__config__";

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

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log('User state changed from authstate', currentUser);
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
        loginWithEmail
    }
    return < AuthContext.Provider value={info}>{children}</AuthContext.Provider >
};

export default AuthProvider;