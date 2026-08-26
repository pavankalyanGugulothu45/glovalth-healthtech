import React, { useState } from "react";
import "./TechnicalIssues.css";

function TechnicalIssues({ setPage }) {
  const [showPopup, setShowPopup] = useState(false);

  const [issues, setIssues] = useState([
    {
      id: "ISS-456",
      title: "Database connection timeout on care plan page",
      severity: "Critical",
      status: "In Progress",
      affected: 3,
      component: "Backend API",
      assignee: "Sarah Johnson",
      reported: "17 Mar 2026 08:00",
    },
    {
      id: "ISS-457",
      title: "Mobile app crash when uploading photos",
      severity: "High",
      status: "Open",
      affected: 1,
      component: "Mobile App",
      assignee: "Michael Chen",
      reported: "16 Mar 2026 15:30",
    },
    {
      id: "ISS-458",
      title: "Medication reminder notifications delayed",
      severity: "Medium",
      status: "In Progress",
      affected: 5,
      component: "Notification Service",
      assignee: "David Martinez",
      reported: "16 Mar 2026 10:15",
    },
    {
      id: "ISS-459",
      title: "Report generation slow for large datasets",
      severity: "Low",
      status: "Open",
      affected: 2,
      component: "Reporting Module",
      assignee: "Lisa Anderson",
      reported: "15 Mar 2026 14:20",
    },
    {
      id: "ISS-460",
      title: "Calendar sync issues with external systems",
      severity: "Medium",
      status: "Resolved",
      affected: 1,
      component: "Integration Service",
      assignee: "Sarah Johnson",
      reported: "14 Mar 2026 09:00",
    },
    {
      id: "ISS-461",
      title: "UI rendering bug on care notes modal",
      severity: "Low",
      status: "Resolved",
      affected: 0,
      component: "Frontend UI",
      assignee: "Michael Chen",
      reported: "13 Mar 2026 16:45",
    },
  ]);

  const [form, setForm] = useState({
    title: "",
    severity: "Medium",
    component: "Backend API",
    affected: "0",
    description: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const createIssue = (e) => {
    e.preventDefault();

    if (!form.title || !form.description) {
      alert("Please enter the issue title and description.");
      return;
    }

    const newIssue = {
      id: `ISS-${456 + issues.length}`,
      title: form.title,
      severity: form.severity,
      status: "Open",
      affected: Number(form.affected) || 0,
      component: form.component,
      assignee: "Unassigned",
      reported: new Date().toLocaleString("en-GB"),
    };

    setIssues([newIssue, ...issues]);

    setForm({
      title: "",
      severity: "Medium",
      component: "Backend API",
      affected: "0",
      description: "",
    });

    setShowPopup(false);
  };

  const criticalCount = issues.filter(
    (issue) => issue.severity === "Critical"
  ).length;

  const openCount = issues.filter(
    (issue) => issue.status === "Open"
  ).length;

  const progressCount = issues.filter(
    (issue) => issue.status === "In Progress"
  ).length;

  return (
    <div className="technical-issues-page">

      <aside className="technical-issues-sidebar">

        <div className="technical-issues-brand">
          <div className="technical-issues-logo">🛠️</div>

          <div>
            <h2>Technical Support</h2>
            <p>System Management</p>
          </div>
        </div>

        <nav className="technical-issues-nav">

          <button
            onClick={() => setPage("technicalSupport")}
          >
            <span>▦</span>
            Dashboard
          </button>

          <button
            onClick={() => setPage("technicalDashboard")}
          >
            <span>▣</span>
            Tech Dashboard
          </button>

          <button
            onClick={() => setPage("supportTickets")}
          >
            <span>🎫</span>
            Support Tickets
          </button>

          <button className="active">
            <span>⚠️</span>
            Technical Issues
          </button>

          <button
            onClick={() => setPage("systemMonitoring")}
          >
            <span>〽️</span>
            System Monitoring
          </button>

          <button
            onClick={() => setPage("systemLogs")}
          >
            <span>▤</span>
            System Logs
          </button>

          <button
            onClick={() => setPage("knowledgeBase")}
          >
            <span>▥</span>
            Knowledge Base
          </button>

        </nav>

        <div className="technical-role">
          <small>Role</small>
          <strong>Tech Support</strong>
        </div>

      </aside>

      <main className="technical-issues-main">

        <header className="technical-issues-topbar">

          <div className="global-search">
            🔍
            <input
              placeholder="Search customers, tickets, issues..."
            />
          </div>

          <div className="top-icons">
            🔔
            <span className="notification-count">3</span>
            <div className="profile-circle">◯</div>
           ⌄
          </div>

        </header>

        <section className="technical-issues-content">

          <div className="issues-heading">

            <div>
              <h1>Technical Issues</h1>
              <p>
                Track and resolve system bugs and technical problems
              </p>
            </div>

            <button
              className="report-issue-button"
              onClick={() => setShowPopup(true)}
            >
              + &nbsp; Report Issue
            </button>

          </div>

          <div className="issue-stat-grid">

            <div className="issue-stat-card">
              <div>
                <span>Total Issues</span>
                <h2>{issues.length}</h2>
              </div>

              <div className="issue-icon teal">🐞</div>
            </div>

            <div className="issue-stat-card">
              <div>
                <span>Critical</span>
                <h2>{criticalCount}</h2>
              </div>

              <div className="issue-icon red">⚠</div>
            </div>

            <div className="issue-stat-card">
              <div>
                <span>Open</span>
                <h2>{openCount}</h2>
              </div>

              <div className="issue-icon orange">!</div>
            </div>

            <div className="issue-stat-card">
              <div>
                <span>In Progress</span>
                <h2>{progressCount}</h2>
              </div>

              <div className="issue-icon blue">✓</div>
            </div>

          </div>

          <div className="issue-filters">

            <div className="issue-search">
              🔍
              <input
                placeholder="Search by issue ID, title, or component..."
              />
            </div>

            <select>
              <option>All Severity</option>
              <option>Critical</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>

            <select>
              <option>All Status</option>
              <option>Open</option>
              <option>In Progress</option>
              <option>Resolved</option>
            </select>

          </div>

          <section className="issues-table-card">

            <h2>All Issues ({issues.length})</h2>

            <div className="issues-table-wrapper">

              <table>

                <thead>
                  <tr>
                    <th>Issue ID</th>
                    <th>Title</th>
                    <th>Severity</th>
                    <th>Status</th>
                    <th>Affected</th>
                    <th>Component</th>
                    <th>Assignee</th>
                    <th>Reported</th>
                  </tr>
                </thead>

                <tbody>

                  {issues.map((issue) => (
                    <tr key={issue.id}>

                      <td className="issue-id">
                        {issue.id}
                      </td>

                      <td>{issue.title}</td>

                      <td>
                        <span
                          className={`severity-badge ${issue.severity.toLowerCase()}`}
                        >
                          {issue.severity}
                        </span>
                      </td>

                      <td>
                        <span
                          className={`issue-status ${issue.status
                            .toLowerCase()
                            .replace(" ", "-")}`}
                        >
                          {issue.status}
                        </span>
                      </td>

                      <td>
                        {issue.affected} customers
                      </td>

                      <td>
                        <span className="component-badge">
                          {issue.component}
                        </span>
                      </td>

                      <td>{issue.assignee}</td>

                      <td>{issue.reported}</td>

                    </tr>
                  ))}

                </tbody>

              </table>

            </div>

          </section>

        </section>

      </main>

      {showPopup && (
        <div className="issue-popup-overlay">

          <div className="issue-popup">

            <button
              className="issue-popup-close"
              onClick={() => setShowPopup(false)}
            >
              ×
            </button>

            <h2>Report Technical Issue</h2>

            <p>
              Enter the details of the technical problem.
            </p>

            <form onSubmit={createIssue}>

              <label>Issue Title</label>

              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Enter issue title"
              />

              <label>Severity</label>

              <select
                name="severity"
                value={form.severity}
                onChange={handleChange}
              >
                <option>Critical</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>

              <label>Component</label>

              <select
                name="component"
                value={form.component}
                onChange={handleChange}
              >
                <option>Backend API</option>
                <option>Mobile App</option>
                <option>Frontend UI</option>
                <option>Database</option>
                <option>Notification Service</option>
                <option>Integration Service</option>
                <option>Reporting Module</option>
              </select>

              <label>Affected Customers</label>

              <input
                type="number"
                min="0"
                name="affected"
                value={form.affected}
                onChange={handleChange}
              />

              <label>Description</label>

              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Describe the technical issue..."
              />

              <div className="issue-popup-actions">

                <button
                  type="button"
                  onClick={() => setShowPopup(false)}
                  className="issue-cancel"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="issue-create"
                >
                  Report Issue
                </button>

              </div>

            </form>

          </div>

        </div>
      )}

    </div>
  );
}

export default TechnicalIssues;
