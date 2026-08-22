import { useState } from "react";
import "./EditShift.css";

function EditShift({ shift, onClose }) {
  const [form, setForm] = useState({
    name: shift?.name || "",
    location: shift?.location || "",
    type: shift?.type || "Morning",
    date: shift?.date || "",
    start: shift?.time?.split(" - ")[0] || "",
    end: shift?.time?.split(" - ")[1] || "",
    breakTime: shift?.break || "30 min",
    notes: "",
  });

  const changeValue = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <div className="edit-overlay">
      <div className="edit-modal">

        {/* Header */}
        <div className="edit-header">
          <div>
            <h2>Edit Shift</h2>
            <p>Schedule employee shift</p>
          </div>

          <button className="close-btn" onClick={onClose}>
            ✖
          </button>
        </div>

        {/* Employee */}
        <div className="form-group">
          <label>Employee *</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) =>
              changeValue("name", e.target.value)
            }
          />
        </div>

        {/* Location */}
        <div className="form-group">
          <label>Location *</label>
          <input
            type="text"
            value={form.location}
            onChange={(e) =>
              changeValue("location", e.target.value)
            }
          />
        </div>

        {/* Shift Type */}
        <div className="form-group">
          <label>Shift Type *</label>

          <div className="type-buttons">
            {["Morning", "Afternoon", "Night", "On-Call"].map(
              (item) => (
                <button
                  key={item}
                  className={
                    form.type === item
                      ? "type-btn active"
                      : "type-btn"
                  }
                  onClick={() =>
                    changeValue("type", item)
                  }
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>

        {/* Date */}
        <div className="form-group">
          <label>Shift Date *</label>
          <input
            type="date"
            value={form.date}
            onChange={(e) =>
              changeValue("date", e.target.value)
            }
          />
        </div>

        {/* Time Row */}
        <div className="row">
          <div className="form-group half">
            <label>Start Time *</label>
            <input
              type="time"
              value={form.start}
              onChange={(e) =>
                changeValue("start", e.target.value)
              }
            />
          </div>

          <div className="form-group half">
            <label>End Time *</label>
            <input
              type="time"
              value={form.end}
              onChange={(e) =>
                changeValue("end", e.target.value)
              }
            />
          </div>
        </div>

        {/* Break */}
        <div className="form-group">
          <label>Break Duration (minutes) *</label>
          <input
            type="text"
            value={form.breakTime}
            onChange={(e) =>
              changeValue("breakTime", e.target.value)
            }
          />
        </div>

        {/* Notes */}
        <div className="form-group">
          <label>Notes (Optional)</label>
          <textarea
            rows="4"
            placeholder="Special instructions, responsibilities, etc."
            value={form.notes}
            onChange={(e) =>
              changeValue("notes", e.target.value)
            }
          />
        </div>

        {/* Footer */}
        <div className="footer-buttons">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>

          <button className="save-btn">
            ✔ Save Changes
          </button>
        </div>

      </div>
    </div>
  );
}

export default EditShift;