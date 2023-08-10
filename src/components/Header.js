import React from "react";
import SearchIcon from "@mui/icons-material/Search";
// import LinkedIn from "./images/linkedin.png";
import "../styles/Header.css";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Me from "./images/ItsMe.jpg";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        {/* <img src={LinkedIn} alt="" /> */}

        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={PeopleIcon} title="My Network" />
        <HeaderOption Icon={WorkIcon} title="Jobs" />
        <HeaderOption Icon={MessageIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar={Me} title="Me" />
      </div>
    </div>
  );
}

export default Header;
