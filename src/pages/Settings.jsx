import React, { useState } from 'react';
import './Settings.css';

export default function Settings() {
  const [saved, setSaved] = useState(false);
  const [botName, setBotName] = useState('LeadBot Assistant');
  const [prompt, setPrompt] = useState(
    'You are a helpful AI assistant for our business. Be polite, professional, and always try to capture the customer\'s contact information and their specific need. If a customer asks about pricing, direct them to our sales team.'
  );
  const [waKey, setWaKey] = useState('');
  const [notifications, setNotifications] = useState(true);
  const [lang, setLang] = useState('auto');

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="page-content fade-in">
      <h1 className="page-title">Settings</h1>
      <p className="page-subtitle">Configure your AI bot and integrations.</p>

      <div className="settings-grid">
        {/* Bot Configuration */}
        <div className="settings-section glass-panel fade-in delay-1">
          <div className="settings-section-header">
            <i className='bx bxs-bot'></i>
            <h3>Bot Configuration</h3>
          </div>

          <form onSubmit={handleSave} className="settings-form">
            <div className="form-group">
              <label>Bot Name</label>
              <input
                type="text"
                value={botName}
                onChange={e => setBotName(e.target.value)}
                placeholder="e.g. Sales Assistant"
              />
            </div>

            <div className="form-group">
              <label>System Prompt (AI Personality)</label>
              <textarea
                rows={5}
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
                placeholder="Describe how your AI should behave..."
              />
              <small>This prompt defines your bot's personality and behavior.</small>
            </div>

            <div className="form-group">
              <label>Response Language</label>
              <select value={lang} onChange={e => setLang(e.target.value)}>
                <option value="auto">Auto Detect</option>
                <option value="en">English</option>
                <option value="ur">Urdu</option>
                <option value="roman_ur">Roman Urdu</option>
                <option value="ar">Arabic</option>
              </select>
            </div>

            <div className="form-group toggle-group">
              <div>
                <label>Lead Capture Notifications</label>
                <small>Get email alerts when a new lead is captured.</small>
              </div>
              <button
                type="button"
                className={`toggle ${notifications ? 'on' : 'off'}`}
                onClick={() => setNotifications(!notifications)}
              >
                <div className="toggle-knob"></div>
              </button>
            </div>

            <button type="submit" className={`btn-primary save-btn ${saved ? 'saved' : ''}`}>
              {saved ? <><i className='bx bx-check'></i> Saved!</> : 'Save Changes'}
            </button>
          </form>
        </div>

        {/* Integrations */}
        <div className="settings-right">
          <div className="settings-section glass-panel fade-in delay-2">
            <div className="settings-section-header">
              <i className='bx bxl-whatsapp'></i>
              <h3>WhatsApp Integration</h3>
            </div>
            <div className="settings-form">
              <div className="form-group">
                <label>WhatsApp Business API Key</label>
                <div className="input-with-icon">
                  <input
                    type="password"
                    value={waKey}
                    onChange={e => setWaKey(e.target.value)}
                    placeholder="Paste your API key here..."
                  />
                  <i className='bx bx-key'></i>
                </div>
                <small>Get your key from Meta Business Manager.</small>
              </div>
              <div className="form-group">
                <label>Phone Number ID</label>
                <input type="text" placeholder="e.g. 1234567890" />
              </div>
              <button className="btn-outline glass-panel" style={{ width: '100%', padding: '12px' }}>
                <i className='bx bx-link-alt' style={{ marginRight: 8 }}></i>
                Connect WhatsApp
              </button>
            </div>
          </div>

          <div className="settings-section glass-panel fade-in delay-3">
            <div className="settings-section-header">
              <i className='bx bxl-google'></i>
              <h3>Google Sheets Integration</h3>
            </div>
            <div className="settings-form">
              <div className="form-group">
                <label>Google Sheet ID</label>
                <input type="text" placeholder="Paste your Google Sheet link..." />
                <small>Leads will be automatically saved here.</small>
              </div>
              <button className="btn-outline glass-panel" style={{ width: '100%', padding: '12px' }}>
                <i className='bx bx-link-alt' style={{ marginRight: 8 }}></i>
                Connect Google Sheets
              </button>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="settings-section danger-zone glass-panel fade-in delay-3">
            <div className="settings-section-header">
              <i className='bx bx-error-circle'></i>
              <h3>Danger Zone</h3>
            </div>
            <p>These actions are permanent. Please be careful.</p>
            <button className="btn-danger">Delete All Leads</button>
            <button className="btn-danger">Delete Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
