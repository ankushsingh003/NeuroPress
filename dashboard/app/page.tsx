"use client";

import React, { useState, useEffect } from 'react';

export default function DashboardPage() {
  const [visionStatus, setVisionStatus] = useState('Online');
  const [defectRate, setDefectRate] = useState(2.4);
  const [priceTrend, setPriceTrend] = useState('Up');

  return (
    <div className="dashboard-container">
      <header className="page-header">
        <h1>Command Center</h1>
        <p className="subtitle">Real-time Printing Operational Intelligence</p>
      </header>

      <section className="stats-grid">
        <div className="glass-card stat-card">
          <h3>Active Defects</h3>
          <div className="value-row">
            <span className="value">{defectRate}%</span>
            <span className={`trend ${defectRate > 5 ? 'bad' : 'good'}`}>
              {defectRate > 5 ? 'High' : 'Optimal'}
            </span>
          </div>
          <div className="progress-bar">
            <div className="fill" style={{ width: `${defectRate * 10}%` }}></div>
          </div>
        </div>

        <div className="glass-card stat-card">
          <h3>Paper Price Forecast</h3>
          <div className="value-row">
            <span className="value">$56.37</span>
            <span className="trend warning">↗ 4.2%</span>
          </div>
          <p className="stat-desc">Next 30 days projected trend</p>
        </div>

        <div className="glass-card stat-card">
          <h3>System Health</h3>
          <div className="health-grid">
            <div className="health-item">
              <span>Vision AI</span>
              <span className="dot active"></span>
            </div>
            <div className="health-item">
              <span>Forecaster</span>
              <span className="dot active"></span>
            </div>
            <div className="health-item">
              <span>Orchestrator</span>
              <span className="dot active"></span>
            </div>
          </div>
        </div>
      </section>

      <div className="main-grid">
        <section className="glass-card vision-monitor">
          <div className="card-header">
            <h3>Live Vision Monitor</h3>
            <button className="btn-sm">Expand Feed</button>
          </div>
          <div className="monitor-view">
            <div className="scan-line"></div>
            <div className="mock-feed">
              <div className="overlay-box" style={{ top: '20%', left: '30%', width: '100px', height: '100px' }}>
                <span className="label">DEFECT: Smudge</span>
              </div>
              <p className="no-feed">ENCRYPTED INDUSTRIAL FEED ACTIVE</p>
            </div>
          </div>
        </section>

        <section className="glass-card orchestrator-panel">
          <h3>Strategic AI Insights</h3>
          <div className="insights-list">
            <div className="insight-item critical">
              <div className="icon">⚠️</div>
              <div className="text">
                <strong>Schedule Maintenance:</strong> High defect rate detected on Line 4.
              </div>
            </div>
            <div className="insight-item warning">
              <div className="icon">💰</div>
              <div className="text">
                <strong>Raw Material Hedge:</strong> Paper prices rising. Secure bulk buy for Q3.
              </div>
            </div>
            <div className="insight-item info">
              <div className="icon">ℹ️</div>
              <div className="text">
                <strong>Resource Optimization:</strong> Energy usage peak expected at 2PM.
              </div>
            </div>
          </div>
          <button className="btn-primary">Execute All Actions</button>
        </section>
      </div>
    </div>
  );
}
