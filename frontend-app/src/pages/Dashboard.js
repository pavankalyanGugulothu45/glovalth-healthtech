import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatsCards from "../components/StatsCards";
import SearchBar from "../components/SearchBar";
import ShiftTable from "../components/ShiftTable";
import AddShift from "../components/AddShift";

import { rotaPost } from "../api";

import "./Dashboard.css";

function Dashboard({ setPage }) {
  const [showAddShift, setShowAddShift] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [message, setMessage] = useState("");

  const handleAddShift = async (shiftData) => {
    try {
      await rotaPost("/rota/shifts/", shiftData);

      setMessage("Shift saved successfully!");
      setRefreshKey((previous) => previous + 1);

    } catch (error) {
      console.error("ADD SHIFT ERROR:", error);

      throw new Error(
        error.message || "Unable to save shift."
      );
    }
  };

  return (
    <div className="layout">

      <Sidebar
        setPage={setPage}
        currentPage="rota"
      />

      <div className="main">

        {/* ROTA HEADER */}
        <div className="rota-header">

          <div>
            <h1>📅 Rota Management</h1>

            <p>
              Manage healthcare staff schedules,
              shifts, and workforce planning.
            </p>
          </div>

          <button
            className="back-btn"
            type="button"
            onClick={() => setPage("dashboard")}
          >
            ← Back to Dashboard
          </button>

        </div>

        {/* TOPBAR */}
        <Topbar
          onAddShift={() => {
            setMessage("");
            setShowAddShift(true);
          }}
        />

        {/* SUCCESS MESSAGE */}
        {message && (
          <p style={{ color: "green", margin: "12px 0" }}>
            {message}
          </p>
        )}

        {/* ROTA STATISTICS */}
        <StatsCards />

        {/* SEARCH */}
        <SearchBar />

        {/* SHIFT TABLE */}
        <ShiftTable refreshKey={refreshKey} />

        {/* ADD SHIFT MODAL */}
        {showAddShift && (
          <AddShift
            onClose={() => setShowAddShift(false)}
            onSave={handleAddShift}
          />
        )}

      </div>

    </div>
  );
}

export default Dashboard;
