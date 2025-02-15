import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import emailjs from "@emailjs/browser";
import Alert from "react-bootstrap/Alert";
import HeaderFour from "../common/header/HeaderFour";
import FooterOne from "../common/footer/FooterOne";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAABWVHcf0TTRvkcDpmhw9pAgFFRlgUteY",
  authDomain: "clif-864a1.firebaseapp.com",
  projectId: "clif-864a1",
  storageBucket: "clif-864a1.firebasestorage.app",
  messagingSenderId: "275052466574",
  appId: "1:275052466574:web:aa2752b7634990818b54df",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const baseURL = "http://localhost:5000"; // Backend API URL

// Result component to show after successful login/signup
const Result = () => {
  return (
    <Alert variant="success" className="success-msg">
      Login Successfully
    </Alert>
  );
};

const Login = () => {
  const form = useRef();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [result, showResult] = useState(false);

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const loginResult = await signInWithPopup(auth, provider);
      console.log("Google Login Success:", loginResult);

      const { email, displayName } = loginResult.user;
      const nameParts = displayName.split(" ");
      const firstName = nameParts[0];
      const lastName = nameParts.length > 1 ? nameParts[1] : "";

      // Send data to backend
      console.log("Sending Data to Backend:", { email, firstName, lastName });

      const response = await fetch(`${baseURL}/auth/google`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, lastName }),
      });

      // console.log("Backend Response Status:", response.status);
      const result = await response.json();
      // console.log("Backend Response Data:", result);

      if (!response.ok) throw new Error("Google login failed");
      localStorage.setItem("user", JSON.stringify(result));
      showResult(true);
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (err) {
      console.error("Google login error:", err.message);
      setError("Google login failed. Please try again.");
    }
  };

  // Handle manual email/password login
  const handleManualLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseURL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) throw new Error("Invalid scredentials");
      const result = await response.json();
      localStorage.setItem("user", JSON.stringify(result));
      showResult(true);
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (err) {
      setError(err.message);
    }
  };

  // Handle email sending (for forgot password or other purposes)
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_yj5dgzp",
  //       "template_hfduayo",
  //       form.current,
  //       "WLENsTkBytC0yvItS"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //   form.current.reset();
  //   showResult(true);
  // };

  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <>
      <main className="main-wrapper">
        <HeaderFour />
        <div className="section section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-6">
                <div className="contact-form-box shadow-box ">
                  <h3 className="title text-center">Login</h3>
                  <h5 className="text-center">
                    New here?
                    <Link to="/signup" style={{ color: "#6600CC" }}>
                      &nbsp; Sign Up
                    </Link>
                  </h5>
                  <div className="form-group">{result ? <Result /> : null}</div>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <form
                    ref={form}
                    onSubmit={handleManualLogin}
                    className="axil-contact-form">
                    <div className="form-group">
                      <label>Email address*</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="name@gmail.com"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Password*</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="******"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-group gap-2 flex">
                      <button
                        type="submit"
                        className="axil-btn btn-fill-primary btn-fluid btn-primary"
                        name="submit-btn">
                        Log In
                      </button>
                      <button
                        type="button"
                        onClick={handleGoogleSignIn}
                        className="axil-btn btn-fill-light btn-fluid btn-light"
                        style={{
                          height: "46px",
                          marginTop: "5px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}>
                        <img
                          src="https://www.svgrepo.com/show/452216/google.svg"
                          alt="Google"
                          className="mr-2"
                          style={{ height: "20px" }}
                        />
                        Sign In with Google
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterOne />
      </main>
    </>
  );
};

export default Login;
