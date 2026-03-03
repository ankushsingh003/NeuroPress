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

      <style jsx>{`
        .dashboard-container {
          max-width: 1400px;
          margin: 0 auto;
        }
        .page-header {
          margin-bottom: 40px;
        }
        .page-header h1 {
          font-size: 36px;
          font-weight: 800;
          letter-spacing: -1px;
        }
        .subtitle {
          color: #666;
          margin-top: 4px;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 32px;
        }
        .stat-card h3 {
          font-size: 14px;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 16px;
        }
        .value-row {
          display: flex;
          align-items: baseline;
          gap: 12px;
          margin-bottom: 12px;
        }
        .value {
          font-size: 32px;
          font-weight: 700;
        }
        .trend {
          font-size: 14px;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 4px;
        }
        .trend.good { color: #00cfba; background: rgba(0, 207, 186, 0.1); }
        .trend.bad { color: #f43f5e; background: rgba(244, 63, 94, 0.1); }
        .trend.warning { color: #f59e0b; background: rgba(245, 158, 11, 0.1); }
        
        .progress-bar {
          height: 6px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
          overflow: hidden;
        }
        .progress-bar .fill {
          height: 100%;
          background: var(--primary);
        }

        .health-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .health-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 13px;
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #444;
        }
        .dot.active {
          background: var(--primary);
          box-shadow: 0 0 6px var(--primary);
        }

        .main-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 24px;
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .monitor-view {
          height: 300px;
          background: #000;
          border-radius: 12px;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .mock-feed {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: repeating-linear-gradient(0deg, rgba(0,207,186,0.03) 0px, transparent 1px, transparent 20px);
        }
        .overlay-box {
          position: absolute;
          border: 2px solid var(--primary);
          background: rgba(0, 207, 186, 0.1);
        }
        .overlay-box .label {
          position: absolute;
          top: -25px;
          left: -1px;
          background: var(--primary);
          color: black;
          font-size: 10px;
          font-weight: 800;
          padding: 2px 6px;
          white-space: nowrap;
        }
        .scan-line {
          position: absolute;
          width: 100%;
          height: 2px;
          background: rgba(0, 207, 186, 0.5);
          top: 0;
          animation: scan 4s linear infinite;
          z-index: 2;
        }
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
        .no-feed {
          font-family: 'Courier New', monospace;
          color: #333;
          font-size: 12px;
          letter-spacing: 2px;
        }

        .orchestrator-panel h3 {
          margin-bottom: 24px;
        }
        .insights-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 24px;
        }
        .insight-item {
          display: flex;
          gap: 16px;
          padding: 16px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 12px;
          border-left: 4px solid #444;
        }
        .insight-item.critical { border-left-color: #f43f5e; }
        .insight-item.warning { border-left-color: #f59e0b; }
        .insight-item.info { border-left-color: var(--secondary); }
        
        .insight-item .icon { font-size: 20px; }
        .insight-item .text { font-size: 14px; line-height: 1.5; color: #ccc; }
        .insight-item strong { color: #fff; display: block; margin-bottom: 2px; }

        .btn-sm {
          padding: 6px 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--card-border);
          border-radius: 8px;
          color: #fff;
          font-size: 11px;
          cursor: pointer;
        }
        .btn-primary {
          width: 100%;
          padding: 14px;
          background: var(--primary);
          color: #000;
          border: none;
          border-radius: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .btn-primary:hover { transform: scale(1.02); }
      `}</style>
    </div>
  );
}
