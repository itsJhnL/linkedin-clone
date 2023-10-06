import React from "react";
import "../styles/LoginSignup.css";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

function Singup() {
  return (
    <div className="container">
      <div className="signupForm">
        <form action="">
          <div className="signupHeader">
            <p>Create an Account</p>
          </div>
          <div className="signupInput">
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Singup</button>
          </div>
          <div className="createAccount">
            <p>
              Already have an account? <Link to="/Login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Singup;
