import { useState, useEffect } from "react";
import "./Login.css";
import { apiPost } from "../api";

function CreateStaff({ onBack }) {

  const [staffName, setStaffName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [staffId, setStaffId] = useState("");
  const [message, setMessage] = useState("");

  // UNIQUE STAFF ID GENERATOR
  const generateStaffId = (name) => {

    const parts =
      name.trim().toLowerCase().split(" ");

    if (parts.length < 2) return "";

    const firstInitial = parts[0][0];

    const lastName =
      parts[parts.length - 1];

    const random =
      Math.floor(100 + Math.random() * 900);

    return `${firstInitial}${lastName}${random}-GLV`;
  };

  // AUTO GENERATE STAFF ID
  useEffect(() => {

    if (staffName.trim()) {

      setStaffId(
        generateStaffId(staffName)
      );

    } else {

      setStaffId("");

    }

  }, [staffName]);

  // CREATE STAFF
  const handleCreate = async (e) => {

    e.preventDefault();

    setMessage("");

    // PASSWORD VALIDATION
    if (password !== confirmPassword) {

      setMessage(
        "❌ Passwords do not match"
      );

      return;
    }

    // NAME VALIDATION
    if (!staffId) {

      setMessage(
        "❌ Please enter full name (First & Last)"
      );

      return;
    }

    // CHECK LOCAL DUPLICATE
    const existingUsers =
      JSON.parse(
        localStorage.getItem("staffAccounts")
      ) || [];

    const alreadyExists =
      existingUsers.some(
        (u) => u.staffId === staffId
      );

    if (alreadyExists) {

      setMessage(
        "❌ Staff already exists locally"
      );

      return;
    }

    // SAVE USER LOCALLY FIRST
    existingUsers.push({
      staffId: staffId,
      staffName: staffName,
      password: password,
    });

    localStorage.setItem(
      "staffAccounts",
      JSON.stringify(existingUsers)
    );

    // TRY DJANGO BACKEND
    try {

      await apiPost("/register/", {

        username:
          `${staffId}@glovalth.com`,

        email:
          `${staffId}@glovalth.com`,

        password: password,

      });

      setMessage(
        "✅ Staff created successfully"
      );

    } catch (err) {

      console.error(
        "FULL ERROR:",
        err
      );

      console.log(
        "BACKEND RESPONSE:",
        err.response?.data
      );

      // STILL SUCCESS LOCALLY
      setMessage(
        "✅ Staff saved locally (Backend pending)"
      );
    }

    // RESET FORM
    setStaffName("");
    setPassword("");
    setConfirmPassword("");
    setStaffId("");
  };

  return (

    <div className="login-page">

      <div className="login-card">

        <h2>Create Staff ID</h2>

        <form onSubmit={handleCreate}>

          <label>Staff Name</label>

          <input
            type="text"
            placeholder="Enter Full Name (First Last)"
            value={staffName}
            onChange={(e) =>
              setStaffName(e.target.value)
            }
            required
          />

          {/* GENERATED STAFF ID */}

          {staffId && (

            <p
              style={{
                marginTop: "8px",
                color: "#4FAF53",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >

              Generated Staff ID:
              {" "}
              {staffId}

            </p>

          )}

          <label>Password</label>

          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          <label>Confirm Password</label>

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            required
          />

          <button type="submit">
            Confirm
          </button>

        </form>

        {/* MESSAGE */}

        {message && (

          <p
            style={{
              textAlign: "center",
              marginTop: "12px",
              fontWeight: "600",
            }}
          >

            {message}

          </p>

        )}

        <button
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
