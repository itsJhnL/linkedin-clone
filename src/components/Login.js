import React from "react";
import "../styles/LoginSignup.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container">
      <div className="loginForm">
        <form action="">
          <div className="loginHeader">
            <p>Login</p>
          </div>
          <div className="loginInput">
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </div>
          <div className="createAccount">
            <p>
              Don't have an account? <Link to="/Signup">Singup</Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
