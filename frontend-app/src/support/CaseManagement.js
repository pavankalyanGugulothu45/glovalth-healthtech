import React from "react";

function CaseManagement({ setPage }) {

  return (
    <div style={{ padding: "30px" }}>

      <h1>Case Management</h1>

      <p>
        Manage and track customer support cases.
      </p>

      <button onClick={() => setPage("dashboard")}>
        ← Back to Dashboard
      </button>

    </div>
  );
}

export default CaseManagement;