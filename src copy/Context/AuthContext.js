import React, { useState,useContext,createContext,useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  signInWithPopup,
  updateProfile
} from "firebase/auth";
import { firebaseAuth,googleProvider } from "../config/firebaseInit";

//CREATING A CONTEXT API


//1. Creating context
const AuthContext=createContext();

//2. create context provider
export const AuthProvider=(props)=>{
    const [currentUser,setCurrentUser]=useState();
    const [loading,setLoading]=useState(false);

//website's registration and login
    const registerWithSiteEmailPass=async(username,email,password)=>{
        const userCreds= await createUserWithEmailAndPassword(firebaseAuth,email,password);
        const user=userCreds.user;
        return await updateProfile(user,{displayName:username});
    }

    const loginWithSiteEmailPass=async(email,password)=>{
        return await signInWithEmailAndPassword(firebaseAuth,email,password);
    };

    //google registration/login
    const signinWithGoogle=async()=>{
        return await signInWithPopup(firebaseAuth,googleProvider);
    }

    //reset password with email
    const resetPwd=async(email)=>{
        const auth=getAuth();
        return await sendPasswordResetEmail(auth,email);
    }

    //logout user
    const logout=()=>{
        return signOut(firebaseAuth);
    }

    useEffect(()=>{
        setLoading(true);
        const unsubscribe=firebaseAuth.onAuthStateChanged(user=>{
            setCurrentUser(user);
            setLoading(false);
        })
        return unsubscribe;
    },[]);

    return (
        //providing the context
        <AuthContext.Provider value={{
            registerWithSiteEmailPass,
            loginWithSiteEmailPass,
            logout,
            resetPwd,
            currentUser,
            signinWithGoogle
        }}>
            {!loading && props.children}
        </AuthContext.Provider>
    )
}


//3. custom hook to consume the context

export const useAuth=()=>useContext(AuthContext);