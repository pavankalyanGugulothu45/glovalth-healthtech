import { useState, useEffect } from "react";
import "./Campaigns.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Campaigns({ setPage }) {
  const [editingId, setEditingId] = useState(null);
const [isEditing, setIsEditing] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const [campaignName, setCampaignName] = useState("");

  const [campaignType, setCampaignType] = useState("");

  const [budget, setBudget] = useState("");
  const [campaigns, setCampaigns] = useState([]);

useEffect(() => {
  fetchCampaigns();
}, []);

const fetchCampaigns = async () => {
  const response = await fetch(
    "https://glovalth-healthtech-1.onrender.com/api/marketing/campaigns/"
  );

  const data = await response.json();

  setCampaigns(data);
};

  return (
    <div className="campaign-page">

      <Sidebar
        setPage={setPage}
        currentPage="campaigns"
      />

      <div className="campaign-content">

        <Navbar />

        <div className="campaign-header">

          <div>

            <h1>Marketing Campaigns</h1>

            <p>
              Create, manage and track all marketing campaigns.
            </p>

          </div>

          <div className="header-buttons">

            <button className="export-btn">
              Export
            </button>

            <button
                className="create-btn"
               onClick={() => setShowPopup(true)}
                >
                + Create Campaign
             </button>

          </div>

        </div>
                {/* KPI CARDS */}

                <div className="campaign-kpis">

<div className="kpi-card purple">

  <span>Active Campaigns</span>

  <h2>4</h2>

  <small>Currently Running</small>

</div>

<div className="kpi-card blue">

  <span>Total Budget</span>

  <h2>$53K</h2>

  <small>Allocated Budget</small>

</div>

<div className="kpi-card orange">

  <span>Total Spent</span>

  <h2>$33K</h2>

  <small>63% Budget Used</small>

</div>

<div className="kpi-card green">

  <span>Total Leads</span>

  <h2>165</h2>

  <small>Across Campaigns</small>

</div>

<div className="kpi-card teal">

  <span>Conversions</span>

  <h2>42</h2>

  <small>25.5% Conversion</small>

</div>

</div>

{/* PERFORMANCE */}

<div className="performance-card">

<div className="performance-header">

  <div>

    <h2>Campaign Performance</h2>

    <p>
      Weekly campaign statistics and growth
    </p>

  </div>

  <select className="performance-filter">

    <option>Last 7 Weeks</option>
    <option>Last Month</option>
    <option>Last Year</option>

  </select>

</div>

<div className="chart-placeholder">

  <svg
    className="performance-chart"
    viewBox="0 0 900 320"
  >

    {/* Grid */}

    <line x1="70" y1="40" x2="850" y2="40" className="grid-line"/>
    <line x1="70" y1="100" x2="850" y2="100" className="grid-line"/>
    <line x1="70" y1="160" x2="850" y2="160" className="grid-line"/>
    <line x1="70" y1="220" x2="850" y2="220" className="grid-line"/>
    <line x1="70" y1="280" x2="850" y2="280" className="grid-line"/>

    {/* Purple */}

    <polyline
      className="purple-chart"
      points="90,250 190,220 290,180 390,155 490,120 590,90 690,65 790,45"
    />

    {/* Green */}

    <polyline
      className="green-chart"
      points="90,280 190,272 290,260 390,245 490,230 590,212 690,194 790,175"
    />

  </svg>

  <div className="chart-legend">

    <div className="legend-item">

      <span className="legend-color purple-box"></span>

      Leads

    </div>

    <div className="legend-item">

      <span className="legend-color green-box"></span>

      Conversions

    </div>

  </div>

</div>

</div>
        {/* CAMPAIGN LIST */}
        <div className="campaign-list">
        <div className="campaign-grid">

        {campaigns.map((campaign, index) => (

  <div
    className="campaign-card"
    key={index}
  >
    <div className="campaign-card-header">

<div>

  <h3>{campaign.campaign_name}</h3>

  <small>{campaign.campaign_type}</small>

</div>

<span className="status active">
  {campaign.status}
</span>

</div>
    <div className="campaign-info">
         
      <div>

        <span>Budget</span>

        <h4>{campaign.budget}</h4>

      </div>

      <div>

        <span>Leads</span>

        <h4>{campaign.leads}</h4>

      </div>

    </div>

    <div className="progress-bar">

      <div
        className="progress-fill"
        style={{
          width: `${campaign.progress}%`,
        }}
      ></div>

    </div>

    <div className="campaign-footer">

      <span>

        {campaign.progress}% Complete

      </span>

      <div className="campaign-actions">

      <button
  className="edit-btn"
  onClick={() => {
    setEditingId(campaign.id);
    setCampaignName(campaign.campaign_name);
    setCampaignType(campaign.campaign_type);
    setBudget(campaign.budget);
    setIsEditing(true);
    setShowPopup(true);
  }}
>
  ✏️ Edit
</button>

  <button
    className="delete-btn"
    onClick={async () => {

      if (!window.confirm("Delete this campaign?")) return;

      await fetch(
        `https://glovalth-healthtech-1.onrender.com/api/marketing/delete-campaign/${campaign.id}/`,
        {
          method: "DELETE",
        }
      );

      fetchCampaigns();

    }}
  >
    🗑 Delete
  </button>

</div>

    </div>

  </div>

))}
</div>   {/* campaign-grid */}

</div>   {/* campaign-list */}

        
        {/* CREATE CAMPAIGN POPUP */}

        {showPopup && (

          <div className="popup-overlay">

            <div className="popup">

            <h2>{isEditing ? "Edit Campaign" : "Create Campaign"}</h2>

              <input
                type="text"
                placeholder="Campaign Name"
                value={campaignName}
                onChange={(e) =>
                  setCampaignName(e.target.value)
                }
              />

              <input
                type="text"
                placeholder="Campaign Type"
                value={campaignType}
                onChange={(e) =>
                  setCampaignType(e.target.value)
                }
              />

              <input
                type="number"
                placeholder="Budget"
                value={budget}
                onChange={(e) =>
                  setBudget(e.target.value)
                }
              />

              <div className="popup-buttons">

                <button
                  className="cancel-btn"
                  onClick={() => {
                    setShowPopup(false);
                    setIsEditing(false);
                    setEditingId(null);
                    setCampaignName("");
                    setCampaignType("");
                    setBudget("");
                  }}
                >
                  Cancel
                </button>

                <button
  className="save-btn"
  onClick={async () => {

    const url = isEditing
      ? `https://glovalth-healthtech-1.onrender.com/api/marketing/update-campaign/${editingId}/`
      : "https://glovalth-healthtech-1.onrender.com/api/marketing/add-campaign/";

    const method = isEditing ? "PUT" : "POST";

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        campaign_name: campaignName,
        campaign_type: campaignType,
        budget: budget,
      }),
    });

    if (response.ok) {

      alert(
        isEditing
          ? "Campaign Updated Successfully!"
          : "Campaign Saved Successfully!"
      );

      fetchCampaigns();

      setCampaignName("");
      setCampaignType("");
      setBudget("");

      setEditingId(null);
      setIsEditing(false);
      setShowPopup(false);

    } else {

      alert("Operation failed.");

    }

  }}
>
  {isEditing ? "Update Campaign" : "Save Campaign"}
</button>

              </div>

            </div>

          </div>

        )}
      </div>

    </div>

  );
}
export default Campaigns;
