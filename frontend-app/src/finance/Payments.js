import "./Payments.css";

function Payments({ setPage }) {
  return (
    <div className="payment-page">

      {/* Sidebar */}

      <div className="payment-sidebar">

        <h2>FINANCIAL MANAGEMENT</h2>

        <button onClick={() => setPage("finance")}>
          💰 Financial Dashboard
        </button>

        <button onClick={() => setPage("subscriptions")}>
          📦 Subscriptions
        </button>

        <button onClick={() => setPage("invoices")}>
          🧾 Invoices
        </button>

        <button
  className="active"
  onClick={() => setPage("payments")}
>
  💳 Payments
</button>

<button onClick={() => setPage("plans")}>
  📋 Plans
</button>

      </div>

      {/* Main Content */}

      <div className="payment-content">

        <div className="payment-header">

          <div>

            <button
              className="back-btn"
              onClick={() => setPage("finance")}
            >
              ← Back to Dashboard
            </button>

            <h1>Payment Management</h1>

            <p>
              Track and manage all payment transactions
            </p>

          </div>

          <button className="export-btn">
            Export Report
          </button>

        </div>

        {/* KPI Cards */}

        <div className="kpi-grid">

          <div className="kpi-card">
            <span>Total Processed</span>
            <h2>£12,592</h2>
            <small>Total Payments</small>
          </div>

          <div className="kpi-card paid">
            <span>Paid</span>
            <h2>£3,798</h2>
            <small>2 Transactions</small>
          </div>

          <div className="kpi-card pending">
            <span>Pending</span>
            <h2>£4,397</h2>
            <small>3 Transactions</small>
          </div>

          <div className="kpi-card failed">
            <span>Failed</span>
            <h2>£3,098</h2>
            <small>2 Transactions</small>
          </div>

          <div className="kpi-card refunded">
            <span>Refunded</span>
            <h2>£1,299</h2>
            <small>1 Transaction</small>
          </div>

        </div>
              {/* PAYMENT TREND */}

      <div className="chart-card">

<div className="chart-header">

  <h2>Payment Trends</h2>

</div>

<div className="chart-placeholder">

  Payment Trends Chart

</div>

</div>

{/* SEARCH */}

<div className="search-card">

<input
  type="text"
  placeholder="Search by company, transaction ID, or invoice..."
  className="search-box"
/>

<select className="status-filter">

  <option>All Status</option>
  <option>Paid</option>
  <option>Pending</option>
  <option>Failed</option>
  <option>Refunded</option>

</select>

<select className="method-filter">

  <option>All Methods</option>
  <option>Credit Card</option>
  <option>ACH Transfer</option>
  <option>Invoice</option>

</select>

</div>

{/* TRANSACTIONS */}

<div className="table-card">

<div className="table-header">

  <h2>Recent Transactions</h2>

</div>

<table>

  <thead>

    <tr>

      <th>Transaction ID</th>
      <th>Company</th>
      <th>Invoice</th>
      <th>Amount</th>
      <th>Payment Method</th>
      <th>Status</th>
      <th>Date</th>

    </tr>

  </thead>

  <tbody>

    <tr>
      <td>TXN-90234</td>
      <td>Sunrise Care Home</td>
      <td>INV-1045</td>
      <td>£2,499</td>
      <td>Credit Card ****4532</td>
      <td><span className="badge paid">Paid</span></td>
      <td>2026-03-14</td>
    </tr>

    <tr>
      <td>TXN-90235</td>
      <td>Green Valley Health</td>
      <td>INV-1046</td>
      <td>£1,299</td>
      <td>Credit Card ****7821</td>
      <td><span className="badge pending">Pending</span></td>
      <td>2026-03-18</td>
    </tr>

    <tr>
      <td>TXN-90236</td>
      <td>Riverside Healthcare</td>
      <td>INV-1047</td>
      <td>£2,499</td>
      <td>Credit Card ****9012</td>
      <td><span className="badge failed">Failed</span></td>
      <td>2026-03-10</td>
    </tr>

    <tr>
      <td>TXN-90237</td>
      <td>Oakwood Senior Living</td>
      <td>INV-1048</td>
      <td>£1,299</td>
      <td>ACH Transfer</td>
      <td><span className="badge paid">Paid</span></td>
      <td>2026-03-17</td>
    </tr>

    <tr>
      <td>TXN-90238</td>
      <td>Maple Grove Care</td>
      <td>INV-1049</td>
      <td>£599</td>
      <td>Credit Card ****3456</td>
      <td><span className="badge pending">Pending</span></td>
      <td>2026-03-18</td>
    </tr>

    <tr>
      <td>TXN-90239</td>
      <td>Harbor View Assisted Living</td>
      <td>INV-1050</td>
      <td>£2,499</td>
      <td>Invoice</td>
      <td><span className="badge pending">Pending</span></td>
      <td>2026-03-18</td>
    </tr>

    <tr>
      <td>TXN-90221</td>
      <td>Sunset Senior Care</td>
      <td>INV-1032</td>
      <td>£1,299</td>
      <td>Credit Card ****8901</td>
      <td><span className="badge refunded">Refunded</span></td>
      <td>2026-03-05</td>
    </tr>

    <tr>
      <td>TXN-90222</td>
      <td>Pine Valley Care Center</td>
      <td>INV-1041</td>
      <td>£599</td>
      <td>Credit Card ****2345</td>
      <td><span className="badge failed">Failed</span></td>
      <td>2026-03-12</td>
    </tr>

  </tbody>

</table>

</div>

      </div>

    </div>
  );
}

export default Payments;
