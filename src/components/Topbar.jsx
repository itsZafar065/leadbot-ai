import React from 'react';
import './Topbar.css';

export default function Topbar({ title }) {
  return (
    <header className="header">
      <div className="search-bar glass-panel">
        <i className='bx bx-search'></i>
        <input type="text" placeholder="Search conversations, leads..." />
      </div>
      <div className="user-profile">
        <button className="icon-btn glass-panel">
          <i className='bx bx-bell'></i>
          <span className="notif-dot"></span>
        </button>
        <div className="avatar glass-panel">
          <img src="https://ui-avatars.com/api/?name=Zaffa&background=7000ff&color=fff&bold=true" alt="User Avatar" />
        </div>
      </div>
    </header>
  );
}
