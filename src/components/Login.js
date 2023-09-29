// Login.js

import React, { useState } from "react";
import { auth } from "./firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Successfully logged in
        const user = userCredential.user;
        console.log("Logged in user:", user);
      })
      .catch((error) => {
        // Handle login errors
        console.error("Login error:", error);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
