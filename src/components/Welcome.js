import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";


const Welcome = () => {
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };
    return (
        <main className = "Welcome">
            <h2> Chat Application Log In</h2>
        <img src="/logo512.png" alt="ReactJs logo" width={100} height={100} />
        <p>Sign in to use the app!</p>
        <button className = "sign-in">
            <img
            onClick = {googleSignIn}
            src = {GoogleSignin}
            alt = "Sign in with Google"
            type = "button"
            />
        </button>
        </main>
    )
}

export default Welcome