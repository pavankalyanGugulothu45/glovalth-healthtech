
function StaffList({ user, onBack }) {

  // ✅ SAFE ADMIN CHECK (case-insensitive)
  const isAdmin = user?.staffId?.toLowerCase().startsWith("admin");

  // ✅ DEBUG (optional - you can remove later)
  console.log("Logged User:", user);
  console.log("Is Admin:", isAdmin);

  // ❌ ACCESS DENIED
  if (!isAdmin) {
    return (
      <div className="staff-wrap">
        <h2>Access Denied</h2>
        <p>Only admin can view staff accounts.</p>
        <button onClick={onBack}>Back</button>
      </div>
    );
  }

  // ✅ GET STAFF DATA
  const staffAccounts =
    JSON.parse(localStorage.getItem("staffAccounts")) || [];

  return (
    <div className="staff-wrap">

      {/* HEADER */}
      <div className="staff-header">
        <h2>👥 Staff Accounts</h2>
        <button onClick={onBack}>⬅ Back</button>
      </div>

      {/* TABLE */}
      <table className="staff-table">
        <thead>
          <tr>
            <th>Staff ID</th>
            <th>Name</th>
            <th>Password</th>
          </tr>
        </thead>

        <tbody>
          {staffAccounts.map((staff, index) => (
            <tr key={index}>
              <td>{staff.staffId}</td>
              <td>{staff.staffName}</td>
              <td>{staff.password}</td>
            </tr>
          ))}

          {staffAccounts.length === 0 && (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                No staff accounts found
              </td>
            </tr>
          )}
        </tbody>
      </table>

    </div>
  );
}

export default StaffList;