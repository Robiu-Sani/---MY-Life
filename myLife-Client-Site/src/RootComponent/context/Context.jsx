import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  FacebookAuthProvider,
  onAuthStateChanged,
  signOut,
  updateProfile,
  TwitterAuthProvider,
} from "firebase/auth";

export const AuthContext = createContext();
export default function Context({ children }) {
  const GoogleProvidor = new GoogleAuthProvider();
  const GithubProvidor = new GithubAuthProvider();
  const twitterProvidor = new TwitterAuthProvider();
  const FacebookProvider = new FacebookAuthProvider();
  const [loader, setLoader] = useState(true);
  const [LogedUser, setLogedUser] = useState();

  const createUserByEmail = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const LoginUserByEmail = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const LoginWithGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, GoogleProvidor);
  };

  const LoginWithTwitter = () => {
    setLoader(true);
    return signInWithPopup(auth, twitterProvidor);
  };

  const LoginWithGitHub = () => {
    setLoader(true);
    return signInWithPopup(auth, GithubProvidor);
  };

  const LoginWithFaceBook = () => {
    setLoader(true);
    return signInWithPopup(auth, FacebookProvider);
  };

  const LogOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  const updateUserProfile = (data) => {
    setLoader(true);
    return updateProfile(auth.currentUser, data);
  };

  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (currentUser) => {
      setLogedUser(currentUser);
      setLoader(false);
    });

    return () => {
      unsubscriber();
    };
  }, []);

  const ContextData = {
    createUserByEmail,
    updateUserProfile,
    LoginUserByEmail,
    LoginWithGoogle,
    LoginWithGitHub,
    LoginWithTwitter,
    LoginWithFaceBook,
    LogOut,
    loader,
    LogedUser,
  };
  return (
    <AuthContext.Provider value={ContextData}>{children}</AuthContext.Provider>
  );
}

Context.propTypes = {
  children: PropTypes.object,
};
