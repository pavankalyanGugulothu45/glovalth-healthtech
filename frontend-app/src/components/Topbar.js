import "./Topbar.css";

function Topbar() {
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
        <button className="add-btn">
          + Add Shift
        </button>

        <button className="auto-btn">
          Auto-Generate
        </button>

        <button className="publish-btn">
          Publish Rota
        </button>

        <button className="export-btn">
          Export
        </button>
      </div>

    </div>
  );
}

export default Topbar;
