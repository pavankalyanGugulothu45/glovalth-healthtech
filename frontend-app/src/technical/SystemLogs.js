import React, { useMemo, useState } from "react";
import "./SystemLogs.css";

function SystemLogs({ setPage }) {
  const [search, setSearch] = useState("");
  const [levelFilter, setLevelFilter] = useState("All Levels");
  const [serviceFilter, setServiceFilter] = useState("All Services");
  const [selectedLog, setSelectedLog] = useState(null);
  const logs = [
    {
        id: "LOG-1234",
        level: "ERROR",
        service: "Backend API",
        message:
          "Database connection timeout: Connection could not be established within 30000ms",
        time: "2026-03-18 14:25:32",
        request: "req-789xyz",
        user: "user-456",
        stackTrace:
          "at DatabasePool.connect (db.js:145)\nat QueryExecutor.execute (query.js:89)\nat CareplanController.getCareplan (careplan.js:34)",
      },
    {
      id: "LOG-1235",
      level: "ERROR",
      service: "File Storage",
      message: "Failed to upload file to S3: Access Denied",
      time: "2026-03-18 14:20:15",
      request: "req-123abc",
      user: "user-789",
    },
    {
      id: "LOG-1236",
      level: "WARNING",
      service: "Integration Service",
      message: "Rate limit exceeded on external API call to HealthSync",
      time: "2026-03-18 14:15:45",
      request: "req-456def",
      user: "",
    },
    {
      id: "LOG-1237",
      level: "ERROR",
      service: "Backend API",
      message: "Invalid authentication token provided",
      time: "2026-03-18 14:10:20",
      request: "req-789ghi",
      user: "",
    },
    {
      id: "LOG-1238",
      level: "INFO",
      service: "Notification Service",
      message: "Successfully sent 150 notification emails",
      time: "2026-03-18 14:05:10",
      request: "req-321jkl",
      user: "",
    },
    {
      id: "LOG-1239",
      level: "WARNING",
      service: "Mobile App",
      message: "Deprecated API endpoint accessed: /api/v1/patients",
      time: "2026-03-18 14:00:55",
      request: "req-654mno",
      user: "user-123",
    },
    {
      id: "LOG-1240",
      level: "ERROR",
      service: "Backend API",
      message: "Failed to process medication reminder: Invalid medication ID",
      time: "2026-03-18 13:55:30",
      request: "req-987pqr",
      user: "user-456",
    },
    {
      id: "LOG-1241",
      level: "INFO",
      service: "Authentication Service",
      message: "User login successful",
      time: "2026-03-18 13:50:15",
      request: "req-147stu",
      user: "user-789",
    },
  ];

  const filteredLogs = useMemo(() => {
    return logs.filter((log) => {
      const matchesSearch =
        log.id.toLowerCase().includes(search.toLowerCase()) ||
        log.message.toLowerCase().includes(search.toLowerCase()) ||
        log.service.toLowerCase().includes(search.toLowerCase());

      const matchesLevel =
        levelFilter === "All Levels" || log.level === levelFilter;

      const matchesService =
        serviceFilter === "All Services" ||
        log.service === serviceFilter;

      return matchesSearch && matchesLevel && matchesService;
    });
  }, [search, levelFilter, serviceFilter]);

  const errorCount = logs.filter((log) => log.level === "ERROR").length;
  const warningCount = logs.filter((log) => log.level === "WARNING").length;
  const infoCount = logs.filter((log) => log.level === "INFO").length;

  const exportLogs = () => {
    const content = logs
      .map(
        (log) =>
          `${log.time} | ${log.level} | ${log.service} | ${log.id} | ${log.message}`
      )
      .join("\n");

    const blob = new Blob([content], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "system-logs.txt";
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="system-logs-page">

      {/* SIDEBAR */}
      <aside className="system-logs-sidebar">

        <div className="system-logs-brand">
          <div className="system-logs-logo">◔</div>
          <h2>Glovalth</h2>
        </div>

        <nav className="system-logs-nav">

          <button onClick={() => setPage("dashboard")}>
            <span>▦</span>
            Dashboard
          </button>

          <button onClick={() => setPage("technicalDashboard")}>
            <span>▣</span>
            Tech Dashboard
          </button>

          <button onClick={() => setPage("supportTickets")}>
            <span>🎫</span>
            Support Tickets
          </button>

          <button onClick={() => setPage("technicalIssues")}>
            <span>⚠</span>
            Technical Issues
          </button>

          <button onClick={() => setPage("systemMonitoring")}>
            <span>〽</span>
            System Monitoring
          </button>

          <button
            className="active"
            onClick={() => setPage("systemLogs")}
          >
            <span>▤</span>
            System Logs
          </button>

          <button onClick={() => setPage("knowledgeBase")}>
            <span>▥</span>
            Knowledge Base
          </button>

        </nav>

        <div className="system-logs-role">
          <small>Role</small>
          <strong>Tech Support</strong>
        </div>

      </aside>

      {/* MAIN */}
      <main className="system-logs-main">

        {/* TOP BAR */}
        <header className="system-logs-topbar">

          <div className="system-logs-search">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search customers, tickets, issues..."
            />
          </div>

          <div className="system-logs-user">

            <span className="system-notification">
              ♧
              <b>3</b>
            </span>

            <div className="system-user-circle">
              ♙
            </div>

            <span>⌄</span>

          </div>

        </header>

        {/* CONTENT */}
        <section className="system-logs-content">

          {/* HEADER */}
          <div className="system-logs-heading">

            <div>
              <h1>System Logs</h1>
              <p>
                Search and analyze system logs and errors
              </p>
            </div>

            <button
              className="export-button"
              onClick={exportLogs}
            >
              ↓
              Export Logs
            </button>

          </div>

          {/* STAT CARDS */}
          <div className="log-stat-grid">

            <div className="log-stat-card">

              <div>
                <span>Total Logs</span>
                <strong>{logs.length}</strong>
              </div>

              <div className="log-stat-icon teal">
                ▤
              </div>

            </div>

            <div className="log-stat-card">

              <div>
                <span>Errors</span>
                <strong className="error-number">
                  {errorCount}
                </strong>
              </div>

              <div className="log-stat-icon red">
                !
              </div>

            </div>

            <div className="log-stat-card">

              <div>
                <span>Warnings</span>
                <strong className="warning-number">
                  {warningCount}
                </strong>
              </div>

              <div className="log-stat-icon yellow">
                ⚠
              </div>

            </div>

            <div className="log-stat-card">

              <div>
                <span>Info</span>
                <strong className="info-number">
                  {infoCount}
                </strong>
              </div>

              <div className="log-stat-icon teal">
                i
              </div>

            </div>

          </div>

          {/* FILTERS */}
          <div className="log-filter-box">

            <div className="log-search-input">
              <span>⌕</span>

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search logs by ID, message, or service..."
              />
            </div>

            <select
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value)}
            >
              <option>All Levels</option>
              <option>ERROR</option>
              <option>WARNING</option>
              <option>INFO</option>
            </select>

            <select
              value={serviceFilter}
              onChange={(e) => setServiceFilter(e.target.value)}
            >
              <option>All Services</option>
              <option>Backend API</option>
              <option>File Storage</option>
              <option>Integration Service</option>
              <option>Notification Service</option>
              <option>Mobile App</option>
              <option>Authentication Service</option>
            </select>

          </div>

          {/* LOG LIST */}
          <section className="logs-container">

            <h2>
              Log Entries ({filteredLogs.length})
            </h2>

            <div className="logs-list">

              {filteredLogs.map((log) => (

<div
key={log.id}
className={`log-entry ${log.level.toLowerCase()}`}
onClick={() => setSelectedLog(log)}
>

                  <div className="log-entry-top">

                    <div className="log-entry-left">

                      <span
                        className={`level-badge ${log.level.toLowerCase()}`}
                      >
                        {log.level}
                      </span>

                      <span className="log-id">
                        {log.id}
                      </span>

                      <span className="service-badge">
                        {log.service}
                      </span>

                    </div>

                    <span
                      className={`log-symbol ${log.level.toLowerCase()}`}
                    >
                      {log.level === "ERROR"
                        ? "!"
                        : log.level === "WARNING"
                        ? "⚠"
                        : "i"}
                    </span>

                  </div>

                  <p className="log-message">
                    {log.message}
                  </p>

                  <div className="log-meta">

                    <span>{log.time}</span>

                    <span>
                      Request: {log.request}
                    </span>

                    {log.user && (
                      <span>
                        User: {log.user}
                      </span>
                    )}

                  </div>

                </div>

              ))}

              {filteredLogs.length === 0 && (
                <div className="no-logs">
                  No logs found.
                </div>
              )}

            </div>

          </section>

        </section>

      </main>
      {selectedLog && (
  <div
    className="log-modal-overlay"
    onClick={() => setSelectedLog(null)}
  >
    <div
      className="log-modal"
      onClick={(e) => e.stopPropagation()}
    >

      <button
        className="log-modal-close"
        onClick={() => setSelectedLog(null)}
      >
        ×
      </button>

      <div className="log-modal-title">
        <span className="log-modal-document">
          ▤
        </span>

        <h2>
          Log Details: {selectedLog.id}
        </h2>
      </div>

      <div className="log-modal-badges">

        <span
          className={`level-badge ${selectedLog.level.toLowerCase()}`}
        >
          {selectedLog.level}
        </span>

        <span className="service-badge">
          {selectedLog.service}
        </span>

      </div>

      <div className="log-detail-section">
        <h3>Timestamp</h3>
        <p className="log-detail-value">
          {selectedLog.time}
        </p>
      </div>

      <div className="log-detail-section">
        <h3>Message</h3>

        <p className="log-detail-message">
          {selectedLog.message}
        </p>
      </div>

      <div className="log-detail-section">
        <h3>Stack Trace</h3>

        <pre className="stack-trace">
          {selectedLog.stackTrace ||
            `at ${selectedLog.service.replace(
              /\s/g,
              ""
            )}.process (service.js:120)
at RequestHandler.execute (request.js:84)
at ApplicationController.handle (controller.js:42)`}
        </pre>
      </div>

      <div className="log-detail-section">
        <h3>Request ID</h3>

        <p className="log-detail-value">
          {selectedLog.request}
        </p>
      </div>

      {selectedLog.user && (
        <div className="log-detail-section">
          <h3>User ID</h3>

          <p className="log-detail-value">
            {selectedLog.user}
          </p>
        </div>
      )}

      <div className="log-modal-actions">

        <button
          className="create-issue-button"
          onClick={() => {
            alert(
              `Issue created from ${selectedLog.id}`
            );
          }}
        >
          Create Issue from Log
        </button>

        <button
          className="export-log-button"
          onClick={() => {
            const content =
              `${selectedLog.time}\n` +
              `${selectedLog.level} | ${selectedLog.service}\n\n` +
              `${selectedLog.message}\n\n` +
              `Request ID: ${selectedLog.request}\n` +
              `User ID: ${selectedLog.user || "N/A"}\n\n` +
              `Stack Trace:\n` +
              `${selectedLog.stackTrace || "N/A"}`;

            const blob = new Blob([content], {
              type: "text/plain",
            });

            const url =
              URL.createObjectURL(blob);

            const link =
              document.createElement("a");

            link.href = url;
            link.download =
              `${selectedLog.id}.txt`;

            link.click();

            URL.revokeObjectURL(url);
          }}
        >
          ↓
          Export Log
        </button>

      </div>

    </div>
  </div>
)}

    </div>
  );
}

export default SystemLogs;
