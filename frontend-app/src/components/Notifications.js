import { useState } from "react";
import "./Panel.css";

function Notifications({ onBack }) {
  const [tab, setTab] = useState("current");

  const notifications = [
    {
      id: 1,
      type: "Emergency",
      message: "Emergency call from ICU – Bed 5",
      time: "Now",
      status: "Pending",
      level: "danger",
    },
    {
      id: 2,
      type: "Technical",
      message: "Vitals monitor not responding – Room 12",
      time: "10 mins ago",
      status: "Pending",
      level: "warning",
    },
    {
      id: 3,
      type: "Leave",
      message: "Leave request from Care Assistant (Anita)",
      time: "1 hour ago",
      status: "Pending",
      level: "info",
    },
  ];

  return (
    <div className="panel-wrap">
      <div className="panel-card">

        {/* Header */}
        <div className="panel-head">
          <h2>Notifications</h2>
          <button className="panel-btn" onClick={onBack}>
            ← Back
          </button>
        </div>

        {/* Tabs */}
        <div className="tab-row">
          <button
            className={`tab-btn ${tab === "current" ? "active" : ""}`}
            onClick={() => setTab("current")}
          >
            Current
          </button>
          <button
            className={`tab-btn ${tab === "past" ? "active" : ""}`}
            onClick={() => setTab("past")}
          >
            Past
          </button>
          <button
            className={`tab-btn ${tab === "updates" ? "active" : ""}`}
            onClick={() => setTab("updates")}
          >
            Updates
          </button>
        </div>

        {/* CURRENT */}
        {tab === "current" && (
          <div>
            {notifications.map((n) => (
              <div key={n.id} className={`notify-card ${n.level}`}>
                <div>
                  <h4>{n.type}</h4>
                  <p>{n.message}</p>
                  <small>{n.time}</small>
                  <div className={`status ${n.status.toLowerCase()}`}>
                    {n.status}
                  </div>
                </div>

                <div>
                  {n.type === "Leave" ? (
                    <>
                      <button className="btn-approve">Approve</button>
                      <button className="btn-reject">Reject</button>
                    </>
                  ) : (
                    <button className="btn-reply">Mark Resolved</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* PAST */}
        {tab === "past" && (
          <div>
            <div className="notify-card info">
              <h4>Leave Request</h4>
              <p>Care Assistant leave request</p>
              <small>1 month ago</small>
              <div className="status approved">Resolved</div>
            </div>

            <div className="notify-card warning">
              <h4>Technical Issue</h4>
              <p>System maintenance issue</p>
              <small>3 weeks ago</small>
              <div className="status expired">Expired</div>
            </div>
          </div>
        )}

        {/* UPDATES */}
        {tab === "updates" && (
          <div className="updates-grid">
            <div className="update-card">
              <h4>🔐 Admin Access Updates</h4>
              <ul>
                <li>Main dashboard access updated</li>
                <li>Rota management improvements</li>
                <li>Admin control enhanced</li>
              </ul>
            </div>

            <div className="update-card">
              <h4>👤 User Access Updates</h4>
              <ul>
                <li>Document management updates</li>
                <li>Completion tracking improved</li>
                <li>User permission control updated</li>
              </ul>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Notifications;

