import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";
export const AuthContext=createContext(null)
const auth=getAuth(app)
const googleProvider=new GoogleAuthProvider()
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const axiosPublic=useAxiosPublic()

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleLogIn=()=>{
   
        return signInWithPopup(auth,googleProvider);
    }
    const logOut=()=>{
        return signOut(auth).then(()=>setUser(null));
    }
    const updateUserProfile = async (name, photoURL) => {
        setLoading(true);
        try {
            await updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photoURL,
            });
            // Fetch the updated user info
            const updatedUser = auth.currentUser;
            setUser({ ...updatedUser });
        } catch (error) {
            console.error("Error updating profile:", error);
        } finally {
            setLoading(false);
        }
    };

   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            setUser(currentUser);
            const userInfo = { email: currentUser.email };
            axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    if (res.data.token) {
                        localStorage.setItem('access-token', res.data.token);
                        setLoading(false);
                    }
                });
        } else {
            // Remove token
            localStorage.removeItem('access-token');
            setLoading(false);
        }
    });

    return () => {
        unsubscribe();
    };
}, [axiosPublic]);

    const authInfo={user,loading,createUser,signIn,googleLogIn,logOut,updateUserProfile}
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;