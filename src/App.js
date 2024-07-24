import React, { useState } from 'react';
import "./App.css"
import { auth } from "./components/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import NavBar from "./components/NavBar";
import ChatPage from './pages/ChatPage';
import Welcome from './components/Welcome';
const App = () => {
  const [user] = useAuthState(auth);

  return (
   <div className = "App">
    <NavBar />
    {!user ? <Welcome /> : <ChatPage />}
   </div>
  );
};

export default App;
