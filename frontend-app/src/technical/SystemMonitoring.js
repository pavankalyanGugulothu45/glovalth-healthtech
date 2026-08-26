import React from "react";
import "./SystemMonitoring.css";

function SystemMonitoring({ setPage }) {
  const services = [
    {
      name: "API Gateway",
      response: "145ms",
      uptime: "99.98%",
      status: "healthy",
    },
    {
      name: "Database Cluster",
      response: "23ms",
      uptime: "99.99%",
      status: "healthy",
    },
    {
      name: "Notification Service",
      response: "89ms",
      uptime: "99.95%",
      status: "healthy",
    },
    {
      name: "Authentication Service",
      response: "56ms",
      uptime: "99.97%",
      status: "healthy",
    },
    {
      name: "File Storage",
      response: "234ms",
      uptime: "98.5%",
      status: "warning",
    },
    {
      name: "Analytics Service",
      response: "112ms",
      uptime: "99.92%",
      status: "healthy",
    },
  ];

  return (
    <div className="monitoring-page">

      {/* LEFT SIDEBAR */}
      <aside className="monitoring-sidebar">

        <div className="monitoring-brand">
          <div className="monitoring-logo">◔</div>

          <h2>Glovalth</h2>
        </div>

        <nav className="monitoring-nav">

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

          <button
            className="active"
            onClick={() => setPage("systemMonitoring")}
          >
            <span>〽</span>
            System Monitoring
          </button>

          <button onClick={() => setPage("systemLogs")}>
            <span>▤</span>
            System Logs
          </button>

          <button onClick={() => setPage("knowledgeBase")}>
            <span>▥</span>
            Knowledge Base
          </button>

        </nav>

        <div className="monitoring-role">
          <small>Role</small>
          <strong>Tech Support</strong>
        </div>

      </aside>

      {/* MAIN CONTENT */}
      <main className="monitoring-main">

        {/* TOP BAR */}
        <header className="monitoring-topbar">

          <div className="monitoring-search">
            🔍
            <input
              placeholder="Search customers, tickets, issues..."
            />
          </div>

          <div className="monitoring-user">
            <span className="notification">
              ♧
              <b>3</b>
            </span>

            <div className="user-circle">♙</div>

            <span>⌄</span>
          </div>

        </header>

        <section className="monitoring-content">

          {/* TITLE */}
          <div className="monitoring-title">

            <div>
              <h1>System Monitoring</h1>
              <p>Real-time health and performance metrics</p>
            </div>

          </div>

          {/* TOP METRICS */}
          <div className="monitoring-metrics">

            <div className="metric-card selected">

              <div>
                <span>System Status</span>

                <h2 className="healthy-text">
                  Healthy
                </h2>

                <small className="service-pill">
                  All Services Up
                </small>
              </div>

              <div className="metric-icon green">
                ✓
              </div>

            </div>

            <div className="metric-card">

              <div>
                <span>API Response Time</span>
                <h2>145ms</h2>

                <small className="positive">
                  ↘ -12ms
                </small>
              </div>

              <div className="metric-icon teal">
                〽
              </div>

            </div>

            <div className="metric-card">

              <div>
                <span>Error Rate</span>
                <h2>0.3%</h2>

                <small className="positive">
                  ↘ -0.1%
                </small>
              </div>

              <div className="metric-icon orange">
                ⚠
              </div>

            </div>

            <div className="metric-card">

              <div>
                <span>Requests/min</span>
                <h2>3,247</h2>

                <small className="positive">
                  ↗ +8.2%
                </small>
              </div>

              <div className="metric-icon teal">
                ≋
              </div>

            </div>

          </div>

          {/* RESOURCE CARDS */}
          <div className="resource-grid">

            <div className="resource-card">

              <div className="resource-top">
                <div className="resource-icon teal">
                  ⚙
                </div>

                <div>
                  <span>CPU Usage</span>
                  <strong>42%</strong>
                </div>
              </div>

              <div className="progress">
                <div style={{ width: "42%" }} />
              </div>

              <small>Optimal performance</small>

            </div>

            <div className="resource-card">

              <div className="resource-top">
                <div className="resource-icon green">
                  ▤
                </div>

                <div>
                  <span>Memory Usage</span>
                  <strong>68%</strong>
                </div>
              </div>

              <div className="progress">
                <div style={{ width: "68%" }} />
              </div>

              <small>54.4GB of 80GB used</small>

            </div>

            <div className="resource-card">

              <div className="resource-top">
                <div className="resource-icon purple">
                  ▰
                </div>

                <div>
                  <span>Disk Usage</span>
                  <strong>55%</strong>
                </div>
              </div>

              <div className="progress">
                <div style={{ width: "55%" }} />
              </div>

              <small>2.75TB of 5TB used</small>

            </div>

          </div>

          {/* CHARTS */}
          <ChartCard
            title="API Response Time (24h)"
            points={[120, 100, 150, 180, 160, 135]}
            colour="blue"
            labels={["00:00", "04:00", "08:00", "12:00", "16:00", "20:00"]}
          />

          <ChartCard
            title="API Traffic (24h)"
            points={[1200, 800, 2400, 3200, 2800, 1600]}
            colour="teal"
            labels={["00:00", "04:00", "08:00", "12:00", "16:00", "20:00"]}
          />

          <ChartCard
            title="Error Rate (24h)"
            points={[0.2, 0.1, 0.3, 0.4, 0.2, 0.3]}
            colour="orange"
            labels={["00:00", "04:00", "08:00", "12:00", "16:00", "20:00"]}
          />

          {/* SERVICES */}
          <section className="services-card">

            <h2>Services Status</h2>

            <div className="services-list">

              {services.map((service) => (
                <div
                  className="service-row"
                  key={service.name}
                >

                  <div className="service-info">

                    <div
                      className={`service-icon ${service.status}`}
                    >
                      ▤
                    </div>

                    <div>
                      <strong>{service.name}</strong>

                      <small>
                        Response: {service.response}
                      </small>
                    </div>

                  </div>

                  <div className="service-uptime">

                    <span>Uptime</span>
                    <strong>{service.uptime}</strong>

                  </div>

                  <span
                    className={`service-status ${service.status}`}
                  >
                    {service.status}
                  </span>

                </div>
              ))}

            </div>

          </section>

        </section>

      </main>

    </div>
  );
}


