import "./Sidebar.css";

function Sidebar({ setPage, currentPage }) {

  return (
    <div className="sidebar">

      <h2 className="sidebar-title">
        Glovalth
      </h2>

      <div className="sidebar-links">

        {/* Dashboard */}

        <button
          className={currentPage === "dashboard" ? "active" : ""}
          onClick={() => setPage("dashboard")}
        >
          <span>📊</span>
          Dashboard
        </button>

        {/* Finance */}

        <button
          className={currentPage === "finance" ? "active" : ""}
          onClick={() => setPage("finance")}
        >
          <span>💰</span>
          Financial Dashboard
        </button>

        <button
          className={currentPage === "subscriptions" ? "active" : ""}
          onClick={() => setPage("subscriptions")}
        >
          <span>📦</span>
          Subscriptions
        </button>

        <button
          className={currentPage === "invoices" ? "active" : ""}
          onClick={() => setPage("invoices")}
        >
          <span>🧾</span>
          Invoices
        </button>

        <button
          className={currentPage === "payments" ? "active" : ""}
          onClick={() => setPage("payments")}
        >
          <span>💳</span>
          Payments
        </button>

        <button
          className={currentPage === "plans" ? "active" : ""}
          onClick={() => setPage("plans")}
        >
          <span>📋</span>
          Plans
        </button>

        {/* Marketing */}

        <button
          className={currentPage === "leadPipeline" ? "active" : ""}
          onClick={() => setPage("leadPipeline")}
        >
          <span>📈</span>
          Lead Pipeline
        </button>
        <button
  className={
    currentPage === "demoRequests"
      ? "active"
      : ""
  }
  onClick={() => setPage("demoRequests")}
>
  <span>🎥</span>
  Demo Requests
</button>
<button
  className={currentPage === "campaigns" ? "active" : ""}
  onClick={() => setPage("campaigns")}
>
  <span>📢</span>
  Campaigns
</button>
<button
  className={currentPage === "marketingLeads" ? "active" : ""}
  onClick={() => setPage("marketingLeads")}
>
  <span>👥</span>
  Marketing Leads
</button>
{/* TECHNICAL SUPPORT */}

<button
  className={
    currentPage === "technicalSupport"
      ? "active"
      : ""
  }
  onClick={() => setPage("technicalSupport")}
>
  <span>🛠️</span>
  Technical Support
</button>

        {/* Operations */}

        <button
          className={currentPage === "rota" ? "active" : ""}
          onClick={() => setPage("rota")}
        >
          <span>📅</span>
          Rota Management
        </button>

        <button
          className={currentPage === "staffList" ? "active" : ""}
          onClick={() => setPage("staffList")}
        >
          <span>👥</span>
          Staff List
        </button>

        <button
          className={currentPage === "notifications" ? "active" : ""}
          onClick={() => setPage("notifications")}
        >
          <span>🔔</span>
          Notifications
        </button>

        <button
          className={currentPage === "settings" ? "active" : ""}
          onClick={() => setPage("settings")}
        >
          <span>⚙️</span>
          Settings
        </button>

        <button
          className={currentPage === "profile" ? "active" : ""}
          onClick={() => setPage("profile")}
        >
          <span>👤</span>
          Profile
        </button>

      </div>

      <div className="sidebar-footer">

        <div className="system-status">

          <div className="status-dot"></div>

          <span>System Active</span>

        </div>

        <button
          className="logout-btn"
          onClick={() => setPage("welcome")}
        >
          Logout
        </button>

      </div>
      
    </div>
  );
}


export default Sidebar;
