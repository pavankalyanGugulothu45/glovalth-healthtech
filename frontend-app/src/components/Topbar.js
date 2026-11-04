
import "./Topbar.css";

function Topbar({ onAddShift }) {
  return (
    <div className="topbar">

      <div className="topbar-left">
        <button>◀</button>
        <button>📅 Dec 28, 2025</button>
        <button>▶</button>

        <button>Today</button>
        <button>Day</button>
        <button className="active-view">Week</button>
        <button>Month</button>

        <div className="coverage-box">
          85% Coverage
        </div>
      </div>

      <div className="topbar-right">

        <button
          className="add-btn"
          onClick={onAddShift}
          type="button"
        >
          + Add Shift
        </button>

        <button className="auto-btn" type="button">
          Auto-Generate
        </button>

        <button className="publish-btn" type="button">
          Publish Rota
        </button>

        <button className="export-btn" type="button">
          Export
        </button>

      </div>

    </div>
  );
}

export default Topbar;
