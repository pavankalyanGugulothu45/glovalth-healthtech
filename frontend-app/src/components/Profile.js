import "./Panel.css";

function Profile({ user, onBack }) {
  return (
    <div className="panel-wrap">
      <div className="panel-card">
        <div className="panel-head">
          <h2>Profile</h2>
          <button className="panel-btn" onClick={onBack}>
            ← Back
          </button>
        </div>

        <div className="profile-box">
          <p><strong>Staff Name:</strong> {user?.staffName}</p>
          <p><strong>Staff ID:</strong> {user?.staffId}</p>
          <p>
            <strong>Role:</strong>{" "}
            {user?.staffId?.startsWith("admin") ? "Admin" : "Staff"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
