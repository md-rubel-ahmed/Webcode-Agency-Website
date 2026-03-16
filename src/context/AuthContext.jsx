import {useContext, createContext, useState, useEffect, } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup,  onAuthStateChanged, signOut  } from "firebase/auth";
import app from '../firebass/firebase.config';
import { IoSettingsOutline } from 'react-icons/io5';

const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
};


const AuthProvider = ({children}) => {
    const[user, setuser] = useState(null)
    const [loading, setLoading] = useState(true )  //todo make this true  

    const auth =  getAuth(app);


    // singup new user using email and password 
    const signupWithEmail = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

//  logon  user using email and password

const loginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}
//  google sign 
const GoogleLogin = () => {
    const googleprovider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleprovider)
}
// logout 
const logout = () => {
    return signOut(auth)
}



useEffect( () => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setuser(currentUser)
    setLoading(false)
});
return  unsubscribe
},[auth])


    const value = {user,
       signupWithEmail ,
      loginWithEmail,
      GoogleLogin,
      logout 
    }

return(
    <AuthContext.Provider value={value}>
    {!loading && children}
    </AuthContext.Provider>
)
}

export default AuthProvider;