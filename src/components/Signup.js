import React, { useState } from "react";
import "../styles/LoginSignup.css";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer, toast } from "react-toastify";

function Singup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();

  const signUp = async (e) => {
    e.preventDefault();

    if (!name) {
      return toast.error("Please Enter Your Full Name")
    }
    else if (!email) {
      return toast.error("Please Enter Your Email")
    }
    else if (!password) {
      return toast.error("Please Enter Your Password")
    }
    else if (password !== confirmPass) {
      return toast.error("Password do not match.")
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user;
      console.log(user);
      toast.success("Account Successfully Created.")
      navigate("/") //Navigate to login page after successfully create account
    } catch (error) {
      toast.error(error + "")
    }

  };

  return (
    <div className="container">
      <div className="signupForm">
        <form onSubmit={signUp}>
          <div className="signupHeader">
            <p>Create an Account</p>
          </div>
          <div className="signupInput">
            <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="off" />
            <input type="password" placeholder="Confirm Password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} required autoComplete="off" />
            <button onClick={signUp} type="submit">Sign Up</button>
          </div>
          <div className="createAccount">
            <p>
              Already have an account? <Link to="/">Log In</Link>
            </p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Singup;
