import React, { useEffect, useState } from "react";
import "./SupportTickets.css";

function SupportTickets({ setPage }) {
  const [showPopup, setShowPopup] = useState(false);

  const [tickets, setTickets] = useState([
    {
      id: "TKT-1234",
      company: "Sunrise Care Home",
      subject: "Login issues for care staff",
      category: "Technical",
      priority: "High",
      status: "Open",
      assignee: "Sarah Johnson",
      created: "17 Mar 2026, 09:30",
      messages: 3
    },
     
    {
      id: "TKT-1235",
      company: "Green Valley Health",
      subject: "Billing discrepancy for March",
      category: "Billing",
      priority: "Medium",
      status: "In Progress",
      assignee: "Michael Chen",
      created: "17 Mar 2026, 08:15",
      messages: 5
    },
    {
      id: "TKT-1236",
      company: "Oakwood Senior Living",
      subject: "Feature request: Mobile app for carers",
      category: "Feature Request",
      priority: "Low",
      status: "Open",
      assignee: "Lisa Anderson",
      created: "16 Mar 2026, 14:45",
      messages: 2
    },
    {
      id: "TKT-1237",
      company: "Maple Grove Care",
      subject: "Cannot export care reports",
      category: "Technical",
      priority: "High",
      status: "In Progress",
      assignee: "Sarah Johnson",
      created: "16 Mar 2026, 11:20",
      messages: 7
    },
    {
      id: "TKT-1238",
      company: "Riverside Healthcare",
      subject: "General inquiry about new features",
      category: "General",
      priority: "Low",
      status: "Resolved",
      assignee: "Michael Chen",
      created: "15 Mar 2026, 16:00",
      messages: 4
    },
    {
      id: "TKT-1239",
      company: "Harbor View Assisted Living",
      subject: "Need training for new staff members",
      category: "General",
      priority: "Medium",
      status: "Open",
      assignee: "Emily Davis",
      created: "15 Mar 2026, 13:30",
      messages: 1
    }
  ]);
  useEffect(() => {
    fetch("https://glovalth-healthtech-1.onrender.com/api/support/tickets/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load tickets");
        }
        return response.json();
      })
      .then((data) => {
        setTickets(data);
      })
      .catch((error) => {
        console.error("Ticket loading error:", error);
      });
  }, []);

  const [form, setForm] = useState({
    company: "",
    subject: "",
    category: "Technical",
    priority: "Medium",
    description: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

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
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            company: form.company,
            subject: form.subject,
            category: form.category,
            priority: form.priority,
            description: form.description,
          }),
        }
      );
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || "Failed to create ticket");
      }
  
      setTickets((previousTickets) => [
        data.ticket,
        ...previousTickets,
      ]);
  
      setForm({
        company: "",
        subject: "",
        category: "Technical",
        priority: "Medium",
        description: "",
      });
  
      setShowPopup(false);
  
      alert(`Ticket ${data.ticket.id} created successfully.`);
    } catch (error) {
      console.error("Create ticket error:", error);
      alert(`Could not create ticket: ${error.message}`);
    }
  };
    setTickets([newTicket, ...tickets]);

    setForm({
      company: "",
      subject: "",
      category: "Technical",
      priority: "Medium",
      description: ""
    });

    setShowPopup(false);
  };

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
          <div className="support-brand-icon">🛠️</div>

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

      {/* MAIN */}

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
            <div className="ticket-stat-icon purple">
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

        {/* FILTERS */}

        <div className="ticket-filters">

          <div className="ticket-search">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search by ticket ID, company, or subject..."
            />
          </div>

          <select className="ticket-filter-select">
            <option>All Status</option>
            <option>Open</option>
            <option>In Progress</option>
            <option>Resolved</option>
          </select>

          <select className="ticket-filter-select">
            <option>All Priority</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

        </div>

        {/* TABLE */}

        <section className="tickets-table-card">

          <h2>All Tickets ({tickets.length})</h2>

          <div className="tickets-table-wrapper">

            <table className="tickets-table">

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

                    <td className="ticket-id">
                      {ticket.id}
                    </td>

                    <td>{ticket.company}</td>

                    <td>{ticket.subject}</td>

                    <td>
                      <span className="category-badge">
                        {ticket.category}
                      </span>
                    </td>

                    <td>
                      <span
                        className={`priority-badge ${ticket.priority.toLowerCase()}`}
                      >
                        {ticket.priority}
                      </span>
                    </td>

                    <td>
                      <span
                        className={`status-badge ${
                          ticket.status
                            .toLowerCase()
                            .replace(" ", "-")
                        }`}
                      >
                        {ticket.status}
                      </span>
                    </td>

                    <td>{ticket.assignee}</td>

                    <td>{ticket.created}</td>

                    <td>💬 {ticket.messages}</td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </section>

      </main>

      {/* NEW TICKET POPUP */}

      {showPopup && (
        <div className="ticket-popup-overlay">

          <div className="ticket-popup">

            <button
              className="close-popup"
              onClick={() => setShowPopup(false)}
            >
              ×
            </button>

            <h2>Create New Ticket</h2>

            <p>
              Fill in the details to create a new support ticket.
            </p>

            <form
              className="ticket-form"
              onSubmit={createTicket}
            >

              <label>Company</label>

              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Enter company name"
              />

              <label>Subject</label>

              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Enter ticket subject"
              />

              <label>Category</label>

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
              >
                <option>Technical</option>
                <option>Billing</option>
                <option>Feature Request</option>
                <option>General</option>
              </select>

              <label>Priority</label>

              <select
                name="priority"
                value={form.priority}
                onChange={handleChange}
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>

              <label>Description</label>

              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Describe the issue..."
              />

              <div className="ticket-popup-buttons">

                <button
                  type="button"
                  className="cancel-ticket-button"
                  onClick={() => setShowPopup(false)}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="create-ticket-button"
                >
                  Create Ticket
                </button>

              </div>

            </form>

          </div>

        </div>
      )}

    </div>
  );

export default SupportTickets;
