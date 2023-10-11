import React from "react";
import "./App.css";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
// import Chat from "./components/Chat";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/Home";

function App() {

  const user = useSelector(selectUser);

  return (
    <div className="backgroundPic/*  */">
      {!user ? (
        <div className="loginPhase">
          <Routes>
            <Route exact path="/Signup" element={<Signup />}></Route>
            <Route exact path="/" element={<Login />}></Route>
          </Routes>
        </div>
      ) : (
        // <Chat />
        <>
          <LandingPage />
        </>
      )}
    </div>
  );
}

export default App;
