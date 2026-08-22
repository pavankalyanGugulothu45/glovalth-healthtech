import { useState } from "react";
import "./Panel.css";

function Settings({ onBack }) {
  const saved = JSON.parse(localStorage.getItem("notifySettings")) || {
    emailAlerts: true,
    systemUpdates: true,
    pastLogs: false,
  };

  const [settings, setSettings] = useState(saved);
  const [msg, setMsg] = useState("");

  const toggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const save = () => {
    localStorage.setItem("notifySettings", JSON.stringify(settings));
    setMsg("✅ Settings saved");
    setTimeout(() => setMsg(""), 1500);
  };

  return (
    <div className="panel-wrap">
      <div className="panel-card">
        <div className="panel-head">
          <h2>Notification Settings</h2>
          <button className="panel-btn" onClick={onBack}>
            ← Back
          </button>
        </div>

        <div className="switch-row">
          <label>
            <input
              type="checkbox"
              checked={settings.emailAlerts}
              onChange={() => toggle("emailAlerts")}
            />
            Enable Email Alerts
          </label>
        </div>

        <div className="switch-row">
          <label>
            <input
              type="checkbox"
              checked={settings.systemUpdates}
              onChange={() => toggle("systemUpdates")}
            />
            Receive System Updates
          </label>
        </div>

        <div className="switch-row">
          <label>
            <input
              type="checkbox"
              checked={settings.pastLogs}
              onChange={() => toggle("pastLogs")}
            />
            Store Past Notifications
          </label>
        </div>

        <button className="save-btn" onClick={save}>
          Save Settings
        </button>

        {msg && <p className="msg">{msg}</p>}
      </div>
    </div>
  );
}

export default Settings;
