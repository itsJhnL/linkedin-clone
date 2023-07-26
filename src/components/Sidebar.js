import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={require("./images/header_background.jpg")} alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>JanggoDev</h2>
        <h4>JanggoDev@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewd you</p>
          <p className="sidebar__statNumber">1,044</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,234</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("gagaling")}
        {recentItem("din")}
        {recentItem("ako")}
        {recentItem("tiwala lang!")}
      </div>
    </div>
  );
}

export default Sidebar;
