import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">

      <div className="navbar-left">

        <input
          type="text"
          placeholder="🔍 Search customers, tickets, issues..."
          className="navbar-search"
        />

      </div>

      <div className="navbar-right">

        <span className="role-badge">
          Super Admin
        </span>

        <div className="notification">

          🔔

          <span className="notification-badge">
            3
          </span>

        </div>

        <div className="profile">

          <div className="profile-avatar">
            J
          </div>

          <div className="profile-info">

            <h4>pavankalyan</h4>

            <small>
              admin@glovalth.com
            </small>

          </div>

          <span className="dropdown">
            ▼
          </span>

        </div>

      </div>

    </div>
  );
}

export default Navbar;