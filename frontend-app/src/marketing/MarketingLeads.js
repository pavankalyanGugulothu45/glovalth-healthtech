import { useState, useEffect } from "react";
import "./MarketingLeads.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function MarketingLeads({ setPage }) {

    const [showPopup, setShowPopup] = useState(false);
    useEffect(() => {
        fetchLeads();
      }, []);
      
      const fetchLeads = async () => {
        const response = await fetch(
          "http://127.0.0.1:8000/api/marketing/leads/"
        );
      
        const data = await response.json();
      
        setLeads(data);
      };
    const [leads, setLeads] = useState([
      {
        id: "LEAD-789",
        company: "Sunset Elderly Care",
        contact: "Jennifer Brown",
        email: "jennifer@sunsetcare.com",
        phone: "+1 (555) 789-0123",
        source: "Website Demo",
        status: "Qualified",
      },
    ]);
  
    const [company, setCompany] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [source, setSource] = useState("Website Demo");
  
    return (
    <div className="marketing-page">

      <Sidebar
        setPage={setPage}
        currentPage="marketingLeads"
      />

      <div className="marketing-content">
      {showPopup && (

<div className="popup-overlay">

<div className="lead-popup">

<h2>Add New Lead</h2>

<p>
Enter the details of the new lead.
</p>

<input
  placeholder="Company"
  value={company}
  onChange={(e) => setCompany(e.target.value)}
/>

<input
  placeholder="Contact Person"
  value={contact}
  onChange={(e) => setContact(e.target.value)}
/>

<input
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

<input
  placeholder="Phone"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
/>

<select
  value={source}
  onChange={(e) => setSource(e.target.value)}
>
  <option>Website Demo</option>
  <option>Trade Show</option>
  <option>Referral</option>
  <option>LinkedIn</option>
</select>

<div className="popup-buttons">

<button
onClick={() => setShowPopup(false)}
>
Cancel
</button>

<button
  className="save-btn"
  onClick={async () => {

    const response = await fetch(
      "http://127.0.0.1:8000/api/marketing/add-lead/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company,
          contact_person: contact,
          email,
          phone,
          source,
        }),
      }
    );

    if (response.ok) {

      fetchLeads();

      setCompany("");
      setContact("");
      setEmail("");
      setPhone("");
      setSource("Website Demo");

      setShowPopup(false);

      alert("Lead Added Successfully");

    } else {

      alert("Failed to Add Lead");

    }

  }}
>
  Add Lead
</button>

</div>

</div>

</div>

)}
        <Navbar />

        <div className="marketing-header">

          <div>

            <h1>Marketing Leads</h1>

            <p>
              Manage demo requests and potential customers
            </p>

          </div>

          <button
            className="add-btn"
            onClick={() => setShowPopup(true)}
                 >
                 + Add Lead
              </button>

        </div>

        {/* KPI CARDS */}

        <div className="lead-kpis">

          <div className="lead-card">

            <span>Total Leads</span>

            <h2>5</h2>

          </div>

          <div className="lead-card">

            <span>New Leads</span>

            <h2>1</h2>

          </div>

          <div className="lead-card">

            <span>Qualified</span>

            <h2>2</h2>

          </div>

          <div className="lead-card">

            <span>Converted This Month</span>

            <h2>12</h2>

          </div>

        </div>
                {/* SEARCH */}

                <div className="lead-search">

<input
  type="text"
  placeholder="Search by company, contact or email..."
/>

<select>

  <option>All Status</option>
  <option>New</option>
  <option>Qualified</option>
  <option>Contacted</option>
  <option>Proposal Sent</option>

</select>

</div>

{/* LEADS TABLE */}

<div className="lead-table">

<h3>All Leads (5)</h3>

<table>

  <thead>

    <tr>

      <th>Lead ID</th>
      <th>Company</th>
      <th>Contact Person</th>
      <th>Contact Info</th>
      <th>Source</th>
      <th>Status</th>

    </tr>

  </thead>


    <tbody>

{leads.map((lead, index) => (

<tr key={index}>

<td>LEAD-{String(lead.id).padStart(3, "0")}</td>

<td>
  <strong>{lead.company}</strong>
</td>

<td>
  <strong>{lead.contact_person}</strong>
</td>

<td>
  {lead.email}
  <br />
  {lead.phone}
</td>

<td>{lead.source}</td>

<td>{lead.status}</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

</div>

);
}

export default MarketingLeads;