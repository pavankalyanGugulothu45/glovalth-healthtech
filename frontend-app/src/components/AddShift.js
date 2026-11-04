
import { useState } from "react";
import "./AddShift.css";

function AddShift({ onClose, onSave }) {
  const [form, setForm] = useState({
    employee_name: "",
    role: "",
    location: "",
    shift_type: "Morning",
    date: "",
    start_time: "",
    end_time: "",
    break_minutes: 30,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]:
        name === "break_minutes" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.start_time === form.end_time) {
      setError("Start time and end time cannot be the same.");
      return;
    }

    if (form.break_minutes < 0) {
      setError("Break cannot be negative.");
      return;
    }

    setLoading(true);

    try {
      await onSave(form);
      onClose();
    } catch (err) {
      setError(err.message || "Unable to save shift.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-shift-overlay">
      <div className="add-shift-modal">

        <div className="add-shift-header">
          <h2>➕ Add New Shift</h2>

          <button
            type="button"
            onClick={onClose}
            disabled={loading}
          >
            ✕
          </button>
        </div>

        {error && (
          <p className="add-shift-error">{error}</p>
        )}

        <form onSubmit={handleSubmit}>

          <label>Employee Name</label>
          <input
            type="text"
            name="employee_name"
            value={form.employee_name}
            onChange={handleChange}
            placeholder="Enter employee name"
            required
          />

          <label>Role</label>
          <input
            type="text"
            name="role"
            value={form.role}
            onChange={handleChange}
            placeholder="e.g. Senior Carer"
            required
          />

          <label>Location</label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="e.g. Building A"
            required
          />

          <label>Shift Type</label>
          <select
            name="shift_type"
            value={form.shift_type}
            onChange={handleChange}
          >
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
            <option value="Night">Night</option>
          </select>

          <label>Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />

          <div className="add-shift-time-row">

            <div>
              <label>Start Time</label>
              <input
                type="time"
                name="start_time"
                value={form.start_time}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>End Time</label>
              <input
                type="time"
                name="end_time"
                value={form.end_time}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <label>Break (minutes)</label>
          <input
            type="number"
            name="break_minutes"
            min="0"
            value={form.break_minutes}
            onChange={handleChange}
            required
          />

          <div className="add-shift-actions">

            <button
              type="button"
              className="cancel-shift-btn"
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-shift-btn"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save Shift"}
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}

export default AddShift;
