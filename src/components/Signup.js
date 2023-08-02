import React from "react";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import LoginOption from "./LoginOption";

function Signup() {
  return (
    <div className="container">
      <div className="signup">
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
          {/* <div className="forgotPassword">
            <label htmlFor="">
              <a href="">Forgot Password?</a>
            </label>
          </div> */}

          <div className="loginButton">
            <input type="button" value="SIGNUP" />
          </div>

          <div className="signup">
            <label htmlFor="">
              Already have an account? <a href="">Login</a>
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

export default Signup;
