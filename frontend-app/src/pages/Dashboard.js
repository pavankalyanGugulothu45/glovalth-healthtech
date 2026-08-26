import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatsCards from "../components/StatsCards";
import SearchBar from "../components/SearchBar";
import ShiftTable from "../components/ShiftTable";

import "./Dashboard.css";

function Dashboard({ setPage }) {
  return (
    <div className="layout">

      {/* SIDEBAR */}
      <Sidebar
  setPage={setPage}
  currentPage="rota"
/>

      {/* MAIN CONTENT */}
      <div className="main">

        {/* TOP SECTION */}
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
            onClick={() => setPage("dashboard")}
          >
            ← Back to Dashboard
          </button>

        </div>

        {/* ROTA COMPONENTS */}
        <Topbar />

        <StatsCards />

        <SearchBar />

        <ShiftTable />

      </div>

    </div>
  );
}

export default Dashboard;
