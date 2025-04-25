import { GoogleAuthProvider, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updatePassword } from "firebase/auth"
import {auth } from "./firebase"
import { getAuth, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updatePassword, sendEmailVerification } from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
   const user = userCredential.user;
    console.log("User signed up successfully:", userCredential.user);
    return userCredential;
  } catch (error) {
    if (error instanceof AuthError && error.code === "auth/email-already-in-use") {
      console.log("Email is already in use. Please sign in instead.");
    } else {
      console.error("Error signing up:", error);
    }
    throw error;
  }
};

export const doSignInWithEmailAndPassword = async(email, password) => {
    
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        let token = await userCredential.user.getIdToken();
        localStorage.setItem('firebaseToken', token);
        console.log('Stored token:', localStorage.getItem('firebaseToken'));

        if (token) {
            token = await refreshToken();
            localStorage.setItem('firebaseToken', token);
          }
        return token;
    } catch (error) {
        console.error("error", error);
        throw error;
    }
};

export const doSignInWithGoogle = async() => {
    const provider = GoogleAuthProvider();
    const result = await doSignInWithPopup(auth, provider);
    return result;
};

export const doSignOut = () => {
    return auth.signOut();
}

export const doPasswordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
}

export const doPasswordChange = (password) => {
    return updatePassword(auth.updateCurrentUser, password);
}

export const doSendEmailVarification = () => {
    return sendEmailVerification(auth.currentUser, {
        url: `${window.location.origin}/home`,
    });
}
