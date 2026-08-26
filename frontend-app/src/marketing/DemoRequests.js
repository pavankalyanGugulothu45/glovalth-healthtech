import "./DemoRequests.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function DemoRequests({ setPage }) {
  return (
    <div className="demo-page">

      <Sidebar
        setPage={setPage}
        currentPage="demoRequests"
      />

      <div className="demo-content">

        <Navbar />

        {/* HEADER */}

        <div className="demo-header">

          <div>

            <h1>Demo Requests</h1>

            <p>
              Schedule and manage product demonstration requests
            </p>

          </div>

        </div>

        {/* KPI CARDS */}

        <div className="demo-stats">

          <div className="demo-card pending">

            <span>Pending</span>

            <h2>2</h2>

          </div>

          <div className="demo-card scheduled">

            <span>Scheduled</span>

            <h2>2</h2>

          </div>

          <div className="demo-card completed">

            <span>Completed</span>

            <h2>1</h2>

          </div>

          <div className="demo-card cancelled">

            <span>Cancelled</span>

            <h2>0</h2>

          </div>

        </div>

        {/* Search */}

        <div className="demo-search">

          <input
            type="text"
            placeholder="🔍 Search by company, contact, or ID..."
            className="demo-search-box"
          />

          <select className="demo-filter">

            <option>All Status</option>

            <option>Pending</option>

            <option>Scheduled</option>

            <option>Completed</option>

            <option>Cancelled</option>

          </select>

        </div>

        {/* TABLE */}

        <div className="demo-table">

          <h2>All Demo Requests</h2>

          <table>

            <thead>

              <tr>

                <th>Request ID</th>

                <th>Company & Contact</th>

                <th>Contact Info</th>

                <th>Requested Date/Time</th>

                <th>Lead Score</th>

                <th>Status</th>

                <th>Assigned To</th>

                <th>Actions</th>

              </tr>

            </thead>

            <tbody>
            <tr>
  <td>DEMO-101</td>

  <td>
    <strong>Sunset Elderly Care</strong>
    <br />
    Jennifer Brown
  </td>

  <td>
    jennifer@sunsetcare.com
    <br />
    +1 (555) 789-0123
  </td>

  <td>
    2026-03-22
    <br />
    2:00 PM
  </td>

  <td>
    <span className="score green-score">85</span>
  </td>

  <td>
    <span className="status pending-status">
      Pending
    </span>
  </td>

  <td>Unassigned</td>

  <td>
    <button className="schedule-btn">
      Schedule
    </button>
  </td>
</tr>

<tr>
  <td>DEMO-102</td>

  <td>
    <strong>Silver Springs Nursing</strong>
    <br />
    Robert Taylor
  </td>

  <td>
    robert@silversprings.com
    <br />
    +1 (555) 890-1234
  </td>

  <td>
    2026-03-20
    <br />
    10:00 AM
  </td>

  <td>
    <span className="score yellow-score">72</span>
  </td>

  <td>
    <span className="status scheduled-status">
      Scheduled
    </span>
  </td>

  <td>Sarah Johnson</td>

  <td>
    <button className="join-btn">
      Join Demo
    </button>
  </td>
</tr>

<tr>
  <td>DEMO-103</td>

  <td>
    <strong>Golden Years Living</strong>
    <br />
    Patricia White
  </td>

  <td>
    patricia@goldenyears.com
    <br />
    +1 (555) 901-2345
  </td>

  <td>
    2026-03-15
    <br />
    3:00 PM
  </td>

  <td>
    <span className="score green-score">90</span>
  </td>

  <td>
    <span className="status completed-status">
      Completed
    </span>
  </td>

  <td>Michael Chen</td>

  <td>
    <button className="join-btn">
      Join Demo
    </button>
  </td>
</tr>

<tr>
  <td>DEMO-104</td>

  <td>
    <strong>Peaceful Haven Care</strong>
    <br />
    William Harris
  </td>

  <td>
    william@peacefulhaven.com
    <br />
    +1 (555) 012-3456
  </td>

  <td>
    2026-03-25
    <br />
    11:00 AM
  </td>

  <td>
    <span className="score yellow-score">78</span>
  </td>

  <td>
    <span className="status pending-status">
      Pending
    </span>
  </td>

  <td>Unassigned</td>

  <td>
    <button className="schedule-btn">
      Schedule
    </button>
  </td>
</tr>

<tr>
  <td>DEMO-105</td>

  <td>
    <strong>Comfort Care Solutions</strong>
    <br />
    Mary Garcia
  </td>

  <td>
    mary@comfortcare.com
    <br />
    +1 (555) 123-4567
  </td>

  <td>
    2026-03-19
    <br />
    1:00 PM
  </td>

  <td>
    <span className="score yellow-score">65</span>
  </td>

  <td>
    <span className="status scheduled-status">
      Scheduled
    </span>
  </td>

  <td>David Martinez</td>

  <td>
    <button className="join-btn">
      Join Demo
    </button>
  </td>
</tr>
</tbody>

</table>

</div>

</div>

</div>
);
}

export default DemoRequests;
