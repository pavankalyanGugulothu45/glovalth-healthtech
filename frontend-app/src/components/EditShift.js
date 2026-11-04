
import { useState } from "react";
import "./EditShift.css";

function EditShift({ shift, onClose, onSave }) {
  const [form, setForm] = useState({
    employee_name: shift?.employee_name || "",
    role: shift?.role || "",
    location: shift?.location || "",
    shift_type: shift?.shift_type || "Morning",
    date: shift?.date || "",
    start_time: shift?.start_time || "",
    end_time: shift?.end_time || "",
    break_minutes: shift?.break_minutes ?? 30,
    timesheet_status: shift?.timesheet_status || "Pending",
    clock_status: shift?.clock_status || "Pending",
    status: shift?.status || "OK",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const changeValue = (field, value) => {
    setForm((previous) => ({
      ...previous,
      [field]: field === "break_minutes" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.start_time === form.end_time) {
      setError("Start and end times cannot be the same.");
      return;
    }

    if (form.break_minutes < 0) {
      setError("Break cannot be negative.");
      return;
    }

    setLoading(true);

    try {
      await onSave(form);
    } catch (err) {
      setError(err.message || "Unable to update shift.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="edit-overlay">
      <div className="edit-modal">

        <div className="edit-header">
          <div>
            <h2>Edit Shift</h2>
            <p>Update employee shift details</p>
          </div>

          <button
            className="close-btn"
            type="button"
            onClick={onClose}
            disabled={loading}
          >
            ✖
          </button>
        </div>

        {error && (
          <p style={{ color: "red" }}>{error}</p>
        )}

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Employee Name *</label>
            <input
              type="text"
              value={form.employee_name}
              onChange={(e) =>
                changeValue("employee_name", e.target.value)
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Role *</label>
            <input
              type="text"
              value={form.role}
              onChange={(e) =>
                changeValue("role", e.target.value)
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Location *</label>
            <input
              type="text"
              value={form.location}
              onChange={(e) =>
                changeValue("location", e.target.value)
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Shift Type *</label>
            <select
              value={form.shift_type}
              onChange={(e) =>
                changeValue("shift_type", e.target.value)
              }
            >
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
              <option value="Night">Night</option>
            </select>
          </div>

          <div className="form-group">
            <label>Shift Date *</label>
            <input
              type="date"
              value={form.date}
              onChange={(e) =>
                changeValue("date", e.target.value)
              }
              required
            />
          </div>

          <div className="row">
            <div className="form-group half">
              <label>Start Time *</label>
              <input
                type="time"
                value={form.start_time}
                onChange={(e) =>
                  changeValue("start_time", e.target.value)
                }
                required
              />
            </div>

            <div className="form-group half">
              <label>End Time *</label>
              <input
                type="time"
                value={form.end_time}
                onChange={(e) =>
                  changeValue("end_time", e.target.value)
                }
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Break Duration (minutes)</label>
            <input
              type="number"
              min="0"
              value={form.break_minutes}
              onChange={(e) =>
                changeValue("break_minutes", e.target.value)
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Timesheet Status</label>
            <select
              value={form.timesheet_status}
              onChange={(e) =>
                changeValue("timesheet_status", e.target.value)
              }
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Approved">Approved</option>
              <option value="Issue">Issue</option>
            </select>
          </div>

          <div className="form-group">
            <label>Clock Status</label>
            <select
              value={form.clock_status}
              onChange={(e) =>
                changeValue("clock_status", e.target.value)
              }
            >
              <option value="Pending">Pending</option>
              <option value="Clocked In">Clocked In</option>
              <option value="Clocked Out">Clocked Out</option>
              <option value="Late">Late</option>
              <option value="No Show">No Show</option>
            </select>
          </div>

          <div className="form-group">
            <label>Shift Status</label>
            <select
              value={form.status}
              onChange={(e) =>
                changeValue("status", e.target.value)
              }
            >
              <option value="OK">OK</option>
              <option value="Warning">Warning</option>
              <option value="Conflict">Conflict</option>
            </select>
          </div>

          <div className="footer-buttons">
            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-btn"
              disabled={loading}
            >
              {loading ? "Saving..." : "✔ Save Changes"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default EditShift;
