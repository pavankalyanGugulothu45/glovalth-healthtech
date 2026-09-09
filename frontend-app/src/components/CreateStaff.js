import { useState } from "react";
import "./Login.css";
import { apiPost } from "../api";

function CreateStaff({ onBack }) {

  const [staffName, setStaffName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [staffId, setStaffId] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // ==========================================
  // CREATE STAFF
  // ==========================================
  const handleCreate = async (e) => {

    e.preventDefault();

    setMessage("");
    setStaffId("");

    // PASSWORD CHECK
    if (password !== confirmPassword) {
      setMessage("❌ Passwords do not match");
      return;
    }

    // PASSWORD LENGTH
    if (password.length < 8) {
      setMessage(
        "❌ Password must be at least 8 characters"
      );
      return;
    }

    setLoading(true);

    try {

      // SEND STAFF DETAILS TO DJANGO
      const response = await apiPost("/accounts/register/", {

        staffName: staffName,
        email: email,
        password: password,

      });

      console.log("REGISTER RESPONSE:", response);

      // GET GENERATED STAFF ID
      setStaffId(response.staff_id);

      setMessage(
        "✅ Staff account created successfully! Your Staff ID has been sent to your email."
      );

      // CLEAR FORM
      setStaffName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

    } catch (err) {

      console.error(
        "CREATE STAFF ERROR:",
        err
      );

      setMessage(
        err?.message ||
        "❌ Unable to create staff account. Please try again."
      );

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="login-page">

      <div className="login-card">

        <h2>Create Staff ID</h2>

        <p
          style={{
            textAlign: "center",
            color: "#aaa",
            marginBottom: "20px",
          }}
        >
          Create your Glovalth Health Tech staff account
        </p>

        <form onSubmit={handleCreate}>

          {/* STAFF NAME */}

          <label>Staff Name</label>

          <input
            type="text"
            placeholder="Enter Full Name"
            value={staffName}
            onChange={(e) =>
              setStaffName(e.target.value)
            }
            required
          />

          {/* EMAIL */}

          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          {/* PASSWORD */}

          <label>Password</label>

          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            minLength="8"
            required
          />

          {/* CONFIRM PASSWORD */}

          <label>Confirm Password</label>

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            minLength="8"
            required
          />

          {/* CREATE BUTTON */}

          <button
            type="submit"
            disabled={loading}
          >
            {loading ? "Creating..." : "Confirm"}
          </button>

        </form>

        {/* MESSAGE */}

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

        {/* GENERATED STAFF ID */}

        {staffId && (

          <div
            style={{
              marginTop: "15px",
              padding: "15px",
              borderRadius: "8px",
              background: "rgba(255,255,255,0.08)",
              textAlign: "center",
            }}
          >

            <p
              style={{
                margin: "0 0 8px",
                color: "#aaa",
              }}
            >
              Your Staff ID
            </p>

            <strong
              style={{
                fontSize: "22px",
                letterSpacing: "2px",
              }}
            >
              {staffId}
            </strong>

            <p
              style={{
                marginTop: "10px",
                fontSize: "13px",
                color: "#aaa",
              }}
            >
              Please check your email for your Staff ID.
            </p>

          </div>

        )}

        {/* BACK TO LOGIN */}

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

export default CreateStaff;