import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Chat from "./components/Chat";
import Login from "./components/Login";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="backgroundPic">
      {/* {!user ? (
        <div className="loginPhase">
          <Login />
        </div>
      ) : ( */}
      <Chat />
        <div className="App">
          <Header />
          <div className="app__body">
            {/* <Sidebar />
            <Feed /> */}
            {/* Widgets */}
            {/* <Chat /> */}
          </div>
        </div>
      {/* )} */}
    </div>
  );
}

export default App;
