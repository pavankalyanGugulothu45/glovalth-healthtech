import "./LeadPipeline.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function LeadPipeline({ setPage }) {
  return (
    <div className="lead-page">

      <Sidebar
        setPage={setPage}
        currentPage="leadPipeline"
      />

      <div className="lead-content">

        <Navbar />

        {/* Header */}

        <div className="lead-header">

          <div>

            <h1>Lead Pipeline</h1>

            <p>
              Drag and drop leads to move them through the sales pipeline
            </p>

          </div>

          <button className="add-lead-btn">
            + Add Lead
          </button>

        </div>

        {/* KPI Cards */}

        <div className="lead-stats">

          <div className="lead-stat-card blue">

            <span>Total Leads</span>

            <h2>5</h2>

          </div>

          <div className="lead-stat-card green">

            <span>Pipeline Value</span>

            <h2>$208K</h2>

          </div>

          <div className="lead-stat-card purple">

            <span>Avg Lead Score</span>

            <h2>81</h2>

          </div>

          <div className="lead-stat-card orange">

            <span>Qualification Rate</span>

            <h2>20.0%</h2>

          </div>

        </div>

        {/* Search */}

        <div className="lead-search">

          <input
            type="text"
            placeholder="🔍 Search leads by company or contact..."
            className="lead-search-box"
          />

        </div>

        {/* Pipeline */}

        <div className="pipeline-board">

          {/* New Leads */}

          <div className="pipeline-column">

            <div className="column-header blue">

              <h3>New Leads</h3>

              <span>1</span>

            </div>

            <div className="lead-card">

              <div className="lead-top">

                <h4>TechCorp Solutions</h4>

                <span className="score high">92</span>

              </div>

              <p className="contact">
                John Smith • CTO
              </p>

              <p className="email">
                john@techcorp.com
              </p>

              <div className="lead-tags">

                <span className="tag healthcare">
                  Healthcare
                </span>

              </div>

              <h3>$75,000</h3>

              <a href="/">View Details</a>

            </div>

          </div>
                    {/* Contacted */}

                    <div className="pipeline-column">

<div className="column-header teal">

  <h3>Contacted</h3>

  <span>1</span>

</div>

<div className="lead-card">

  <div className="lead-top">

    <h4>MedCare Systems</h4>

    <span className="score medium">85</span>

  </div>

  <p className="contact">
    Sarah Johnson • Director
  </p>

  <p className="email">
    sarah@medcare.com
  </p>

  <div className="lead-tags">

    <span className="tag clinic">
      Clinic
    </span>

  </div>

  <h3>$45,000</h3>

  <a href="/">View Details</a>

</div>

</div>

{/* Qualified */}

<div className="pipeline-column">

<div className="column-header green">

  <h3>Qualified</h3>

  <span>1</span>

</div>

<div className="lead-card">

  <div className="lead-top">

    <h4>City Hospital</h4>

    <span className="score high">95</span>

  </div>

  <p className="contact">
    David Brown • CEO
  </p>

  <p className="email">
    david@cityhospital.com
  </p>

  <div className="lead-tags">

    <span className="tag hospital">
      Hospital
    </span>

  </div>

  <h3>$52,000</h3>

  <a href="/">View Details</a>

</div>

</div>

{/* Proposal Sent */}

<div className="pipeline-column">

<div className="column-header purple">

  <h3>Proposal Sent</h3>

  <span>1</span>

</div>

<div className="lead-card">

  <div className="lead-top">

    <h4>Peaceful Haven Care</h4>

    <span className="score medium">78</span>

  </div>

  <p className="contact">
    William Harris • Manager
  </p>

  <p className="email">
    william@peacefulhaven.com
  </p>

  <div className="lead-tags">

    <span className="tag care">
      Care Home
    </span>

  </div>

  <h3>$38,000</h3>

  <a href="/">View Details</a>

</div>

</div>

{/* Negotiation */}

<div className="pipeline-column">

<div className="column-header orange">

  <h3>Negotiation</h3>

  <span>1</span>

</div>

<div className="lead-card">

  <div className="lead-top">

    <h4>Comfort Care Solutions</h4>

    <span className="score medium">82</span>

  </div>

  <p className="contact">
    Mary Garcia • Founder
  </p>

  <p className="email">
    mary@comfortcare.com
  </p>

  <div className="lead-tags">

    <span className="tag health">
      Healthcare
    </span>

  </div>

  <h3>$41,000</h3>

  <a href="/">View Details</a>

</div>

</div>

{/* Closed Won */}

<div className="pipeline-column">

<div className="column-header darkgreen">

  <h3>Closed Won</h3>

  <span>0</span>

</div>

<div className="lead-card empty-card">

  <p>
    Drop leads here
  </p>

</div>

</div>
</div>

</div>

</div>
);
}

export default LeadPipeline;