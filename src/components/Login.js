import React from "react";
import "../styles/Login.css";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import LoginOption from "./LoginOption";
import { auth } from "./Firebase";
import Signup from "./Signup";
// import facebook from "./images/facebook.png";
// import x from "./images/X.jpg";
// import google from "./images/google.png";

function Login() {

  //to another page
  const signUp = (e) => {
    e.preventDefault();
    <Signup />
  }

  const loginToApp = (e) => {
    // e.preventDefault();
    // auth
  };

  return (
    <div className="container">
      <div className="welcomeText">
        <h1>
          Connect with friends and the worlds around you on the multiverse.
        </h1>
      </div>
      <div className="login">
        <form>
          {/* <div className="headerLogin">
          <p>Login</p>
        </div> */}
          <div className="username">
            <label htmlFor="">Username</label>
            <LoginOption Icon={PersonIcon} />
            <input
              type="text"
              placeholder="Type your username"
              minlength="5"
              maxlength="20"
              required
            />
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
            <button type="submit" onClick={loginToApp}>
              LOGIN
            </button>
          </div>

          <div className="signup">
            <label htmlFor="">
              Don't have an account? <a href="./Signup" /* onClick={signUp} */>Signup</a>
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
