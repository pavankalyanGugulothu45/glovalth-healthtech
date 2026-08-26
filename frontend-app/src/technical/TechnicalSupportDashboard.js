import React from "react";
import "./TechnicalSupportDashboard.css";

function TechnicalSupportDashboard({ setPage, currentPage }) {

  return (
    <div className="technical-dashboard-layout">

      {/* LEFT TECHNICAL SUPPORT SIDEBAR */}

      <aside className="technical-sidebar">

        <div className="technical-sidebar-title">

          <div className="technical-logo">
            🛠️
          </div>

          <div>
            <h2>Technical Support</h2>
            <p>System Management</p>
          </div>

        </div>


        <nav className="technical-navigation">

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
            className={
              currentPage === "technicalDashboard"
                ? "technical-nav active"
                : "technical-nav"
            }
            onClick={() => setPage("technicalDashboard")}
          >
            <span>▣</span>
            Tech Dashboard
          </button>


          <button
            className={
              currentPage === "supportTickets"
                ? "technical-nav active"
                : "technical-nav"
            }
            onClick={() => setPage("supportTickets")}
          >
            <span>🎫</span>
            Support Tickets
          </button>


          <button
            className={
              currentPage === "technicalIssues"
                ? "technical-nav active"
                : "technical-nav"
            }
            onClick={() => setPage("technicalIssues")}
          >
            <span>⚠️</span>
            Technical Issues
          </button>


          <button
            className={
              currentPage === "systemMonitoring"
                ? "technical-nav active"
                : "technical-nav"
            }
            onClick={() => setPage("systemMonitoring")}
          >
            <span>〽️</span>
            System Monitoring
          </button>


          <button
            className={
              currentPage === "systemLogs"
                ? "technical-nav active"
                : "technical-nav"
            }
            onClick={() => setPage("systemLogs")}
          >
            <span>▤</span>
            System Logs
          </button>


          <button
            className={
              currentPage === "knowledgeBase"
                ? "technical-nav active"
                : "technical-nav"
            }
            onClick={() => setPage("knowledgeBase")}
          >
            <span>▥</span>
            Knowledge Base
          </button>

        </nav>


        <button
          className="back-main-btn"
          onClick={() => setPage("dashboard")}
        >
          ← Back to Main Dashboard
        </button>

      </aside>


      {/* MAIN DASHBOARD */}

      <main className="technical-dashboard-content">

        <div className="technical-dashboard-header">

          <div>
            <h1>Technical Support Dashboard</h1>

            <p>
              Overview of technical support activity, system health and current issues.
            </p>
          </div>

          <div className="dashboard-status">
            <span className="status-dot-small"></span>
            System Healthy
          </div>

        </div>


        {/* SUPPORT OVERVIEW */}

        <section>

          <div className="dashboard-section-title">

            <div>
              <h2>Support Overview</h2>
              <p>Current technical support activity</p>
            </div>

          </div>


          <div className="support-overview-grid">

            <div className="overview-card tickets-card">

              <div className="overview-icon">
                🎫
              </div>

              <div>
                <span>Open Support Tickets</span>
                <h3>23</h3>
                <small>Currently open</small>
              </div>

            </div>


            <div className="overview-card critical-card">

              <div className="overview-icon">
                ⚠️
              </div>

              <div>
                <span>Critical Issues</span>
                <h3>2</h3>
                <small>Require attention</small>
              </div>

            </div>


            <div className="overview-card progress-card">

              <div className="overview-icon">
                🔧
              </div>

              <div>
                <span>Issues In Progress</span>
                <h3>8</h3>
                <small>Being worked on</small>
              </div>

            </div>


            <div className="overview-card resolved-card">

              <div className="overview-icon">
                ✓
              </div>

              <div>
                <span>Resolved Today</span>
                <h3>15</h3>
                <small>Successfully resolved</small>
              </div>

            </div>

          </div>

        </section>


        {/* TWO COLUMN SECTION */}

        <div className="technical-dashboard-columns">


          {/* SYSTEM HEALTH */}

          <section className="dashboard-panel">

            <div className="panel-header">

              <div>
                <h2>System Health</h2>
                <p>Current platform service status</p>
              </div>

              <span className="healthy-label">
                Healthy
              </span>

            </div>


            <div className="health-list">

              <div className="health-row">

                <div className="health-name">
                  <span className="health-icon healthy">
                    ✓
                  </span>

                  <div>
                    <strong>API Gateway</strong>
                    <small>All services operational</small>
                  </div>
                </div>

                <span className="health-status">
                  Operational
                </span>

              </div>


              <div className="health-row">

                <div className="health-name">
                  <span className="health-icon healthy">
                    ✓
                  </span>

                  <div>
                    <strong>Database Cluster</strong>
                    <small>Connection stable</small>
                  </div>
                </div>

                <span className="health-status">
                  Operational
                </span>

              </div>


              <div className="health-row">

                <div className="health-name">
                  <span className="health-icon healthy">
                    ✓
                  </span>

                  <div>
                    <strong>Notification Service</strong>
                    <small>Notifications running normally</small>
                  </div>
                </div>

                <span className="health-status">
                  Operational
                </span>

              </div>


              <div className="health-row">

                <div className="health-name">
                  <span className="health-icon warning">
                    ⚠
                  </span>

                  <div>
                    <strong>File Storage</strong>
                    <small>Performance degradation detected</small>
                  </div>
                </div>

                <span className="health-status warning-text">
                  Warning
                </span>

              </div>

            </div>

          </section>


          {/* SUPPORT ACTIVITY */}

          <section className="dashboard-panel">

            <div className="panel-header">

              <div>
                <h2>Support Activity</h2>
                <p>Tickets created and resolved</p>
              </div>

              <select className="activity-filter">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>Last 3 Months</option>
              </select>

            </div>


            <div className="activity-chart">

              <div className="chart-y-axis">
                <span>30</span>
                <span>20</span>
                <span>10</span>
                <span>0</span>
              </div>


              <svg
                viewBox="0 0 500 220"
                className="support-chart"
              >

                <line
                  x1="45"
                  y1="25"
                  x2="475"
                  y2="25"
                  className="chart-grid-line"
                />

                <line
                  x1="45"
                  y1="80"
                  x2="475"
                  y2="80"
                  className="chart-grid-line"
                />

                <line
                  x1="45"
                  y1="135"
                  x2="475"
                  y2="135"
                  className="chart-grid-line"
                />

                <line
                  x1="45"
                  y1="190"
                  x2="475"
                  y2="190"
                  className="chart-grid-line"
                />


                <polyline
                  points="
                    45,150
                    115,125
                    185,145
                    255,85
                    325,105
                    395,60
                    475,80
                  "
                  className="tickets-line"
                />


                <polyline
                  points="
                    45,180
                    115,165
                    185,175
                    255,140
                    325,150
                    395,115
                    475,125
                  "
                  className="resolved-line"
                />

              </svg>


              <div className="chart-days">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>


              <div className="chart-legend">

                <span>
                  <i className="legend-tickets"></i>
                  Tickets Created
                </span>

                <span>
                  <i className="legend-resolved"></i>
                  Tickets Resolved
                </span>

              </div>

            </div>

          </section>

        </div>


        {/* RECENT SUPPORT TICKETS */}

        <section className="dashboard-panel full-panel">

          <div className="panel-header">

            <div>
              <h2>Recent Support Tickets</h2>
              <p>Latest technical support requests</p>
            </div>

            <button
              className="view-all-button"
              onClick={() => setPage("supportTickets")}
            >
              View All
            </button>

          </div>


          <div className="support-table">

            <div className="table-header">
              <span>Ticket</span>
              <span>Issue</span>
              <span>Priority</span>
              <span>Status</span>
            </div>


            <div className="table-row">

              <strong>TKT-001</strong>

              <span>Database connection issue</span>

              <span className="priority critical">
                Critical
              </span>

              <span className="ticket-status open">
                Open
              </span>

            </div>


            <div className="table-row">

              <strong>TKT-002</strong>

              <span>Login authentication problem</span>

              <span className="priority high">
                High
              </span>

              <span className="ticket-status progress">
                In Progress
              </span>

            </div>


            <div className="table-row">

              <strong>TKT-003</strong>

              <span>Email notification delay</span>

              <span className="priority medium">
                Medium
              </span>

              <span className="ticket-status resolved">
                Resolved
              </span>

            </div>

          </div>

        </section>


        {/* RECENT TECHNICAL ISSUES */}

        <section className="dashboard-panel full-panel">

          <div className="panel-header">

            <div>
              <h2>Recent Technical Issues</h2>
              <p>Latest reported system problems</p>
            </div>

            <button
              className="view-all-button"
              onClick={() => setPage("technicalIssues")}
            >
              View All
            </button>

          </div>


          <div className="issues-grid">

            <div className="issue-card">

              <div className="issue-card-top">

                <span className="issue-id">
                  ISS-456
                </span>

                <span className="priority critical">
                  Critical
                </span>

              </div>

              <h3>Database timeout</h3>

              <p>
                Database connection timeout affecting API requests.
              </p>

              <span className="issue-status open">
                Open
              </span>

            </div>


            <div className="issue-card">

              <div className="issue-card-top">

                <span className="issue-id">
                  ISS-457
                </span>

                <span className="priority high">
                  High
                </span>

              </div>

              <h3>Mobile upload failure</h3>

              <p>
                Users experiencing problems uploading photos.
              </p>

              <span className="issue-status progress">
                In Progress
              </span>

            </div>


            <div className="issue-card">

              <div className="issue-card-top">

                <span className="issue-id">
                  ISS-458
                </span>

                <span className="priority medium">
                  Medium
                </span>

              </div>

              <h3>Notification delay</h3>

              <p>
                Medication reminder notifications are delayed.
              </p>

              <span className="issue-status progress">
                Investigating
              </span>

            </div>

          </div>

        </section>


        {/* QUICK ACTIONS */}

        <section className="dashboard-panel full-panel">

          <div className="panel-header">

            <div>
              <h2>Quick Actions</h2>
              <p>Access technical support tools</p>
            </div>

          </div>


          <div className="quick-actions">

            <button
              onClick={() => setPage("supportTickets")}
            >
              <span>🎫</span>
              <strong>Create Support Ticket</strong>
              <small>Report and manage support requests</small>
            </button>


            <button
              onClick={() => setPage("technicalIssues")}
            >
              <span>⚠️</span>
              <strong>Report Technical Issue</strong>
              <small>Record a new technical problem</small>
            </button>


            <button
              onClick={() => setPage("systemMonitoring")}
            >
              <span>〽️</span>
              <strong>System Monitoring</strong>
              <small>Check live service status</small>
            </button>


            <button
              onClick={() => setPage("systemLogs")}
            >
              <span>▤</span>
              <strong>System Logs</strong>
              <small>Review system events and errors</small>
            </button>


            <button
              onClick={() => setPage("knowledgeBase")}
            >
              <span>▥</span>
              <strong>Knowledge Base</strong>
              <small>Find technical documentation</small>
            </button>

          </div>

        </section>

      </main>

    </div>
  );
}

export default TechnicalSupportDashboard;
