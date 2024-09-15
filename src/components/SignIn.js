import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    navigate("/");
  };

  return (
    <div className="signin">
      <Link to="/">
        <img
          className="signin__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
        />
      </Link>

      <div className="signin__container">
        <h1>Sign-In</h1>
        <form onSubmit={handleSubmit}>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="signin__button">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <button className="signin__registerButton">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default SignIn;
