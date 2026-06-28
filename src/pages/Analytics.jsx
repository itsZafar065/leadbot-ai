import React from 'react';
import { analyticsData } from '../data/mockData';
import './Analytics.css';

const maxMessages = Math.max(...analyticsData.dailyMessages);
const maxLeads = Math.max(...analyticsData.dailyLeads);

export default function Analytics() {
  return (
    <div className="page-content fade-in">
      <h1 className="page-title">Analytics</h1>
      <p className="page-subtitle">Your bot performance over the last 7 days.</p>

      {/* Bar Charts Row */}
      <div className="analytics-grid">
        {/* Messages Chart */}
        <div className="chart-card glass-panel fade-in delay-1">
          <h3 className="chart-title">
            <i className='bx bx-message-rounded-check'></i> Daily AI Messages
          </h3>
          <div className="bar-chart">
            {analyticsData.dailyMessages.map((val, i) => (
              <div className="bar-group" key={i}>
                <div className="bar-label-val">{val}</div>
                <div
                  className="bar blue"
                  style={{ height: `${(val / maxMessages) * 100}%` }}
                  title={`${analyticsData.days[i]}: ${val} messages`}
                ></div>
                <div className="bar-label">{analyticsData.days[i]}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Leads Chart */}
        <div className="chart-card glass-panel fade-in delay-2">
          <h3 className="chart-title">
            <i className='bx bx-user-plus'></i> Daily Leads Captured
          </h3>
          <div className="bar-chart">
            {analyticsData.dailyLeads.map((val, i) => (
              <div className="bar-group" key={i}>
                <div className="bar-label-val">{val}</div>
                <div
                  className="bar pink"
                  style={{ height: `${(val / maxLeads) * 100}%` }}
                  title={`${analyticsData.days[i]}: ${val} leads`}
                ></div>
                <div className="bar-label">{analyticsData.days[i]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="analytics-bottom">
        {/* Plan Distribution */}
        <div className="chart-card glass-panel fade-in delay-3">
          <h3 className="chart-title"><i className='bx bx-pie-chart-alt-2'></i> Plan Distribution</h3>
          <div className="plan-list">
            {analyticsData.planDistribution.map(plan => (
              <div className="plan-row" key={plan.name}>
                <div className="plan-dot" style={{ background: plan.color }}></div>
                <span className="plan-name">{plan.name}</span>
                <div className="plan-bar-track">
                  <div
                    className="plan-bar-fill"
                    style={{
                      width: `${plan.count}%`,
                      background: plan.color,
                    }}
                  ></div>
                </div>
                <span className="plan-count">{plan.count}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Channels */}
        <div className="chart-card glass-panel fade-in delay-3">
          <h3 className="chart-title"><i className='bx bx-signal-5'></i> Top Channels</h3>
          <div className="channels-list">
            {analyticsData.topChannels.map(ch => (
              <div className="channel-row" key={ch.name}>
                <span className="channel-name">{ch.name}</span>
                <div className="channel-bar-track">
                  <div
                    className="channel-bar-fill"
                    style={{ width: `${ch.percentage}%` }}
                  ></div>
                </div>
                <span className="channel-pct">{ch.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
