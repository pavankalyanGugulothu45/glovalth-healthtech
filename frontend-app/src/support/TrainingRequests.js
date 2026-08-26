import React from "react";

function TrainingRequests({ setPage }) {

  return (
    <div style={{ padding: "30px" }}>

      <h1>Training Requests</h1>

      <p>
        Manage customer training requests.
      </p>

      <button onClick={() => setPage("dashboard")}>
        ← Back to Dashboard
      </button>

    </div>
  );
}

export default TrainingRequests;
