import React, { createContext, useEffect, useState} from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import app from './firebase/firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null);
    const[loading,setLoading] = useState(true);
    
    const Googleprovider = new GoogleAuthProvider();
    // const GithubProvider = new GithubAuthProvider()

    const createUser = (email,password)=>{
        setLoading(true);
        
        return createUserWithEmailAndPassword(auth,email,password,)
    }
    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password,)
    }

    const logOut = () =>{
        return signOut(auth)
        setLoading(true)
    }
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,loggedUser =>{
            
            setUser(loggedUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    const authInfo ={
        auth,
        user,
        loading,
        Googleprovider,
        createUser,
        signIn,
        logOut,
        


    
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;