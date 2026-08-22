import React from "react";
import "./TechnicalSupport.css";

function TechnicalSupport({ setPage, currentPage }) {

  return (
    <div className="technical-support-page">

      {/* LEFT TECHNICAL SUPPORT SIDEBAR */}

      <div className="technical-sidebar">

        <div className="technical-sidebar-title">

          <div className="technical-logo">
            🛠️
          </div>

          <div>
            <h2>Technical Support</h2>
            <p>System Management</p>
          </div>

        </div>


        <div className="technical-navigation">

          <button
            className={
              currentPage === "technicalSupport"
                ? "technical-nav active"
                : "technical-nav"
            }
            onClick={() => setPage("technicalSupport")}
          >
            <span>▦</span>
            Dashboard
          </button>


          <button
            className="technical-nav"
            onClick={() => setPage("technicalDashboard")}
          >
            <span>▣</span>
            Tech Dashboard
          </button>


          <button
            className="technical-nav"
            onClick={() => setPage("supportTickets")}
          >
            <span>🎫</span>
            Support Tickets
          </button>


          <button
            className="technical-nav"
            onClick={() => setPage("technicalIssues")}
          >
            <span>⚠️</span>
            Technical Issues
          </button>


          <button
            className="technical-nav"
            onClick={() => setPage("systemMonitoring")}
          >
            <span>〽️</span>
            System Monitoring
          </button>


          <button
            className="technical-nav"
            onClick={() => setPage("systemLogs")}
          >
            <span>▤</span>
            System Logs
          </button>


          <button
            className="technical-nav"
            onClick={() => setPage("knowledgeBase")}
          >
            <span>▥</span>
            Knowledge Base
          </button>

        </div>


        <button
          className="back-main-btn"
          onClick={() => setPage("dashboard")}
        >
          ← Back to Main Dashboard
        </button>

      </div>


      {/* EMPTY CONTENT AREA */}

      <div className="technical-content-area">
      </div>

    </div>
  );
}

export default TechnicalSupport;