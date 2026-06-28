import React from 'react';
import './Pricing.css';

export default function Pricing() {
  return (
    <div className="page-content fade-in pricing-page">
      <div className="pricing-header">
        <h1 className="page-title" style={{ textAlign: 'center' }}>Simple, transparent pricing</h1>
        <p className="page-subtitle" style={{ textAlign: 'center', marginBottom: '40px' }}>
          Choose the plan that fits your business needs. Upgrade or downgrade at any time.
        </p>
      </div>

      <div className="pricing-cards">
        {/* Starter Plan */}
        <div className="pricing-card glass-panel">
          <div className="plan-header">
            <h3>Starter</h3>
            <div className="plan-price">
              <span className="currency">$</span>
              <span className="amount">19</span>
              <span className="period">/mo</span>
            </div>
            <p>Perfect for small businesses just getting started with WhatsApp bots.</p>
          </div>
          <ul className="plan-features">
            <li><i className='bx bx-check'></i> 1 AI Bot</li>
            <li><i className='bx bx-check'></i> 500 Messages/month</li>
            <li><i className='bx bx-check'></i> Basic Lead Capture</li>
            <li><i className='bx bx-check'></i> Standard Support</li>
            <li className="disabled"><i className='bx bx-x'></i> No Whitelabel</li>
            <li className="disabled"><i className='bx bx-x'></i> No API Access</li>
          </ul>
          <button className="btn-secondary" style={{ width: '100%', marginTop: 'auto' }}>Get Started</button>
        </div>

        {/* Growth Plan (Highlighted) */}
        <div className="pricing-card glass-panel popular">
          <div className="popular-badge">Most Popular</div>
          <div className="plan-header">
            <h3>Growth</h3>
            <div className="plan-price">
              <span className="currency">$</span>
              <span className="amount">49</span>
              <span className="period">/mo</span>
            </div>
            <p>Ideal for growing businesses that need more volume and features.</p>
          </div>
          <ul className="plan-features">
            <li><i className='bx bx-check'></i> 3 AI Bots</li>
            <li><i className='bx bx-check'></i> 2,500 Messages/month</li>
            <li><i className='bx bx-check'></i> Advanced Lead Routing</li>
            <li><i className='bx bx-check'></i> Priority Support</li>
            <li><i className='bx bx-check'></i> Custom Bot Training</li>
            <li className="disabled"><i className='bx bx-x'></i> No Whitelabel</li>
          </ul>
          <button className="btn-primary" style={{ width: '100%', marginTop: 'auto' }}>Upgrade to Growth</button>
        </div>

        {/* Agency Plan */}
        <div className="pricing-card glass-panel">
          <div className="plan-header">
            <h3>Agency Pro</h3>
            <div className="plan-price">
              <span className="currency">$</span>
              <span className="amount">99</span>
              <span className="period">/mo</span>
            </div>
            <p>For marketing agencies reselling AI solutions to their clients.</p>
          </div>
          <ul className="plan-features">
            <li><i className='bx bx-check'></i> 10 AI Bots</li>
            <li><i className='bx bx-check'></i> Unlimited Messages</li>
            <li><i className='bx bx-check'></i> 100% Whitelabel Dashboard</li>
            <li><i className='bx bx-check'></i> 24/7 Dedicated Support</li>
            <li><i className='bx bx-check'></i> Full API Access</li>
            <li><i className='bx bx-check'></i> Custom Domain</li>
          </ul>
          <button className="btn-secondary" style={{ width: '100%', marginTop: 'auto' }}>Contact Sales</button>
        </div>
      </div>

      <div className="faq-section">
        <h2 style={{ textAlign: 'center', marginBottom: '24px' }}>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item glass-panel">
            <h4>Can I cancel my subscription?</h4>
            <p className="text-muted">Yes, you can cancel or pause your subscription at any time from your account settings. There are no long-term contracts.</p>
          </div>
          <div className="faq-item glass-panel">
            <h4>What happens if I exceed my message limit?</h4>
            <p className="text-muted">We will notify you when you reach 80% and 100% of your limit. You can easily purchase add-on messages or upgrade your plan.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
