import React from "react";
import { auth } from "../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const NavBar = () =>{
    const [user] = useAuthState(auth);

 
  
    const signOut = () => {
      auth.signOut();
    };

    return (
        <nav className = "nav-bar">
            <h1 className ="app-title">Chat Application</h1>
            {user && (
      <button onClick={signOut} className="sign-out" type="button">
        Sign Out
      </button>
    )}
      </nav>
    )
}

export default NavBar