import React, { useState } from "react";
import "../styles/LoginSignup.css";
import { Link } from "react-router-dom";
import { auth } from "./Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from "../features/userSlice";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      const user = userCredential.user;
      console.log(user);

      if (userCredential) {
        dispatch(
          login({
            email: userCredential.email,
            uid: userCredential.uid,
          })
        );
      } else {
        toast.error("No Record Found!")
        // console.log("Not yet logged-in") 3
      }

      /* navigate("/Home")
      toast.success("Successfully Logged in") */

    } catch (error) {
      toast.error("Wrong Email and Password")
    }
  }


  /* const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        alert(error);
      })
  } */


  return (
    <div className="container">
      <div className="loginForm">
        <form onSubmit={signIn}>
          <div className="loginHeader">
            <p>Log In</p>
          </div>
          <div className="loginInput">
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="off" />

            <button onClick={signIn} type="submit">Log In</button>
          </div>
          <div className="createAccount">
            <p>
              Don't have an account? <Link to="/Signup">Sign Up</Link>
            </p>
          </div>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}

export default Login;
