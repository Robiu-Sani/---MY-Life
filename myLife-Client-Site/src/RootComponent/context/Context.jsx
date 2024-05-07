import { createContext } from "react";
import auth from "../Firebase/Firebase.config";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

// const a = au
export const AuthContext = createContext();
export default function Context({ children }) {
  const GoogleProvidor = new GoogleAuthProvider();
  const GithubProvidor = new GithubAuthProvider();
  const FacebookProvider = new FacebookAuthProvider();
  const createUserByEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const LoginUserByEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const LoginWithGoogle = () => {
    return signInWithPopup(auth, GoogleProvidor);
  };

  const LoginWithGitHub = () => {
    return signInWithPopup(auth, GithubProvidor);
  };

  const LoginWithFaceBook = () => {
    return signInWithPopup(auth, FacebookProvider);
  };

  const ContextData = {
    createUserByEmail,
    LoginUserByEmail,
    LoginWithGoogle,
    LoginWithGitHub,
    LoginWithFaceBook,
  };
  return (
    <AuthContext.Provider value={ContextData}>{children}</AuthContext.Provider>
  );
}

Context.propTypes = {
  children: PropTypes.object,
};
