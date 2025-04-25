import { createContext,useContext,useEffect,useState } from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth'
import {auth,db} from "../firebase.js"
import {setDoc,doc} from "firebase/firestore"


const AuthContext = createContext();

export function AuthProvider ({children}){
    const [user,setUser]= useState({})

    function signUp(email,password){
         return createUserWithEmailAndPassword(auth,email,password) 
    }

    function logIn (email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }

    function logOut(){
        signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe();
        }
    })
    return (
        <AuthContext.Provider value={{signUp,logIn,logOut,user}}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth (){
    return useContext(AuthContext)
}
