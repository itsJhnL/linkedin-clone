import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
// import Chat from "./components/Chat";
import Login from "./components/Login";
import Singup from "./components/Singup";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="backgroundPic/*  */">
      {!user ? (
        <div className="loginPhase">
          <Routes>
            <Route exact path="/Login" element={<Login />}></Route>
            <Route exact path="/Signup" element={<Singup />}></Route>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
        </div>
      ) : (
        // <Chat />
        <div className="App">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            {/* Widgets */}
            {/* <Chat /> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
