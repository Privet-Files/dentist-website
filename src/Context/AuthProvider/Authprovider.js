import React, { createContext, useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile ,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const Authprovider = ({ children }) => {
  const [user, setuser] = useState({});
  const [loader, setloader] = useState(true);

  const signup = (email, password) => {
    setloader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setloader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setloader(true)
    return signOut(auth);
  };

  const updateUser = (userInfo) =>{
    return updateProfile(auth.currentUser, userInfo)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (curruentuser) => {
      setuser(curruentuser);
      setloader(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = { signup, login, user, logout ,updateUser,loader};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;
