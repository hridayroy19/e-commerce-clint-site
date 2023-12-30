/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../PrivetFile/Firebase-config/firebase";

export const Authcontext = createContext()
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
const [ user , setUser]=useState(null)
const [ loading , setLoading]= useState(true)

// crate user
 const crateUser = (email , password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword( auth , email , password)
 }

useEffect(()=>{
 const xxyy = onAuthStateChanged( auth , currentUser =>{
    setUser(currentUser)
     console.log("current user ", currentUser);
     setLoading(false)
 });
 return ()=>{
    return xxyy();
 }

},[])


// google sigin
 const googleSingIn = ()=>{
    setLoading(true);
    return signInWithPopup( auth, provider)
 }



// sigin user 
const sigIn = (email , password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth , email , password);
}

// logout user
const logOut = () =>{
    return signOut(auth)
}







const authInfo = {
    user,
    loading,
    crateUser,
    sigIn,
    logOut,
    googleSingIn
    


}



    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;