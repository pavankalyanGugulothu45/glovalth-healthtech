import "./ShiftDetails.css";

function ShiftDetails({ shift, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="details-modal">

        {/* Header */}
        <div className="modal-header">
          <div>
            <h2>📋 Shift Details</h2>
            <p className="employee-subtitle">{shift.name}</p>
          </div>

          <button className="close-btn" onClick={onClose}>
            ✖
          </button>
        </div>

        {/* Employee Information */}
        <div className="card purple">
          <h3>👤 Employee Information</h3>

          <div className="grid">
            <div>
              <label>Name</label>
              <p>{shift.name}</p>
            </div>

            <div>
              <label>Role</label>
              <p>{shift.role}</p>
            </div>

            <div>
              <label>Location</label>
              <p>{shift.location}</p>
            </div>

            <div>
              <label>Employee ID</label>
              <p>EMP001</p>
            </div>
          </div>
        </div>

        {/* Scheduled Shift Details */}
        <div className="card blue">
          <h3>📅 Scheduled Shift Details</h3>

          <div className="grid">
            <div>
              <label>Date</label>
              <p>{shift.date}</p>
            </div>

            <div>
              <label>Shift Type</label>
              <p className="badge orange">{shift.type}</p>
            </div>

            <div>
              <label>Start Time</label>
              <p>{shift.time.split(" - ")[0]}</p>
            </div>

            <div>
              <label>End Time</label>
              <p>{shift.time.split(" - ")[1]}</p>
            </div>

            <div>
              <label>Break Duration</label>
              <p>{shift.break}</p>
            </div>

            <div>
              <label>Scheduled Hours</label>
              <p>{shift.hours}</p>
            </div>

            <div className="full">
              <label>Notes</label>
              <p>Morning medication round</p>
            </div>
          </div>
        </div>

        {/* Clock In / Out Status */}
        <div className="card green">
          <h3>🕒 Clock In/Out Status</h3>

          <div className="grid">
            <div>
              <label>Status</label>
              <p className="badge green-badge">{shift.clock}</p>
            </div>

            <div>
              <label>Clock In</label>
              <p>06:58</p>
            </div>

            <div>
              <label>Clock In Location</label>
              <p>{shift.location} - Main Entrance</p>
            </div>

            <div>
              <label>Clock Out</label>
              <p>15:05</p>
            </div>

            <div className="full">
              <label>Clock Out Location</label>
              <p>{shift.location} - Main Entrance</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="actions-column">
          <button className="btn teal">
            📄 View Linked Timesheet
          </button>

          <button className="btn">
            ✏️ Edit Shift
          </button>

          <button className="btn red">
            🗑 Cancel Shift
          </button>

          <button className="btn">
            📑 Duplicate Shift
          </button>
        </div>

      </div>
    </div>
  );
}

export default ShiftDetails;