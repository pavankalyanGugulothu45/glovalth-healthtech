import "./StatsCards.css";

function StatsCards() {
  return (
    <div className="stats-grid">

      <div className="stat-card total">
        <div className="stat-icon">📅</div>
        <div className="stat-number">7</div>
        <div className="stat-title">Total Shifts</div>
      </div>

      <div className="stat-card ok">
        <div className="stat-icon">✅</div>
        <div className="stat-number">5</div>
        <div className="stat-title">OK Shifts</div>
      </div>

      <div className="stat-card warning">
        <div className="stat-icon">⚠️</div>
        <div className="stat-number">1</div>
        <div className="stat-title">Warnings</div>
      </div>

      <div className="stat-card conflict">
        <div className="stat-icon">❌</div>
        <div className="stat-number">1</div>
        <div className="stat-title">Conflicts</div>
      </div>

      <div className="stat-card hours">
        <div className="stat-icon">⏰</div>
        <div className="stat-number">50.5</div>
        <div className="stat-title">Total Hours</div>
      </div>

    </div>
  );
}

export default StatsCards;
