import React from 'react';
import { leadsData } from '../data/mockData';
import './Dashboard.css';

const statsData = [
  { label: "Total AI Responses", value: "1,245", trend: "+12%", trendType: "positive", icon: "bx-message-rounded-check", colorClass: "" },
  { label: "New Leads Captured", value: "342", trend: "+5.4%", trendType: "positive", icon: "bx-user-plus", colorClass: "purple" },
  { label: "Time Saved", value: "120h", trend: "--", trendType: "neutral", icon: "bx-time-five", colorClass: "pink" },
  { label: "Active Bots", value: "2", trend: "Live", trendType: "positive", icon: "bxs-bot", colorClass: "" },
];

export default function Dashboard() {
  const recentLeads = leadsData.slice(0, 5);

  return (
    <div className="page-content fade-in">
      <section className="overview">
        <h1 className="page-title">Welcome back, Zaffa 👋</h1>
        <div className="stats-grid">
          {statsData.map((stat, i) => (
            <div className={`stat-card glass-panel fade-in`} key={stat.label} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className={`stat-icon ${stat.colorClass}`}>
                <i className={`bx ${stat.icon}`}></i>
              </div>
              <div className="stat-details">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
              <div className={`trend ${stat.trendType}`}>
                {stat.trend}
                {stat.trendType === 'positive' && <i className='bx bx-up-arrow-alt'></i>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="recent-activity fade-in delay-3">
        <div className="section-header">
          <h2>Recent Leads</h2>
          <a href="/leads" className="btn-outline glass-panel">View All</a>
        </div>
        <div className="table-container glass-panel">
          <table className="leads-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>WhatsApp Number</th>
                <th>Interest</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {recentLeads.map((lead, i) => (
                <tr key={lead.id} className="fade-in" style={{ animationDelay: `${0.4 + i * 0.08}s` }}>
                  <td>
                    <div className="lead-name-cell">
                      <div className="lead-avatar">{lead.avatar}</div>
                      {lead.name}
                    </div>
                  </td>
                  <td className="text-muted">{lead.phone}</td>
                  <td>{lead.interest}</td>
                  <td><span className={`badge ${lead.status}`}>{lead.status.toUpperCase()}</span></td>
                  <td>
                    <button className="action-btn" title="View Chat">
                      <i className='bx bx-message-dots'></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
