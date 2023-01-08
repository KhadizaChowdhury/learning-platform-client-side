import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, {  createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const verifyEmail = () =>{
        return sendEmailVerification(auth.currentUser)
    }

    const googleSignIn = (provider) => {
        // setLoading(true);
        return signInWithPopup(auth, provider)
    }
    // const fbSignIn = (facebookProvider) => {
    //     setLoading(true);
    //     return signInWithPopup(auth, facebookProvider)
    // }
    const gitSignIn = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false);
            setUser(currentUser);
            // console.log(currentUser)
        });

        return () => {
            unsubscribe();
        }
    }, [])

    const updateUserProfile = (profile) => {
       return updateProfile(auth.currentUser, profile)
    }

    const authInfo = {
        user,
        loading,
        createUser,
        verifyEmail,
        updateUserProfile,
        googleSignIn,
        // fbSignIn,
        gitSignIn,
        signIn,
        logOut };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;