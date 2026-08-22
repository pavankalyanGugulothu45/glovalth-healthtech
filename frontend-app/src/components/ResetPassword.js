import { useState } from "react";
import "./Login.css";
import { apiPost } from "../api";

function ResetPassword({ onBack }) {
  const [staffId, setStaffId] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage("❌ Passwords do not match");
      return;
    }

    try {
      await apiPost("/reset-password/", {
        username: staffId,
        new_password: newPassword,
      });

      setMessage("✅ Password reset successful");
      setTimeout(onBack, 1500);
    } catch (err) {
      setMessage("❌ Staff ID not found or server error");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Reset Password</h2>
        <p className="login-subtitle">
          Create a new password for your account
        </p>

        <form onSubmit={handleReset}>
          <label>Staff ID</label>
          <input
            type="text"
            placeholder="Enter Staff ID"
            value={staffId}
            onChange={(e) => setStaffId(e.target.value)}
            required
          />

          <label>New Password</label>
          <input
            type="password"
            placeholder="Enter New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit">Reset Password</button>
        </form>

        {message && (
          <p style={{ textAlign: "center", marginTop: "10px" }}>{message}</p>
        )}

        <button className="forgot-link" onClick={onBack}>
          Back to Login
        </button>
      </div>
    </div>
  );
}

export default ResetPassword;
