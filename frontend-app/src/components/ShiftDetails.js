
import "./ShiftDetails.css";

function ShiftDetails({ shift, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="details-modal">

        {/* Header */}
        <div className="modal-header">
          <div>
            <h2>📋 Shift Details</h2>
            <p className="employee-subtitle">
              {shift.employee_name}
            </p>
          </div>

          <button
            className="close-btn"
            type="button"
            onClick={onClose}
          >
            ✖
          </button>
        </div>

        {/* Employee Information */}
        <div className="card purple">
          <h3>👤 Employee Information</h3>

          <div className="grid">
            <div>
              <label>Name</label>
              <p>{shift.employee_name}</p>
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
              <label>Shift ID</label>
              <p>{shift.id}</p>
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
              <p className="badge orange">{shift.shift_type}</p>
            </div>

            <div>
              <label>Start Time</label>
              <p>{shift.start_time}</p>
            </div>

            <div>
              <label>End Time</label>
              <p>{shift.end_time}</p>
            </div>

            <div>
              <label>Break Duration</label>
              <p>{shift.break_minutes} minutes</p>
            </div>

            <div>
              <label>Scheduled Hours</label>
              <p>{shift.hours} hours</p>
            </div>

            <div className="full">
              <label>Shift Status</label>
              <p>{shift.status}</p>
            </div>
          </div>
        </div>

        {/* Clock In / Out Status */}
        <div className="card green">
          <h3>🕒 Clock In/Out Status</h3>

          <div className="grid">
            <div>
              <label>Clock Status</label>
              <p className="badge green-badge">
                {shift.clock_status}
              </p>
            </div>

            <div>
              <label>Timesheet Status</label>
              <p>{shift.timesheet_status}</p>
            </div>

            <div className="full">
              <label>Location</label>
              <p>{shift.location}</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="actions-column">
          <button
            className="btn"
            type="button"
            onClick={onClose}
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}

export default ShiftDetails;
