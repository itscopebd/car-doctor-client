import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase/Firebase';
export const AuthContext = createContext()
const auth = getAuth(app);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut=()=>{
        return signOut(auth);
    }
   
    useEffect(() => {

        const unscrible = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            return unscrible()
        }
    }, [])
    
    const userInfo = {
        user,
        loading,
        createUser,
        logOut
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;