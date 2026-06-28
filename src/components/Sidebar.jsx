import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar({ isOpen, closeSidebar }) {
  return (
    <aside className={`sidebar glass-panel ${isOpen ? 'open' : ''}`}>
      <div className="logo">
        <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
            <i className='bx bxs-bot'></i>
            <span>LeadBot <span className="highlight">AI</span></span>
        </div>
        <button className="mobile-close-btn" onClick={closeSidebar}>
            <i className='bx bx-x'></i>
        </button>
      </div>
      <nav className="nav-menu">
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'} end>
          <i className='bx bxs-dashboard'></i>
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/conversations" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <i className='bx bx-message-square-dots'></i>
          <span>Conversations</span>
        </NavLink>
        <NavLink to="/leads" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <i className='bx bx-user-pin'></i>
          <span>Leads</span>
        </NavLink>
        <NavLink to="/analytics" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <i className='bx bx-bar-chart-alt-2'></i>
          <span>Analytics</span>
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <i className='bx bx-cog'></i>
          <span>Settings</span>
        </NavLink>
      </nav>
      <div className="upgrade-card glass-panel">
        <i className='bx bxs-rocket'></i>
        <h4>Upgrade to Pro</h4>
        <p>Get unlimited AI responses and premium features.</p>
        <button className="btn-primary">Upgrade</button>
      </div>
    </aside>
  );
}
