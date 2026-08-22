import React from "react";
import "./TechDashboard.css";

function TechDashboard({ setPage, currentPage }) {

  return (
    <div className="tech-dashboard-page">

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

        </nav>


        <button
          className="back-main-btn"
          onClick={() => setPage("dashboard")}
        >
          ← Back to Main Dashboard
        </button>

      </aside>


      {/* MAIN TECH DASHBOARD */}

      <main className="tech-dashboard-content">

        <div className="tech-dashboard-header">

          <div>

            <h1>Technical Dashboard</h1>

            <p>
              Real-time system monitoring and issue tracking
            </p>

          </div>


          <div className="system-healthy">
            ✓ System Healthy
          </div>

        </div>


        {/* KPI CARDS */}

        <div className="tech-kpi-grid">

          <div className="tech-kpi-card critical">

            <span>Critical Issues</span>

            <h2>1</h2>

            <small>Requires immediate attention</small>

          </div>


          <div className="tech-kpi-card high">

            <span>High Priority</span>

            <h2>1</h2>

            <small>Needs attention soon</small>

          </div>


          <div className="tech-kpi-card tickets">

            <span>Open Tickets</span>

            <h2>2</h2>

            <small>Awaiting assignment</small>

          </div>


          <div className="tech-kpi-card progress">

            <span>In Progress</span>

            <h2>2</h2>

            <small>Being worked on</small>

          </div>

        </div>


        {/* API PERFORMANCE */}

        <section className="tech-section-card">

          <div className="section-header">

            <div>

              <h2>API Performance</h2>

              <p>Current API performance</p>

            </div>

            <span className="optimal-badge">
              ↗ Optimal
            </span>

          </div>


          <div className="api-stats">

            <div>
              <span>Avg Latency</span>
              <strong>142ms</strong>
            </div>

            <div>
              <span>Requests/min</span>
              <strong>2,134</strong>
            </div>

            <div>
              <span>Error Rate</span>
              <strong>0.2%</strong>
            </div>

          </div>


          <div className="api-chart">

            <svg
              viewBox="0 0 800 250"
              className="api-svg"
            >

              <line
                x1="50"
                y1="30"
                x2="760"
                y2="30"
                className="chart-grid"
              />

              <line
                x1="50"
                y1="85"
                x2="760"
                y2="85"
                className="chart-grid"
              />

              <line
                x1="50"
                y1="140"
                x2="760"
                y2="140"
                className="chart-grid"
              />

              <line
                x1="50"
                y1="195"
                x2="760"
                y2="195"
                className="chart-grid"
              />

              <polyline
                points="
                  50,100
                  168,125
                  286,65
                  404,30
                  522,52
                  640,78
                  760,58
                "
                className="api-line"
              />

              <circle cx="50" cy="100" r="5" />
              <circle cx="168" cy="125" r="5" />
              <circle cx="286" cy="65" r="5" />
              <circle cx="404" cy="30" r="5" />
              <circle cx="522" cy="52" r="5" />
              <circle cx="640" cy="78" r="5" />
              <circle cx="760" cy="58" r="5" />

            </svg>

            <div className="chart-labels">

              <span>00:00</span>
              <span>04:00</span>
              <span>08:00</span>
              <span>12:00</span>
              <span>16:00</span>
              <span>20:00</span>

            </div>

          </div>

        </section>


        {/* RECENT SYSTEM ERRORS */}

        <section className="tech-section-card">

          <div className="section-header">

            <h2>Recent System Errors</h2>

            <button
              className="view-button"
              onClick={() => setPage("systemLogs")}
            >
              View All Logs
            </button>

          </div>


          <div className="error-list">

            <div className="error-item">

              <div className="error-top">

                <span className="error-badge critical-badge">
                  Critical
                </span>

                <span>ERR-1234</span>

              </div>

              <h3>
                Database connection timeout
              </h3>

              <p>
                Backend API · 5 mins ago · 12 occurrences
              </p>

            </div>


            <div className="error-item">

              <div className="error-top">

                <span className="error-badge high-badge">
                  High
                </span>

                <span>ERR-1235</span>

              </div>

              <h3>
                Failed to upload file to S3
              </h3>

              <p>
                File Storage · 15 mins ago · 3 occurrences
              </p>

            </div>


            <div className="error-item">

              <div className="error-top">

                <span className="error-badge medium-badge">
                  Medium
                </span>

                <span>ERR-1236</span>

              </div>

              <h3>
                Rate limit exceeded on external API
              </h3>

              <p>
                Integration Service · 1 hour ago · 8 occurrences
              </p>

            </div>

          </div>

        </section>


        {/* OPEN TICKETS */}

        <section className="tech-section-card">

          <div className="section-header">

            <h2>Your Open Tickets</h2>

            <button
              className="view-button"
              onClick={() => setPage("supportTickets")}
            >
              View All
            </button>

          </div>


          <div className="ticket-list">

            <div className="ticket-item">

              <div>

                <strong>ISS-456</strong>

                <h3>
                  Database connection timeout
                </h3>

                <p>
                  Assigned to: Sarah Johnson
                </p>

              </div>

              <span className="ticket-critical">
                Critical
              </span>

            </div>


            <div className="ticket-item">

              <div>

                <strong>ISS-457</strong>

                <h3>
                  Mobile app crash when uploading photos
                </h3>

                <p>
                  Assigned to: Michael Chen
                </p>

              </div>

              <span className="ticket-high">
                High
              </span>

            </div>


            <div className="ticket-item">

              <div>

                <strong>ISS-458</strong>

                <h3>
                  Medication reminder notifications delayed
                </h3>

                <p>
                  Assigned to: David Martinez
                </p>

              </div>

              <span className="ticket-medium">
                Medium
              </span>

            </div>

          </div>

        </section>


        {/* SYSTEM SERVICES */}

        <section className="tech-section-card">

          <div className="section-header">

            <h2>System Services</h2>

          </div>


          <div className="services-list">

            <div className="service-row">

              <div className="service-icon healthy">
                ✓
              </div>

              <div>
                <strong>API Gateway</strong>
                <p>Uptime: 99.98%</p>
              </div>

              <span className="service-status healthy-status">
                Healthy
              </span>

            </div>


            <div className="service-row">

              <div className="service-icon healthy">
                ✓
              </div>

              <div>
                <strong>Database Cluster</strong>
                <p>Uptime: 99.99%</p>
              </div>

              <span className="service-status healthy-status">
                Healthy
              </span>

            </div>


            <div className="service-row">

              <div className="service-icon healthy">
                ✓
              </div>

              <div>
                <strong>Notification Service</strong>
                <p>Uptime: 99.95%</p>
              </div>

              <span className="service-status healthy-status">
                Healthy
              </span>

            </div>


            <div className="service-row">

              <div className="service-icon warning">
                ⚠
              </div>

              <div>
                <strong>File Storage</strong>
                <p>Uptime: 98.5%</p>
              </div>

              <span className="service-status warning-status">
                Warning
              </span>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default TechDashboard;