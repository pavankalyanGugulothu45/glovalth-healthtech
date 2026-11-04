
import { useEffect, useState } from "react";
import "./ShiftTable.css";
import ShiftDetails from "./ShiftDetails";
import EditShift from "./EditShift";
import { rotaGet, rotaPut, rotaDelete } from "../api";

function ShiftTable({ refreshKey = 0 }) {
  const [shifts, setShifts] = useState([]);
  const [selectedShift, setSelectedShift] = useState(null);
  const [editShift, setEditShift] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadShifts = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await rotaGet("/rota/shifts/");
      setShifts(data);
    } catch (err) {
      console.error("LOAD SHIFTS ERROR:", err);
      setError(err.message || "Unable to load shifts.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadShifts();
  }, [refreshKey]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this shift?")) {
      return;
    }

    try {
      await rotaDelete(`/rota/shifts/${id}/`);
      await loadShifts();
    } catch (err) {
      alert(err.message || "Unable to delete shift.");
    }
  };

  const handleUpdate = async (updatedData) => {
    try {
      await rotaPut(
        `/rota/shifts/${editShift.id}/`,
        updatedData
      );

      setEditShift(null);
      await loadShifts();
    } catch (err) {
      throw new Error(err.message || "Unable to update shift.");
    }
  };

  const filteredShifts = shifts.filter((shift) =>
    (shift.employee_name || "").toLowerCase().includes(search.toLowerCase()) ||
    (shift.role || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="table-box">

      <div className="search-row">
        <input
          type="text"
          placeholder="Search by employee name or role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type="button" onClick={() => setSearch("")}>
          Clear
        </button>
      </div>

      <div className="table-header">
        <h3>Shift Schedule</h3>
        <span>{filteredShifts.length} shifts scheduled</span>
      </div>

      {loading && <p>Loading shifts...</p>}

      {error && (
        <p style={{ color: "red" }}>{error}</p>
      )}

      {!loading && !error && (
        <table>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Role</th>
              <th>Location</th>
              <th>Shift Type</th>
              <th>Date</th>
              <th>Start-End</th>
              <th>Break</th>
              <th>Hours</th>
              <th>Timesheet</th>
              <th>Clock Status</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredShifts.map((shift) => (
              <tr key={shift.id}>
                <td>{shift.employee_name}</td>
                <td>{shift.role}</td>
                <td>{shift.location}</td>
                <td>{shift.shift_type}</td>
                <td>{shift.date}</td>
                <td>
                  {shift.start_time} - {shift.end_time}
                </td>
                <td>{shift.break_minutes} min</td>
                <td>{shift.hours}h</td>
                <td>{shift.timesheet_status}</td>
                <td>{shift.clock_status}</td>

                <td>
                  <span className={`badge ${(shift.status || "").toLowerCase()}`}>
                    {shift.status}
                  </span>
                </td>

                <td className="actions">
                  <button
                    type="button"
                    title="Edit"
                    onClick={() => setEditShift(shift)}
                  >
                    ✏️
                  </button>

                  <button
                    type="button"
                    title="Delete"
                    onClick={() => handleDelete(shift.id)}
                  >
                    🗑️
                  </button>

                  <button
                    type="button"
                    title="View"
                    onClick={() => setSelectedShift(shift)}
                  >
                    👁️
                  </button>
                </td>
              </tr>
            ))}

            {filteredShifts.length === 0 && (
              <tr>
                <td colSpan="12" style={{ textAlign: "center" }}>
                  No shifts found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}

      {selectedShift && (
        <ShiftDetails
          shift={selectedShift}
          onClose={() => setSelectedShift(null)}
        />
      )}

      {editShift && (
        <EditShift
          shift={editShift}
          onClose={() => setEditShift(null)}
          onSave={handleUpdate}
        />
      )}

    </div>
  );
}

export default ShiftTable;
