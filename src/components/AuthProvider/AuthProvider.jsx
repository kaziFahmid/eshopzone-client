import React, { createContext, useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup } from "firebase/auth";


import app from '../../firebase.config';

const auth = getAuth(app)

export const AuthContext=createContext(null)

export default function AuthProvider({children}) {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{

        return signOut(auth)
    }
   

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
          
           setLoading(false)
        })

        return ()=>{
            unsubscribe()
        }
        
    },[])
    const userInfo={
        user,
        createUser,
        signInUser,
        logOut,
        loading,

    
    }
  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  )
}
