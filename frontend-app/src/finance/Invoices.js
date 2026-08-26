import "./Invoices.css";

function Invoices({ setPage }) {
  return (
    <div className="invoice-page">

      {/* Sidebar */}

      <div className="invoice-sidebar">

        <h2>FINANCIAL MANAGEMENT</h2>

        <button onClick={() => setPage("finance")}>
          💰 Financial Dashboard
        </button>

        <button onClick={() => setPage("subscriptions")}>
          📦 Subscriptions
        </button>

        <button className="active">
          🧾 Invoices
        </button>

        <button>
          💳 Payments
        </button>

        <button>
          📋 Plans
        </button>

      </div>

      {/* Main Content */}

      <div className="invoice-content">

        <div className="invoice-header">

          <div>

            <button
              className="back-btn"
              onClick={() => setPage("finance")}
            >
              ← Back to Dashboard
            </button>

            <h1>Invoice Management</h1>

            <p>
              Generate, track and manage customer invoices
            </p>

          </div>

          <div className="header-buttons">

            <button className="export-btn">
              Export
            </button>

            <button className="create-btn">
              + Create Invoice
            </button>

          </div>

        </div>

        {/* KPI Cards */}

        <div className="kpi-grid">

          <div className="kpi-card">
            <span>Total Invoiced</span>
            <h2>£11,293</h2>
            <small>Total Revenue</small>
          </div>

          <div className="kpi-card paid">
            <span>Paid</span>
            <h2>£3,798</h2>
            <small>Received</small>
          </div>

          <div className="kpi-card pending">
            <span>Pending</span>
            <h2>£4,397</h2>
            <small>Awaiting Payment</small>
          </div>

          <div className="kpi-card overdue">
            <span>Overdue</span>
            <h2>£2,499</h2>
            <small>Needs Attention</small>
          </div>

        </div>
              {/* SEARCH */}

      <div className="search-card">

<input
  type="text"
  placeholder="Search by company or invoice number..."
  className="search-box"
/>

<select className="status-filter">

  <option>All Status</option>

  <option>Paid</option>

  <option>Pending</option>

  <option>Overdue</option>

  <option>Draft</option>

</select>

</div>

{/* INVOICE TABLE */}

<div className="table-card">

<div className="table-header">

  <h2>All Invoices</h2>

</div>

<table>

  <thead>

    <tr>

      <th>Invoice #</th>

      <th>Company</th>

      <th>Amount</th>

      <th>Status</th>

      <th>Issue Date</th>

      <th>Due Date</th>

      <th>Days Until Due</th>

      <th>Action</th>

    </tr>

  </thead>

  <tbody>

    <tr>

      <td>INV-1045</td>

      <td>Sunrise Care Home</td>

      <td>£2,499</td>

      <td><span className="badge paid">Paid</span></td>

      <td>2026-03-01</td>

      <td>2026-03-15</td>

      <td className="green">Paid on 2026-03-14</td>

      <td>
        <button className="view-btn">👁</button>
      </td>

    </tr>

    <tr>

      <td>INV-1046</td>

      <td>Green Valley Health</td>

      <td>£1,299</td>

      <td><span className="badge pending">Pending</span></td>

      <td>2026-03-05</td>

      <td>2026-03-20</td>

      <td>2 days</td>

      <td>
        <button className="view-btn">👁</button>
      </td>

    </tr>

    <tr>

      <td>INV-1047</td>

      <td>Riverside Healthcare</td>

      <td>£2,499</td>

      <td><span className="badge overdue">Overdue</span></td>

      <td>2026-02-25</td>

      <td>2026-03-10</td>

      <td className="red">8 days overdue</td>

      <td>
        <button className="view-btn">👁</button>
      </td>

    </tr>

    <tr>

      <td>INV-1048</td>

      <td>Oakwood Senior Living</td>

      <td>£1,299</td>

      <td><span className="badge paid">Paid</span></td>

      <td>2026-03-03</td>

      <td>2026-03-18</td>

      <td className="green">Paid on 2026-03-17</td>

      <td>
        <button className="view-btn">👁</button>
      </td>

    </tr>

    <tr>

      <td>INV-1049</td>

      <td>Maple Grove Care</td>

      <td>£599</td>

      <td><span className="badge pending">Pending</span></td>

      <td>2026-03-10</td>

      <td>2026-03-25</td>

      <td>7 days</td>

      <td>
        <button className="view-btn">👁</button>
      </td>

    </tr>

    <tr>

      <td>INV-1050</td>

      <td>Harbor View Assisted Living</td>

      <td>£2,499</td>

      <td><span className="badge pending">Pending</span></td>

      <td>2026-03-12</td>

      <td>2026-03-27</td>

      <td>9 days</td>

      <td>
        <button className="view-btn">👁</button>
      </td>

    </tr>

    <tr>

      <td>INV-1051</td>

      <td>Sunset Senior Care</td>

      <td>£599</td>

      <td><span className="badge draft">Draft</span></td>

      <td>2026-03-15</td>

      <td>2026-03-30</td>

      <td>12 days</td>

      <td>
        <button className="view-btn">👁</button>
      </td>

    </tr>

  </tbody>

</table>

</div>

      </div>

    </div>
    
  );
}

export default Invoices;
