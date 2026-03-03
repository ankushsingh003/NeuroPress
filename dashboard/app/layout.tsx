import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EcoStream AI | Industrial SaaS",
  description: "Next-gen printing and packaging management",
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
              <span className="status-badge"><span className="pulse"></span> Factory Live</span>
            </div>
            <nav className="main-nav">
              <a href="#" className="nav-item active">Dashboard</a>
              <a href="#" className="nav-item">Vision Feed</a>
              <a href="#" className="nav-item">Market Forecast</a>
              <a href="#" className="nav-item">Orchestration</a>
              <a href="#" className="nav-item">Maintenance</a>
            </nav>
            <div className="sidebar-footer">
              <div className="user-profile">
                <div className="avatar">AS</div>
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
