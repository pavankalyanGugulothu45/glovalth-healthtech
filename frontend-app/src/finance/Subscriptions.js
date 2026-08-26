
import "./Subscriptions.css";

function Subscriptions({ setPage }) {
  return (
    <div className="subscription-page">

      {/* SIDEBAR */}

      <div className="subscription-sidebar">

        <div className="logo">
          Glovalth
        </div>

        <p className="sidebar-subtitle">
          Financial Management System
        </p>

        <button
          onClick={() => setPage("finance")}
        >
          💰 Financial Dashboard
        </button>

        <button className="active">
          📦 Subscriptions
        </button>

        <button onClick={() => setPage("invoices")}>
  🧾 Invoices
</button>

        <button>
          💳 Payments
        </button>

        <button>
          📋 Plans
        </button>

      </div>

      {/* CONTENT */}

      <div className="subscription-content">

        {/* HEADER */}

        <div className="top-header">

          <div>

            <button
              className="back-btn"
              onClick={() => setPage("finance")}
            >
              ← Back
            </button>

            <h1>
              Subscriptions & Finance
            </h1>

            <p>
              Manage billing, subscriptions and revenue tracking
            </p>

          </div>

          <button className="export-btn">
            Export Report
          </button>

        </div>

        {/* KPI CARDS */}

        <div className="kpi-grid">

          <div className="kpi-card">

            <span>
              Monthly Recurring Revenue
            </span>

            <h2>
              £91,000
            </h2>

            <small>
              +8.5% this month
            </small>

          </div>

          <div className="kpi-card">

            <span>
              Annual Recurring Revenue
            </span>

            <h2>
              £1092K
            </h2>

            <small>
              +12.3% this year
            </small>

          </div>

          <div className="kpi-card">

            <span>
              Active Subscriptions
            </span>

            <h2>
              75
            </h2>

            <small>
              +8.7%
            </small>

          </div>

          <div className="kpi-card">

            <span>
              Expiring This Month
            </span>

            <h2>
              5
            </h2>

            <small>
              Attention Required
            </small>

          </div>

        </div>

        {/* REVENUE TREND */}

        <div className="revenue-card">

          <div className="card-title">

            <h2>
              Revenue Trend
            </h2>

            <button>
              Monthly
            </button>

          </div>

          <div className="chart-area">

            Revenue Trend Chart

          </div>

        </div>

        {/* SEARCH */}

        <div className="search-card">

          <input
            type="text"
            placeholder="Search subscriptions..."
            className="search-box"
          />

        </div>

        {/* TABLE */}

        <div className="table-card">

          <div className="table-top">

            <h2>
              Subscription Management
            </h2>

            <button className="new-btn">
              + New Subscription
            </button>

          </div>

          <table>

            <thead>

              <tr>

                <th>ID</th>

                <th>Company</th>

                <th>Plan</th>

                <th>Amount</th>

                <th>Status</th>

                <th>Next Billing</th>

                <th>Payment</th>

                <th>Action</th>

              </tr>

            </thead>

            <tbody>ok </tbody>
            <tbody>

<tr>

  <td>SUB-001</td>

  <td>Sunrise Care Home</td>

  <td>
    <span className="plan enterprise">
      Enterprise
    </span>
  </td>

  <td>£2,499/mo</td>

  <td>
    <span className="status active">
      Active
    </span>
  </td>

  <td>15/04/2026</td>

  <td>Credit Card ****4532</td>

  <td>
    <button className="manage-btn">
      Manage
    </button>
  </td>

</tr>

<tr>

  <td>SUB-002</td>

  <td>Green Valley Health</td>

  <td>
    <span className="plan professional">
      Professional
    </span>
  </td>

  <td>£1,299/mo</td>

  <td>
    <span className="status active">
      Active
    </span>
  </td>

  <td>22/04/2026</td>

  <td>Credit Card ****7821</td>

  <td>
    <button className="manage-btn">
      Manage
    </button>
  </td>

</tr>

<tr>

  <td>SUB-003</td>

  <td>Oakwood Senior Living</td>

  <td>
    <span className="plan professional">
      Professional
    </span>
  </td>

  <td>£1,299/mo</td>

  <td>
    <span className="status active">
      Active
    </span>
  </td>

  <td>10/05/2026</td>

  <td>ACH Transfer</td>

  <td>
    <button className="manage-btn">
      Manage
    </button>
  </td>

</tr>

<tr>

  <td>SUB-004</td>

  <td>Maple Grove Care</td>

  <td>
    <span className="plan basic">
      Basic
    </span>
  </td>

  <td>£599/mo</td>

  <td>
    <span className="status trial">
      Trial
    </span>
  </td>

  <td>28/03/2026</td>

  <td>Not Set</td>

  <td>
    <button className="manage-btn">
      Manage
    </button>
  </td>

</tr>

<tr>

  <td>SUB-005</td>

  <td>Riverside Healthcare</td>

  <td>
    <span className="plan enterprise">
      Enterprise
    </span>
  </td>

  <td>£2,499/mo</td>

  <td>
    <span className="status active">
      Active
    </span>
  </td>

  <td>05/04/2026</td>

  <td>Invoice</td>

  <td>
    <button className="manage-btn">
      Manage
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

export default Subscriptions;
