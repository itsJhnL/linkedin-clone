import React from "react";
import "../styles/Login.css";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import LoginOption from "./LoginOption";
// import facebook from "./images/facebook.png";
// import x from "./images/X.jpg";
// import google from "./images/google.png";

function Login() {
  return (
    <div className="container">
      <div className="welcomeText">
        <h1>Connect with friends and the worlds around you on the multiverse.</h1>
      </div>
      <div className="login">
        <form>
          {/* <div className="headerLogin">
          <p>Login</p>
        </div> */}
          <div className="username">
            <label htmlFor="">Username</label>
            <LoginOption Icon={PersonIcon} />
            <input type="text" placeholder="Type your username" />
          </div>
          <div className="password">
            <label htmlFor="">Password</label>
            <LoginOption Icon={LockIcon} />
            <input type="password" placeholder="Type your password" />
          </div>
          <div className="forgotPassword">
            <label htmlFor="">
              <a href="">Forgot Password?</a>
            </label>
          </div>

          <div className="loginButton">
            <input type="button" value="LOGIN" />
          </div>

          <div className="signup">
            <label htmlFor="">
              Don't have an account? <a href="">Signup</a>
            </label>
          </div>
          {/* Skipped, not necessarily */}
          {/* <div className="loginSocial">
          <p className="division">Or</p>
        </div>
        <div className="socialMedia">
          <img src={facebook} alt="" />
          <img src={x} alt="" />
          <img src={google} alt="" />
        </div> */}
        </form>
      </div>
    </div>
  );
}

export default Login;
