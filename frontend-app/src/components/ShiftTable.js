import { useState } from "react";
import "./ShiftTable.css";
import ShiftDetails from "./ShiftDetails";
import EditShift from "./EditShift";

function ShiftTable() {
  const [selectedShift, setSelectedShift] = useState(null);
  const [editShift, setEditShift] = useState(null);
  const [search, setSearch] = useState("");

  const shifts = [
    {
      name: "Sarah Johnson",
      role: "Senior Carer",
      location: "Building A",
      type: "Morning",
      date: "2024-12-28",
      time: "07:00 - 15:00",
      break: "30 min",
      hours: "7.5h",
      timesheet: "Approved",
      clock: "Clocked Out",
      status: "OK",
    },
    {
      name: "Michael Chen",
      role: "Registered Nurse",
      location: "Building A",
      type: "Afternoon",
      date: "2024-12-28",
      time: "14:00 - 22:00",
      break: "30 min",
      hours: "7.5h",
      timesheet: "In Progress",
      clock: "Clocked In",
      status: "OK",
    },
    {
      name: "Emily Watson",
      role: "Healthcare Assistant",
      location: "Building B",
      type: "Morning",
      date: "2024-12-28",
      time: "08:00 - 14:00",
      break: "30 min",
      hours: "5.5h",
      timesheet: "Pending",
      clock: "Pending",
      status: "Warning",
    },
    {
      name: "David Thompson",
      role: "Senior Carer",
      location: "Building C",
      type: "Night",
      date: "2024-12-28",
      time: "22:00 - 07:00",
      break: "30 min",
      hours: "8.5h",
      timesheet: "Pending",
      clock: "Pending",
      status: "OK",
    },
    {
      name: "Lisa Anderson",
      role: "Healthcare Assistant",
      location: "Building A",
      type: "Afternoon",
      date: "2024-12-28",
      time: "15:00 - 22:00",
      break: "30 min",
      hours: "6.5h",
      timesheet: "In Progress",
      clock: "Late",
      status: "OK",
    },
    {
      name: "James Wilson",
      role: "Registered Nurse",
      location: "Building C",
      type: "Morning",
      date: "2024-12-28",
      time: "07:00 - 15:00",
      break: "30 min",
      hours: "7.5h",
      timesheet: "Issue",
      clock: "No Show",
      status: "Conflict",
    },
    {
      name: "Olivia Brown",
      role: "Care Assistant",
      location: "Building D",
      type: "Evening",
      date: "2024-12-28",
      time: "16:00 - 23:00",
      break: "30 min",
      hours: "6.5h",
      timesheet: "Approved",
      clock: "Clocked In",
      status: "OK",
    },
  ];

  const filteredShifts = shifts.filter(
    (shift) =>
      shift.name.toLowerCase().includes(search.toLowerCase()) ||
      shift.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="table-box">

      {/* Search */}
      <div className="search-row">
        <input
          type="text"
          placeholder="Search by employee name or role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={() => setSearch("")}>
          Clear
        </button>
      </div>

      {/* Header */}
      <div className="table-header">
        <h3>Shift Schedule</h3>
        <span>{filteredShifts.length} shifts scheduled</span>
      </div>

      {/* Table */}
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
          {filteredShifts.map((shift, index) => (
            <tr key={index}>
              <td>{shift.name}</td>
              <td>{shift.role}</td>
              <td>{shift.location}</td>
              <td>{shift.type}</td>
              <td>{shift.date}</td>
              <td>{shift.time}</td>
              <td>{shift.break}</td>
              <td>{shift.hours}</td>
              <td>{shift.timesheet}</td>
              <td>{shift.clock}</td>

              <td>
                <span className={`badge ${shift.status.toLowerCase()}`}>
                  {shift.status}
                </span>
              </td>

              <td className="actions">

                {/* EDIT */}
                <span
                  title="Edit"
                  style={{ cursor: "pointer" }}
                  onClick={() => setEditShift(shift)}
                >
                  ✏️
                </span>{" "}

                {/* DELETE */}
                <span title="Delete">🗑️</span>{" "}

                {/* VIEW */}
                <span
                  title="View"
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedShift(shift)}
                >
                  👁️
                </span>

              </td>
            </tr>
          ))}

          {filteredShifts.length === 0 && (
            <tr>
              <td colSpan="12" style={{ textAlign: "center" }}>
                No employees found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* View Popup */}
      {selectedShift && (
        <ShiftDetails
          shift={selectedShift}
          onClose={() => setSelectedShift(null)}
        />
      )}

      {/* Edit Popup */}
      {editShift && (
        <EditShift
          shift={editShift}
          onClose={() => setEditShift(null)}
        />
      )}

    </div>
  );
}

export default ShiftTable;