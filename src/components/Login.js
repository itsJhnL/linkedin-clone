import React from "react";
import "../styles/Login.css";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import LoginOption from "./LoginOption";
// import { auth } from "./Firebase";
import google from "./images/google.png";

function Login() {
  //to another page
  /* const signUp = (e) => {
    e.preventDefault();
  };

  const loginToApp = (e) => {
    e.preventDefault();
    auth
  }; */

  return (
    <div className="container">
      <div className="welcomeText">
        <h1>
          Connect with friends and the worlds around you on the multiverse.
        </h1>
      </div>

      {/* LOGIN FORM */}
      <div className="loginForm">
        <form>
          <div className="headerLogin">
            <p>Login</p>
          </div>
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
            <button type="submit"/*  onClick={loginToApp} */>
              LOG IN
            </button>
          </div>

          <div className="signup">
            <label htmlFor="">
              Don't have an account? <a href="./Signup">Register</a>
            </label>
          </div>

         <div className="divisionText">
          <h2><span>Or</span></h2>
         </div>

          <div className="signWith">
            <div className="icon">
              <img src={google} alt="" />
            </div>
            <div className="iconText">
              <div className="text">
                <p>Login with Google</p>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* SIGNUP FORM */}
      <div className="signupForm">
        <form>
          <div className="headerSignup">
            <p>Signup</p>
          </div>
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

          <div className="signupButton">
            <button type="submit">Create Account</button>
          </div>

          <div className="signup">
            <label htmlFor="">
              Already have an account? <a href="">Login</a>
            </label>
          </div>
          {/* Skipped, not necessarily */}
          <div className="divisionText">
            <h2><span>Or</span></h2>
          </div>

          <div className="signWith">
            <div className="icon">
              <img src={google} alt="" />
            </div>
            <div className="iconText">
              <div className="text">
                <p>Continue with Google</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
