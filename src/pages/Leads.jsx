import React, { useState } from 'react';
import { leadsData } from '../data/mockData';
import './Leads.css';

const FILTERS = ['All', 'Hot', 'Warm', 'Cold'];

export default function Leads() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = leadsData.filter(l => {
    const matchFilter = filter === 'All' || l.status === filter.toLowerCase();
    const matchSearch = l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.phone.includes(search) || l.interest.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <div className="page-content fade-in">
      <div className="section-header">
        <div>
          <h1 className="page-title">Leads</h1>
          <p className="page-subtitle">All captured leads from your AI bots.</p>
        </div>
        <button className="btn-primary" style={{ width: 'auto', padding: '12px 24px' }}>
          <i className='bx bx-export' style={{ marginRight: 8 }}></i>
          Export CSV
        </button>
      </div>

      {/* Filter Tabs + Search */}
      <div className="leads-controls">
        <div className="filter-tabs">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-tab ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
              {f === 'Hot' && <span className="tab-badge hot"></span>}
            </button>
          ))}
        </div>
        <div className="leads-search glass-panel">
          <i className='bx bx-search'></i>
          <input
            type="text"
            placeholder="Search leads..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="table-container glass-panel">
        <table className="leads-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>WhatsApp</th>
              <th>Interest</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan="7" style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
                  No leads found matching your search.
                </td>
              </tr>
            ) : filtered.map((lead, i) => (
              <tr key={lead.id} className="fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
                <td className="text-muted">{String(i + 1).padStart(2, '0')}</td>
                <td>
                  <div className="lead-name-cell">
                    <div className="lead-avatar">{lead.avatar}</div>
                    {lead.name}
                  </div>
                </td>
                <td className="text-muted">{lead.phone}</td>
                <td>{lead.interest}</td>
                <td className="text-muted">{lead.date}</td>
                <td><span className={`badge ${lead.status}`}>{lead.status.toUpperCase()}</span></td>
                <td>
                  <div className="row-actions">
                    <button className="action-btn" title="Message"><i className='bx bx-message-dots'></i></button>
                    <button className="action-btn" title="Call"><i className='bx bx-phone'></i></button>
                    <button className="action-btn danger" title="Delete"><i className='bx bx-trash'></i></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="leads-footer">
        <span className="text-muted">Showing {filtered.length} of {leadsData.length} leads</span>
      </div>
    </div>
  );
}
