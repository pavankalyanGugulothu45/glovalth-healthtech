import React from "react";
import "./Welcome.css";

function Welcome({ onGo }) {
  return (
    <div className="welcome-wrapper">
      <div className="welcome-card">
        <div className="pulse-circle"></div>

        <h1 className="welcome-title">Welcome to Glovalth</h1>
        <p className="welcome-subtitle">
          Your Smart Health Monitoring System
        </p>

        <button className="go-btn" onClick={onGo}>
          Go
        </button>
      </div>
    </div>
  );
}

export default Welcome;

