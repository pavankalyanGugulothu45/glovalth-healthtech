import "./Plans.css";

function Plans({ setPage }) {
  return (
    <div className="plans-page">

      {/* Sidebar */}

      <div className="plans-sidebar">

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

        <button onClick={() => setPage("payments")}>
          💳 Payments
        </button>

        <button
  className="active"
  onClick={() => setPage("plans")}
>
  📋 Plans
</button>

      </div>

      {/* Main Content */}

      <div className="plans-content">

        <div className="plans-header">

          <div>

            <button
              className="back-btn"
              onClick={() => setPage("finance")}
            >
              ← Back to Dashboard
            </button>

            <h1>Subscription Plans</h1>

            <p>
              Create and manage pricing tiers for your services
            </p>

          </div>

          <button className="create-btn">
            + Create Plan
          </button>

        </div>

        {/* KPI */}

        <div className="kpi-grid">

          <div className="kpi-card">

            <span>Total Plans</span>

            <h2>3</h2>

            <small>Available Plans</small>

          </div>

          <div className="kpi-card">

            <span>Total Subscribers</span>

            <h2>75</h2>

            <small>Across All Plans</small>

          </div>

          <div className="kpi-card">

            <span>Monthly Revenue</span>

            <h2>£95,825</h2>

            <small>Current Revenue</small>

          </div>

        </div>
              {/* PLANS */}

      <div className="plans-grid">

{/* BASIC */}

<div className="plan-card">

  <div className="plan-icon">⭐</div>

  <h2>Basic</h2>

  <p className="plan-desc">
    Perfect for small practices and clinics
  </p>

  <h1 className="price">
    £599 <span>/month</span>
  </h1>

  <span className="status active">Active</span>

  <div className="plan-info">

    <div>
      <span>Subscribers</span>
      <strong>28</strong>
    </div>

    <div>
      <span>Monthly Revenue</span>
      <strong>£16,772</strong>
    </div>

    <div>
      <span>Max Users</span>
      <strong>5</strong>
    </div>

  </div>

  <h4>FEATURES INCLUDED:</h4>

  <ul>

    <li>✓ Up to 50 patients</li>

    <li>✓ Basic reporting</li>

    <li>✓ Email support</li>

    <li>✓ Mobile app access</li>

    <li>✓ 5 GB storage</li>

  </ul>

  <div className="plan-buttons">

    <button className="edit-btn">
      ✏ Edit
    </button>

    <button className="delete-btn">
      🗑
    </button>

  </div>

</div>

{/* PROFESSIONAL */}

<div className="plan-card popular">

  <div className="popular-tag">
    Most Popular
  </div>

  <div className="plan-icon">⚡</div>

  <h2>Professional</h2>

  <p className="plan-desc">
    Ideal for growing healthcare organizations
  </p>

  <h1 className="price">
    £1299 <span>/month</span>
  </h1>

  <span className="status active">Active</span>

  <div className="plan-info">

    <div>
      <span>Subscribers</span>
      <strong>32</strong>
    </div>

    <div>
      <span>Monthly Revenue</span>
      <strong>£41,568</strong>
    </div>

    <div>
      <span>Max Users</span>
      <strong>20</strong>
    </div>

  </div>

  <h4>FEATURES INCLUDED:</h4>

  <ul>

    <li>✓ Up to 200 patients</li>

    <li>✓ Advanced reporting & analytics</li>

    <li>✓ Priority email & phone support</li>

    <li>✓ Mobile app access</li>

    <li>✓ 50 GB storage</li>

    <li>✓ API Access</li>

    <li>✓ Custom integrations</li>

  </ul>

  <div className="plan-buttons">

    <button className="edit-btn">
      ✏ Edit
    </button>

    <button className="delete-btn">
      🗑
    </button>

  </div>

</div>

{/* ENTERPRISE */}

<div className="plan-card">

  <div className="plan-icon">👑</div>

  <h2>Enterprise</h2>

  <p className="plan-desc">
    Comprehensive solution for large institutions
  </p>

  <h1 className="price">
    £2499 <span>/month</span>
  </h1>

  <span className="status active">Active</span>

  <div className="plan-info">

    <div>
      <span>Subscribers</span>
      <strong>15</strong>
    </div>

    <div>
      <span>Monthly Revenue</span>
      <strong>£37,485</strong>
    </div>

    <div>
      <span>Max Users</span>
      <strong>Unlimited</strong>
    </div>

  </div>

  <h4>FEATURES INCLUDED:</h4>

  <ul>

    <li>✓ Unlimited patients</li>

    <li>✓ Enterprise reporting & analytics</li>

    <li>✓ 24/7 priority support</li>

    <li>✓ Mobile app access</li>

    <li>✓ Unlimited storage</li>

    <li>✓ Full API access</li>

    <li>✓ Custom integrations</li>

    <li>✓ Dedicated account manager</li>

    <li>✓ SLA guarantee</li>

    <li>✓ White-label options</li>

  </ul>

  <div className="plan-buttons">

    <button className="edit-btn">
      ✏ Edit
    </button>

    <button className="delete-btn">
      🗑
    </button>

  </div>

</div>

</div>

      </div>

    </div>
  );
}

export default Plans;
