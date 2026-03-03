import type { Metadata } from "next";
import "./globals.css";
import {
  LayoutDashboard,
  Eye,
  TrendingUp,
  Settings,
  ShieldAlert,
  User
} from 'lucide-react';

export const metadata: Metadata = {
  title: "EcoStream AI | Industrial Command Center",
  description: "Advanced Printing & Packaging Production Intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="layout-container">
          <aside className="sidebar">
            <div className="logo-section">
              <h2 className="gradient-text">EcoStream AI</h2>
              <span className="status-badge"><span className="pulse"></span> Network Live</span>
            </div>
            <nav className="main-nav">
              <a href="#" className="nav-item active">
                <LayoutDashboard size={18} />
                Dashboard
              </a>
              <a href="#" className="nav-item">
                <Eye size={18} />
                Vision Feed
              </a>
              <a href="#" className="nav-item">
                <TrendingUp size={18} />
                Market Forecast
              </a>
              <a href="#" className="nav-item">
                <ShieldAlert size={18} />
                Orchestration
              </a>
              <a href="#" className="nav-item">
                <Settings size={18} />
                System Config
              </a>
            </nav>
            <div className="sidebar-footer">
              <div className="user-profile">
                <div className="avatar">
                  <User size={16} />
                </div>
                <div className="user-info">
                  <p className="name">Ankush Singh</p>
                  <p className="role">Factory Director</p>
                </div>
              </div>
            </div>
          </aside>
          <main className="content-area">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
