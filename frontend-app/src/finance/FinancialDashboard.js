
import "./FinancialDashboard.css";

function FinancialDashboard({ setPage }) {
  return (
    <div className="finance-layout">

      <div className="finance-sidebar">

        <h3>FINANCIAL MANAGEMENT</h3>

        <button className="finance-active">
          💰 Financial Dashboard
        </button>

        <button onClick={() => setPage("subscriptions")}>
  📦 Subscriptions
</button>
<button onClick={() => setPage("invoices")}>
  🧾 Invoices
</button>
<button onClick={() => setPage("payments")}>
  💳 Payments
</button>
<button onClick={() => setPage("plans")}>
  📋 Plans
</button>

      </div>

      <div className="finance-content">

        <div className="finance-header">

          <div>

            <button
              className="back-btn"
              onClick={() => setPage("dashboard")}
            >
              ← Back to Dashboard
            </button>

            <h1>Financial Dashboard</h1>

            <p>
              Revenue and Subscription Management
            </p>

          </div>

          <button className="export-btn">
            Export Report
          </button>

        </div>

        {/* KPI CARDS */}

        <div className="kpi-grid">

          <div className="kpi-card">
            <span>Monthly Revenue</span>
            <h2>£91,000</h2>
            <p>↗ +8.5% this month</p>
          </div>

          <div className="kpi-card">
            <span>Annual Revenue</span>
            <h2>£1.09M</h2>
            <p>↗ +12.3% this year</p>
          </div>

          <div className="kpi-card">
            <span>Subscriptions</span>
            <h2>75</h2>
            <p>↗ +8.7%</p>
          </div>

          <div className="kpi-card">
            <span>Pending Payments</span>
            <h2>12</h2>
            <p>£8,497 overdue</p>
          </div>

        </div>

        {/* CHARTS */}

        <div className="chart-row">

          <div className="chart-card">

            <h3>Revenue Growth</h3>

            <div className="chart-placeholder">
              Revenue Chart Area
            </div>

          </div>

          <div className="chart-card">

            <h3>Plan Distribution</h3>

            <div className="donut-chart">
              45%
            </div>

          </div>

        </div>

        {/* INVOICES + RENEWALS */}

        <div className="bottom-row">

          <div className="invoice-card">

            <div className="section-header">
              <h3>Recent Invoices</h3>
              <button className="view-btn">
                View All
              </button>
            </div>

            <div className="invoice-box">
              <div>
                <h4>INV-1045</h4>
                <p>Sunrise Care Home</p>
              </div>
              <span>£2,499</span>
            </div>

            <div className="invoice-box">
              <div>
                <h4>INV-1046</h4>
                <p>Green Valley Health</p>
              </div>
              <span>£1,299</span>
            </div>

            <div className="invoice-box">
              <div>
                <h4>INV-1047</h4>
                <p>Riverside Healthcare</p>
              </div>
              <span>£2,499</span>
            </div>

            <div className="invoice-box">
              <div>
                <h4>INV-1048</h4>
                <p>Oakwood Senior Living</p>
              </div>
              <span>£1,299</span>
            </div>

          </div>

          <div className="renewals-card">

            <div className="section-header">
              <h3>Upcoming Renewals</h3>
              <button className="view-btn">
                View All
              </button>
            </div>

            <div className="renewal-item">
              <strong>Maple Grove Care</strong>
              <span>£1,299</span>
            </div>

            <div className="renewal-item">
              <strong>Harbor View Assisted Living</strong>
              <span>£2,499</span>
            </div>

            <div className="renewal-item">
              <strong>Sunset Senior Care</strong>
              <span>£599</span>
            </div>

          </div>

        </div>

        {/* SUBSCRIPTION GROWTH */}

        <div className="subscription-card">

          <h3>Subscription Growth</h3>

          <div className="growth-placeholder">
            Subscription Growth Chart
          </div>

        </div>

      </div>

    </div>
  );
}

export default FinancialDashboard;