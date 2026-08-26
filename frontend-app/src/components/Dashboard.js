import "./Dashboard.css";

function Dashboard({
  user,
  onLogout,
  onViewStaff,
  onNotifications,
  onSettings,
  onProfile,
  onRota,   // ✅ keep this
}) {
  const isAdmin = user?.staffId?.startsWith("admin");

  return (
    <div className="dashboard-wrap">

      {/* 🔷 TOP BAR */}
      <div className="top-bar">
        <div className="top-left">
          <h3 className="brand-title">Glovalth Dashboard</h3>
        </div>

        <div className="top-right">

          <button className="top-btn" onClick={onNotifications}>
            🔔 Notifications
          </button>

          <button className="top-btn" onClick={onSettings}>
            ⚙️ Settings
          </button>

          <button className="top-btn" onClick={onProfile}>
            👤 Profile
          </button>

          {isAdmin && (
            <button className="top-btn" onClick={onViewStaff}>
              🧾 Staff List
            </button>
          )}

          {/* ✅ ROTA BUTTON */}
          <button className="top-btn" onClick={onRota}>
            📅 Rota Management
          </button>

          <button className="top-btn danger" onClick={onLogout}>
            Logout
          </button>

        </div>
      </div>

      {/* 🔷 MAIN BODY */}
      <div className="dashboard-body">
        <h2>Welcome, {user?.staffName}</h2>
        <p>Your Health Tech Control Panel</p>

        <div className="dash-cards">
          <div className="dash-card">
            <h4>Quick Status</h4>
            <p>System is running normally.</p>
          </div>

          <div className="dash-card">
            <h4>Reminders</h4>
            <p>Review today’s updates and notifications.</p>
          </div>

          <div className="dash-card">
            <h4>Security</h4>
            <p>Keep your password secure and updated.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
