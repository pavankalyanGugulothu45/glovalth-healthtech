import "./MainDashboard.css";
import Sidebar from "../components/Sidebar";

function MainDashboard({ user, setPage }) {
  return (

    <div className="dashboard-layout">

      {/* SIDEBAR */}
      <Sidebar
        setPage={setPage}
        currentPage="dashboard"
      />

      {/* MAIN CONTENT */}
      <div className="dashboard">

        {/* HERO SECTION */}
        <div className="hero-section">

          <div>
            <h1>
              Welcome back,
              {" "}
              {user?.staffName || "Admin User"} 👋
            </h1>

            <p>
              Healthcare Workforce Overview
            </p>
          </div>

          <div className="status-box">
            <h3>🟢 System Status</h3>

            <p>
              All healthcare services operational
            </p>
          </div>

        </div>

        {/* STATS */}
        <div className="stats-grid">

          <div className="stats-card">
            <h2>124</h2>
            <span>Total Staff</span>
          </div>

          <div className="stats-card">
            <h2>38</h2>
            <span>Active Shifts</span>
          </div>

          <div className="stats-card">
            <h2>96%</h2>
            <span>Coverage</span>
          </div>

          <div className="stats-card">
            <h2>5</h2>
            <span>Pending Alerts</span>
          </div>

        </div>

        {/* HEALTHCARE OVERVIEW */}

        <div className="overview-grid">

          <div className="overview-card">
            <h3>🩺 Staff Attendance</h3>

            <p>
              92% of scheduled healthcare staff
              successfully checked in today.
            </p>
          </div>

          <div className="overview-card">
            <h3>📅 Upcoming Shifts</h3>

            <p>
              14 evening shifts and 6 emergency
              coverage requests scheduled today.
            </p>
          </div>

          <div className="overview-card">
            <h3>🚑 Emergency Status</h3>

            <p>
              No critical workforce shortages detected
              across active healthcare departments.
            </p>
          </div>

          <div className="overview-card">
            <h3>☁️ Cloud Synchronisation</h3>

            <p>
              Workforce schedules and healthcare
              records synced successfully.
            </p>
          </div>

        </div>

        {/* RECENT ACTIVITY */}

        <div className="activity-card">

          <h3>📈 Recent Activity</h3>

          <ul>
            <li>✅ New rota published successfully</li>
            <li>👤 Staff profile updated</li>
            <li>📅 Shift conflict resolved</li>
            <li>🛡️ Security monitoring completed</li>
          </ul>

        </div>

      </div>

    </div>
  );
}

export default MainDashboard;