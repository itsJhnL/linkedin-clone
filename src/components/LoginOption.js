import { Avatar } from "@mui/material";
import React from "react";
import "../styles/Login.css";

function LoginOption({ avatar, Icon }) {
  return (
    <div className="loginOption">
      {Icon && <Icon className="loginIcon" />}
      {avatar && <Avatar className="loginIcon" src={avatar} />}
    </div>
  );
}

export default LoginOption;
