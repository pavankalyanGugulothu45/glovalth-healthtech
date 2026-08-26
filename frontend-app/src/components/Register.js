
import React, { useState } from "react";
import { apiPost } from "./api";
import "./Auth.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await apiPost("/register/", {
        username: email,
        password: password,
      });
      setMessage("✅ Account created successfully! You can login now.");
      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setMessage("❌ Registration failed. User may already exist.");
    }
  };

  return (
    <div className="auth-card">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Enter Full Name" value={name} onChange={(e)=>setName(e.target.value)} required />
        <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        <input type="password" placeholder="Create Password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
        <button type="submit">Register</button>
      </form>
      {message && <p style={{ textAlign: "center", marginTop: "10px", color: "white" }}>{message}</p>}
    </div>
  );
}

export default Register;

