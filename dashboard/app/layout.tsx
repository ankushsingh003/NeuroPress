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

        <style jsx global>{`
          .layout-container {
            display: flex;
            min-height: 100vh;
          }
          .sidebar {
            width: var(--sidebar-width);
            background: rgba(15, 15, 18, 0.95);
            border-right: 1px solid var(--card-border);
            display: flex;
            flex-direction: column;
            padding: 32px 24px;
            position: fixed;
            height: 100vh;
          }
          .logo-section h2 {
            font-size: 24px;
            font-weight: 800;
            margin-bottom: 8px;
          }
          .status-badge {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 12px;
            color: #888;
            background: rgba(255, 255, 255, 0.05);
            padding: 4px 12px;
            border-radius: 20px;
            width: fit-content;
          }
          .pulse {
            width: 8px;
            height: 8px;
            background: var(--primary);
            border-radius: 50%;
            display: inline-block;
            box-shadow: 0 0 8px var(--primary);
            animation: pulse-animation 2s infinite;
          }
          @keyframes pulse-animation {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.5); opacity: 0.5; }
            100% { transform: scale(1); opacity: 1; }
          }
          .main-nav {
            margin-top: 48px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            flex-grow: 1;
          }
          .nav-item {
            padding: 12px 16px;
            border-radius: 12px;
            color: #888;
            transition: all 0.2s ease;
          }
          .nav-item:hover, .nav-item.active {
            background: rgba(0, 207, 186, 0.1);
            color: var(--primary);
          }
          .content-area {
            margin-left: var(--sidebar-width);
            flex-grow: 1;
            padding: 40px;
            background: radial-gradient(circle at top right, #1a1a2e 0%, #0a0a0c 50%);
          }
          .sidebar-footer {
            margin-top: auto;
            padding-top: 24px;
            border-top: 1px solid var(--card-border);
          }
          .user-profile {
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .avatar {
            width: 36px;
            height: 36px;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 14px;
          }
          .user-info .name {
            font-size: 14px;
            font-weight: 600;
          }
          .user-info .role {
            font-size: 11px;
            color: #666;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
        `}</style>
      </body>
    </html>
  );
}