/* SIMPLE CHART COMPONENT */
function ChartCard({ title, points, colour, labels }) {

  const max = Math.max(...points);
  const min = Math.min(...points);

  const width = 700;
  const height = 220;

  const getX = (index) =>
    25 + (index * (width - 50)) / (points.length - 1);

  const getY = (value) =>
    height -
    25 -
    ((value - min) / (max - min || 1)) *
      (height - 50);

  const path = points
    .map(
      (value, index) =>
        `${index === 0 ? "M" : "L"} ${getX(index)} ${getY(value)}`
    )
    .join(" ");

  return (
    <section className="chart-card">

      <h2>{title}</h2>

      <div className="chart-container">

        <svg
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio="none"
        >

          {/* GRID */}
          {[0, 1, 2, 3, 4].map((line) => {

            const y =
              25 + line * ((height - 50) / 4);

            return (
              <line
                key={line}
                x1="25"
                y1={y}
                x2={width - 25}
                y2={y}
                className="chart-grid"
              />
            );
          })}

          {/* LINE */}
          <path
            d={path}
            className={`chart-line ${colour}`}
          />

          {/* POINTS */}
          {points.map((value, index) => (
            <circle
              key={index}
              cx={getX(index)}
              cy={getY(value)}
              r="5"
              className={`chart-point ${colour}`}
            />
          ))}

        </svg>

        <div className="chart-labels">

          {labels.map((label) => (
            <span key={label}>{label}</span>
          ))}

        </div>

      </div>

    </section>
  );
}

export default SystemMonitoring;
