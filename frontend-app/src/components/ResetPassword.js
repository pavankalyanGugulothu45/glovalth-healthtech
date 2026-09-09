import { useState } from "react";
import "./Login.css";
import { apiPost } from "../api";

function ResetPassword({ onBack }) {
  const [staffId, setStaffId] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);


  // =====================================================
  // STEP 1 — SEND VERIFICATION CODE
  // =====================================================

  const handleSendCode = async (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    try {
      console.log("PASSWORD RESET CODE REQUEST:", {
        username: staffId,
      });

      const response = await apiPost(
        "/accounts/request-password-reset/",
        {
          username: staffId,
        }
      );

      console.log(
        "PASSWORD RESET CODE RESPONSE:",
        response
      );

      setMessage(
        "✅ Verification code sent to your registered email."
      );

      setStep(2);

    } catch (err) {
      console.error(
        "PASSWORD RESET CODE ERROR:",
        err
      );

      setMessage(
        err?.message ||
        "❌ Staff ID not found or unable to send verification code."
      );

    } finally {
      setLoading(false);
    }
  };


  // =====================================================
  // STEP 2 — VERIFY CODE AND RESET PASSWORD
  // =====================================================

  const handleResetPassword = async (e) => {
    e.preventDefault();

    setMessage("");

    if (verificationCode.length !== 6) {
      setMessage(
        "❌ Please enter the 6-digit verification code."
      );
      return;
    }

    if (newPassword.length < 8) {
      setMessage(
        "❌ Password must be at least 8 characters."
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage(
        "❌ Passwords do not match."
      );
      return;
    }

    setLoading(true);

    try {
      console.log(
        "VERIFY PASSWORD RESET REQUEST:",
        {
          username: staffId,
        }
      );

      const response = await apiPost(
        "/accounts/verify-password-reset/",
        {
          username: staffId,
          verification_code: verificationCode,
          new_password: newPassword,
        }
      );

      console.log(
        "PASSWORD RESET RESPONSE:",
        response
      );

      setMessage(
        "✅ Password reset successful! Returning to login..."
      );

      setStaffId("");
      setVerificationCode("");
      setNewPassword("");
      setConfirmPassword("");

      setTimeout(() => {
        onBack();
      }, 1800);

    } catch (err) {
      console.error(
        "PASSWORD RESET ERROR:",
        err
      );

      setMessage(
        err?.message ||
        "❌ Invalid verification code or server error."
      );

    } finally {
      setLoading(false);
    }
  };


  // =====================================================
  // PAGE
  // =====================================================

  return (
    <div className="login-page">

      <div className="login-card">

        <h2>Reset Password</h2>

        <p className="login-subtitle">
          {step === 1
            ? "Enter your Staff ID to receive a verification code"
            : "Enter the verification code sent to your email"}
        </p>


        {/* =================================================
            STEP 1
        ================================================= */}

        {step === 1 && (
          <form onSubmit={handleSendCode}>

            <label>Staff ID</label>

            <input
              type="text"
              placeholder="Enter Staff ID"
              value={staffId}
              onChange={(e) =>
                setStaffId(e.target.value.toUpperCase())
              }
              required
            />

            <button
              type="submit"
              disabled={loading}
            >
              {loading
                ? "Sending..."
                : "Send Verification Code"}
            </button>

          </form>
        )}


        {/* =================================================
            STEP 2
        ================================================= */}

        {step === 2 && (
          <form onSubmit={handleResetPassword}>

            <label>Staff ID</label>

            <input
              type="text"
              value={staffId}
              readOnly
            />


            <label>Verification Code</label>

            <input
              type="text"
              placeholder="Enter 6-digit code"
              value={verificationCode}
              onChange={(e) =>
                setVerificationCode(
                  e.target.value.replace(/\D/g, "").slice(0, 6)
                )
              }
              inputMode="numeric"
              maxLength="6"
              required
            />


            <label>New Password</label>

            <input
              type="password"
              placeholder="Enter New Password"
              value={newPassword}
              onChange={(e) =>
                setNewPassword(e.target.value)
              }
              minLength="8"
              required
            />


            <label>Confirm Password</label>

            <input
              type="password"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
              minLength="8"
              required
            />


            <button
              type="submit"
              disabled={loading}
            >
              {loading
                ? "Resetting..."
                : "Reset Password"}
            </button>


            <button
              type="button"
              className="forgot-link"
              onClick={() => {
                setStep(1);
                setVerificationCode("");
                setMessage("");
              }}
            >
              Back to Staff ID
            </button>

          </form>
        )}


        {/* =================================================
            MESSAGE
        ================================================= */}

        {message && (
          <p
            style={{
              textAlign: "center",
              marginTop: "15px",
              fontWeight: "600",
              lineHeight: "1.5",
              color: message.startsWith("✅")
                ? "#4FAF53"
                : "#ff6b6b",
            }}
          >
            {message}
          </p>
        )}


        {/* =================================================
            BACK TO LOGIN
        ================================================= */}

        <button
          type="button"
          className="forgot-link"
          onClick={onBack}
        >
          Back to Login
        </button>

      </div>

    </div>
  );
}

export default ResetPassword;