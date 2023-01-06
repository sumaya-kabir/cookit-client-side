import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, signInWithPopup, sendPasswordResetEmail} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(user)
    
    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    };

    const passwordReset = (email) => {
        return sendPasswordResetEmail(auth, email)
    };

    

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            
            // email verification 

            // if(currentUser === null || currentUser.emailVerified){
            //     setUser(currentUser);
            // }
            setUser(currentUser);
        
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])
    

    const authInfo= {user, loading, setLoading, providerLogin, createUser, signIn, logOut, verifyEmail, passwordReset};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;