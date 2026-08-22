import React from "react";

function Customers({ setPage }) {

  return (
    <div style={{ padding: "30px" }}>

      <h1>Customers</h1>

      <p>
        Manage customer information and support records.
      </p>

      <button onClick={() => setPage("dashboard")}>
        ← Back to Dashboard
      </button>

    </div>
  );
}

export default Customers;