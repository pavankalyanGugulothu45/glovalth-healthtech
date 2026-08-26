import React, { useEffect, useState } from "react";
import "./SupportTickets.css";

function SupportTickets({ setPage }) {
  const [showPopup, setShowPopup] = useState(false);

  const [tickets, setTickets] = useState([]);

  const [form, setForm] = useState({
    company: "",
    subject: "",
    category: "Technical",
    priority: "Medium",
    description: ""
  });

  // LOAD TICKETS FROM DJANGO DATABASE
  useEffect(() => {
    fetch("https://glovalth-healthtech-1.onrender.com/api/support/tickets/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load tickets");
        }

        return response.json();
      })
      .then((data) => {
        console.log("DATABASE TICKETS:", data);
        setTickets(data);
      })
      .catch((error) => {
        console.error("Ticket loading error:", error);
      });
  }, []);

  // FORM INPUT
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // CREATE NEW TICKET
  const createTicket = async (e) => {
    e.preventDefault();

    if (!form.company || !form.subject || !form.description) {
      alert("Please fill in Company, Subject and Description.");
      return;
    }

    try {
      const response = await fetch(
        "https://glovalth-healthtech-1.onrender.com/api/support/tickets/create/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            company: form.company,
            subject: form.subject,
            category: form.category,
            priority: form.priority,
            description: form.description
          })
        }
      );

      const data = await response.json();

      console.log("CREATE TICKET RESPONSE:", data);

      if (!response.ok) {
        throw new Error(data.error || "Failed to create ticket");
      }

      // ADD NEW DATABASE TICKET TO SCREEN
      setTickets((previousTickets) => [
        data.ticket,
        ...previousTickets
      ]);

      // CLEAR FORM
      setForm({
        company: "",
        subject: "",
        category: "Technical",
        priority: "Medium",
        description: ""
      });

      // CLOSE POPUP
      setShowPopup(false);

      alert(`Ticket ${data.ticket.id} created successfully.`);
    } catch (error) {
      console.error("Create ticket error:", error);

      alert(
        `Could not create ticket: ${error.message}`
      );
    }
  };

  // STATISTICS
  const totalTickets = tickets.length;

  const openTickets = tickets.filter(
    (ticket) => ticket.status === "Open"
  ).length;

  const inProgressTickets = tickets.filter(
    (ticket) => ticket.status === "In Progress"
  ).length;

  const resolvedTickets = tickets.filter(
    (ticket) => ticket.status === "Resolved"
  ).length;

  return (
    <div className="support-ticket-page">

      {/* LEFT SIDEBAR */}

      <aside className="support-sidebar">

        <div className="support-brand">

          <div className="support-brand-icon">
            🛠️
          </div>

          <div>
            <h2>Technical Support</h2>
            <p>System Management</p>
          </div>

        </div>

        <nav className="support-navigation">

          <button
            className="support-nav"
            onClick={() => setPage("technicalSupport")}
          >
            <span>▦</span>
            Dashboard
          </button>

          <button
            className="support-nav"
            onClick={() => setPage("technicalDashboard")}
          >
            <span>▣</span>
            Tech Dashboard
          </button>

          <button
            className="support-nav active"
            onClick={() => setPage("supportTickets")}
          >
            <span>🎫</span>
            Support Tickets
          </button>

          <button
            className="support-nav"
            onClick={() => setPage("technicalIssues")}
          >
            <span>⚠️</span>
            Technical Issues
          </button>

          <button
            className="support-nav"
            onClick={() => setPage("systemMonitoring")}
          >
            <span>〽️</span>
            System Monitoring
          </button>

          <button
            className="support-nav"
            onClick={() => setPage("systemLogs")}
          >
            <span>▤</span>
            System Logs
          </button>

          <button
            className="support-nav"
            onClick={() => setPage("knowledgeBase")}
          >
            <span>▥</span>
            Knowledge Base
          </button>

        </nav>

        <button
          className="support-back-button"
          onClick={() => setPage("dashboard")}
        >
          ← Back to Main Dashboard
        </button>

      </aside>

      {/* MAIN CONTENT */}

      <main className="support-ticket-content">

        <div className="support-ticket-header">

          <div>
            <h1>Support Tickets</h1>

            <p>
              Manage customer support tickets and requests.
            </p>
          </div>

          <button
            className="new-ticket-button"
            onClick={() => setShowPopup(true)}
          >
            + New Ticket
          </button>

        </div>

        {/* STATISTICS */}

        <div className="ticket-stat-grid">

          <div className="ticket-stat-card">

            <div>
              <span>Total Tickets</span>
              <h2>{totalTickets}</h2>
            </div>

            <div className="ticket-stat-icon blue">
              🎫
            </div>

          </div>

          <div className="ticket-stat-card">

            <div>
              <span>Open</span>
              <h2>{openTickets}</h2>
            </div>

            <div className="ticket-stat-icon orange">
              💬
            </div>

          </div>

          <div className="ticket-stat-card">

            <div>
              <span>In Progress</span>
              <h2>{inProgressTickets}</h2>
            </div>

            <div className="ticket-stat-icon yellow">
              !
            </div>

          </div>

          <div className="ticket-stat-card">

            <div>
              <span>Resolved</span>
              <h2>{resolvedTickets}</h2>
            </div>

            <div className="ticket-stat-icon green">
              ✓
            </div>

          </div>

        </div>

        {/* SEARCH / FILTER */}

        <div className="ticket-controls">

          <div className="ticket-search">

            <span>⌕</span>

            <input
              type="text"
              placeholder="Search by ticket ID, company, or subject..."
            />

          </div>

          <select>
            <option>All Status</option>
            <option>Open</option>
            <option>In Progress</option>
            <option>Resolved</option>
            <option>Closed</option>
          </select>

          <select>
            <option>All Priority</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Critical</option>
          </select>

        </div>

        {/* TICKETS */}

        <div className="ticket-table-card">

          <div className="ticket-table-title">
            All Tickets ({tickets.length})
          </div>

          <div className="ticket-table-wrapper">

            <table className="ticket-table">

              <thead>

                <tr>
                  <th>Ticket ID</th>
                  <th>Company</th>
                  <th>Subject</th>
                  <th>Category</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Assignee</th>
                  <th>Created</th>
                  <th>Messages</th>
                </tr>

              </thead>

              <tbody>

                {tickets.map((ticket) => (

                  <tr key={ticket.id}>

                    <td>
                      <strong>{ticket.id}</strong>
                    </td>

                    <td>
                      {ticket.company}
                    </td>

                    <td>
                      {ticket.subject}
                    </td>

                    <td>
                      <span className="category-badge">
                        {ticket.category}
                      </span>
                    </td>

                    <td>
                      <span
                        className={`priority-badge ${String(
                          ticket.priority
                        ).toLowerCase()}`}
                      >
                        {ticket.priority}
                      </span>
                    </td>

                    <td>
                      <span
                        className={`status-badge ${String(
                          ticket.status
                        )
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        {ticket.status}
                      </span>
                    </td>

                    <td>
                      {ticket.assignee || "Unassigned"}
                    </td>

                    <td>
                      {ticket.created}
                    </td>

                    <td>
                      💬 {ticket.messages}
                    </td>

                  </tr>

                ))}

                {tickets.length === 0 && (

                  <tr>
                    <td colSpan="9">
                      No tickets found.
                    </td>
                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>

      </main>

      {/* NEW TICKET POPUP */}

      {showPopup && (

        <div
          className="ticket-modal-overlay"
          onClick={() => setShowPopup(false)}
        >

          <div
            className="ticket-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="ticket-modal-close"
              onClick={() => setShowPopup(false)}
            >
              ×
            </button>

            <h2>Create New Ticket</h2>

            <p>
              Fill in the details to create a new support ticket.
            </p>

            <form onSubmit={createTicket}>

              <div className="ticket-form-group">

                <label>Company</label>

                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Enter company name"
                />

              </div>

              <div className="ticket-form-group">

                <label>Subject</label>

                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Enter ticket subject"
                />

              </div>

              <div className="ticket-form-row">

                <div className="ticket-form-group">

                  <label>Category</label>

                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                  >
                    <option value="Technical">
                      Technical
                    </option>

                    <option value="Billing">
                      Billing
                    </option>

                    <option value="Feature Request">
                      Feature Request
                    </option>

                    <option value="General">
                      General
                    </option>

                  </select>

                </div>

                <div className="ticket-form-group">

                  <label>Priority</label>

                  <select
                    name="priority"
                    value={form.priority}
                    onChange={handleChange}
                  >

                    <option value="Low">
                      Low
                    </option>

                    <option value="Medium">
                      Medium
                    </option>

                    <option value="High">
                      High
                    </option>

                    <option value="Critical">
                      Critical
                    </option>

                  </select>

                </div>

              </div>

              <div className="ticket-form-group">

                <label>Description</label>

                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Describe the issue..."
                  rows="5"
                />

              </div>

              <div className="ticket-form-actions">

                <button
                  type="button"
                  className="ticket-cancel-button"
                  onClick={() => setShowPopup(false)}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="ticket-create-button"
                >
                  Create Ticket
                </button>

              </div>

            </form>

          </div>
          cd "C:\Users\PAVAN KALYAN\Downloads\final-react-django-project\backend"
          python manage.py runserver
        </div>

      )}

    </div>
  );
}

export default SupportTickets;
