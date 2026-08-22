import React, { useState } from "react";
import "./KnowledgeBase.css";

function KnowledgeBase({ setPage }) {
  const [search, setSearch] = useState("");

  const articles = [
    {
      id: "KB-001",
      title: "How to reset a staff password",
      category: "Account Management",
      description:
        "Step-by-step guide for resetting passwords for staff accounts.",
    },
    {
      id: "KB-002",
      title: "Troubleshooting database connection issues",
      category: "Technical",
      description:
        "Common database connection problems and recommended troubleshooting steps.",
    },
    {
      id: "KB-003",
      title: "Resolving mobile app login problems",
      category: "Mobile App",
      description:
        "Solutions for common login and authentication issues in the mobile application.",
    },
    {
      id: "KB-004",
      title: "Understanding system monitoring alerts",
      category: "System Monitoring",
      description:
        "Guide to interpreting system health, performance and service alerts.",
    },
    {
      id: "KB-005",
      title: "Support ticket management guide",
      category: "Support",
      description:
        "How technical support staff should create, update and resolve support tickets.",
    },
    {
      id: "KB-006",
      title: "System logs troubleshooting guide",
      category: "System Logs",
      description:
        "How to search, analyse and investigate system log entries.",
    },
  ];

  const filteredArticles = articles.filter((article) => {
    const value = search.toLowerCase();

    return (
      article.title.toLowerCase().includes(value) ||
      article.category.toLowerCase().includes(value) ||
      article.description.toLowerCase().includes(value)
    );
  });

  return (
    <div className="knowledge-page">

      {/* SIDEBAR */}
      <aside className="knowledge-sidebar">

        <div className="knowledge-brand">
          <div className="knowledge-logo">◔</div>
          <h2>Glovalth</h2>
        </div>

        <nav className="knowledge-nav">

          <button onClick={() => setPage("dashboard")}>
            <span>▦</span>
            Dashboard
          </button>

          <button onClick={() => setPage("technicalDashboard")}>
            <span>▣</span>
            Tech Dashboard
          </button>

          <button onClick={() => setPage("supportTickets")}>
            <span>🎫</span>
            Support Tickets
          </button>

          <button onClick={() => setPage("technicalIssues")}>
            <span>⚠</span>
            Technical Issues
          </button>

          <button onClick={() => setPage("systemMonitoring")}>
            <span>〽</span>
            System Monitoring
          </button>

          <button onClick={() => setPage("systemLogs")}>
            <span>▤</span>
            System Logs
          </button>

          <button
            className="active"
            onClick={() => setPage("knowledgeBase")}
          >
            <span>▥</span>
            Knowledge Base
          </button>

        </nav>

        <div className="knowledge-role">
          <small>Role</small>
          <strong>Tech Support</strong>
        </div>

      </aside>

      {/* MAIN */}
      <main className="knowledge-main">

        {/* TOP BAR */}
        <header className="knowledge-topbar">

          <div className="knowledge-search-top">
            <span>⌕</span>

            <input
              placeholder="Search customers, tickets, issues..."
            />
          </div>

          <div className="knowledge-user">

            <span className="knowledge-notification">
              ♧
              <b>3</b>
            </span>

            <div className="knowledge-user-circle">
              ♙
            </div>

            <span>⌄</span>

          </div>

        </header>

        {/* CONTENT */}
        <section className="knowledge-content">

          <div className="knowledge-heading">

            <div>
              <h1>Knowledge Base</h1>

              <p>
                Internal documentation and support articles
              </p>
            </div>

          </div>

          {/* SEARCH */}
          <div className="knowledge-search-box">

            <span>⌕</span>

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search knowledge base articles..."
            />

          </div>

          {/* ARTICLE AREA */}
          {search === "" ? (

            <section className="knowledge-module">

              <div className="knowledge-module-icon">
                ♧
              </div>

              <h2>Knowledge Base Module</h2>

              <p>
                This module contains internal documentation
                and support articles.
              </p>

            </section>

          ) : (

            <section className="knowledge-results">

              <div className="knowledge-results-header">
                <h2>
                  Search Results ({filteredArticles.length})
                </h2>
              </div>

              {filteredArticles.length === 0 ? (

                <div className="no-articles">
                  No knowledge base articles found.
                </div>

              ) : (

                <div className="article-grid">

                  {filteredArticles.map((article) => (

                    <article
                      className="article-card"
                      key={article.id}
                    >

                      <div className="article-icon">
                        ▥
                      </div>

                      <div className="article-content">

                        <span className="article-id">
                          {article.id}
                        </span>

                        <h3>{article.title}</h3>

                        <span className="article-category">
                          {article.category}
                        </span>

                        <p>
                          {article.description}
                        </p>

                        <button
                          onClick={() =>
                            alert(
                              `Opening ${article.title}`
                            )
                          }
                        >
                          View Article →
                        </button>

                      </div>

                    </article>

                  ))}

                </div>

              )}

            </section>

          )}

        </section>

      </main>

    </div>
  );
}

export default KnowledgeBase;