import { useState } from "react";
import "./Login.css";
import logo from "../assets/logo.png";   // ✅ added import

function Login({ onLogin, onForgot, onCreateStaff }) {
  const [staffId, setStaffId] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onLogin(staffId, password);
  };

  return (
    <div className="login-page">
      <div className="login-card">

        {/* ✅ LOGO FROM ASSETS FOLDER */}
        <img 
          src={logo} 
          alt="Glovalth Logo" 
          className="login-logo" 
        />

        <h2>Login</h2>
        <p className="login-subtitle">
          Secure access to your health dashboard
        </p>

        <form onSubmit={submit}>
          <label>Staff ID</label>
          <input
            value={staffId}
            onChange={(e) => setStaffId(e.target.value)}
            placeholder="Enter Staff ID"
            required
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            required
          />

          <button type="submit">Login</button>
        </form>

        <div className="login-links">
          <button type="button" onClick={onForgot}>
            Forgot Password?
          </button>
          <button type="button" onClick={onCreateStaff}>
            Create Staff ID
          </button>
        </div>

      </div>
    </div>
  );
}

export default Login;
