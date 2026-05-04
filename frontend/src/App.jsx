import { useState } from "react";
import "./App.css";

export default function App() {
  const [mode, setMode] = useState("login");
  // login | register | forgot | reset | engineerDashboard | hrDashboard

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  // ================= LOGIN =================
  const handleLogin = () => {
    if (!email || !password || !role) {
      return alert("⚠️ Fill all fields");
    }

    setMode(role === "hr" ? "hrDashboard" : "engineerDashboard");
  };

  // ================= REGISTER =================
  const handleRegister = () => {
    if (!email || !password || !role) {
      return alert("⚠️ Fill all fields");
    }

    alert("🎉 Account created successfully (demo)");
    setMode("login");
  };

  // ================= FORGOT =================
  const handleForgot = () => {
    if (!email) return alert("Enter email");
    setMessage("📩 Reset link sent (demo)");
  };

  // ================= RESET =================
  const handleReset = () => {
    if (!password) return alert("Enter new password");
    alert("Password reset successful");
    setMode("login");
  };

  // ================= LOGIN =================
  if (mode === "login") {
    return (
      <div className="auth-container">
        <div className="card">

          <h1>🚀 Engineer Cert System</h1>
          <h2>Sign In</h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Select Role</option>
            <option value="engineer">Engineer</option>
            <option value="hr">HR</option>
          </select>

          <button onClick={handleLogin}>🔐 Sign In</button>

          <p className="link" onClick={() => setMode("forgot")}>
            Forgot Password?
          </p>

          <p className="text">
            Don't have an account?{" "}
            <span className="link" onClick={() => setMode("register")}>
              Register here
            </span>
          </p>

        </div>
      </div>
    );
  }

  // ================= REGISTER =================
  if (mode === "register") {
    return (
      <div className="auth-container">
        <div className="card">

          <h1>🏗️ Create Account</h1>
          <p className="subtext">Join EngCert System</p>

          <input placeholder="Full Name" />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p className="role-title">I am a...</p>

          <div className="role-box">
            <div
              className={`role-card ${role === "engineer" ? "active" : ""}`}
              onClick={() => setRole("engineer")}
            >
              👷 Engineer
            </div>

            <div
              className={`role-card ${role === "hr" ? "active" : ""}`}
              onClick={() => setRole("hr")}
            >
              👔 HR
            </div>
          </div>

          <button onClick={handleRegister}>🚀 Create Account</button>

          <p className="text">
            Already have account?{" "}
            <span className="link" onClick={() => setMode("login")}>
              Sign in
            </span>
          </p>

        </div>
      </div>
    );
  }

  // ================= FORGOT =================
  if (mode === "forgot") {
    return (
      <div className="auth-container">
        <div className="card">

          <h2>🔑 Forgot Password</h2>

          <input
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button onClick={handleForgot}>Send Reset Link</button>

          {message && <p className="success">{message}</p>}

          <p className="link" onClick={() => setMode("reset")}>
            I have reset link →
          </p>

          <p className="link" onClick={() => setMode("login")}>
            Back to Login
          </p>

        </div>
      </div>
    );
  }

  // ================= RESET =================
  if (mode === "reset") {
    return (
      <div className="auth-container">
        <div className="card">

          <h2>🔐 Reset Password</h2>

          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleReset}>Reset Password</button>

        </div>
      </div>
    );
  }

  // ================= ENGINEER DASHBOARD =================
  if (mode === "engineerDashboard") {
    return (
      <div className="dashboard-layout">

        <div className="sidebar">
          <h2>🏗️ EngCert</h2>

          <div className="nav-item active">📊 Dashboard</div>
          <div className="nav-item">⏱️ Log Hours</div>
          <div className="nav-item">📋 History</div>
          <div className="nav-item">🏆 Certificates</div>

          <div className="user-box">
            <p className="name">nupriya saxena</p>
            <p className="role">engineer</p>
          </div>

          <button className="logout" onClick={() => setMode("login")}>
            Logout
          </button>
        </div>

        <div className="main">

          <h1>Engineer Dashboard</h1>
          <p className="subtext">Track your certification progress</p>

          <div className="card-box">
            <h3>Your Progress</h3>

            <div className="progress-row">
              <div>
                <p>Hours Completed</p>
                <h2>0 / 40 hrs</h2>
              </div>

              <div className="circle">0%</div>
            </div>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>

            <div className="stats">
              <div><p>Total</p><h3>40</h3></div>
              <div><p>Remaining</p><h3>40</h3></div>
              <div><p>Complete</p><h3>0%</h3></div>
            </div>
          </div>

          <h3>Quick Actions</h3>

          <div className="actions">
            <div className="action-card">⏱️ Log Hours</div>
            <div className="action-card">📋 History</div>
            <div className="action-card">🏆 Certificates</div>
          </div>

          <div className="recent">
            <h3>Recent Activity</h3>
            <p>📝 No hours logged yet</p>
          </div>

        </div>
      </div>
    );
  }

  // ================= HR DASHBOARD =================
  return (
    <div className="dashboard-layout">

      <div className="sidebar">
        <h2>🏗️ EngCert</h2>

        <div className="nav-item active">📊 Dashboard</div>
        <div className="nav-item">👥 Engineers</div>
        <div className="nav-item">🔔 Notifications</div>
        <div className="nav-item">🏆 Certificates</div>

        <div className="user-box">
          <p className="name">sharad@gmail.com</p>
          <p className="role">hr</p>
        </div>

        <button className="logout" onClick={() => setMode("login")}>
          Logout
        </button>
      </div>

      <div className="main">

        <h1>HR Dashboard</h1>
        <p className="subtext">
          Monitor engineers and certifications
        </p>

        <div className="stats-grid">

          <div className="stat-card">
            <h2>23</h2>
            <p>Engineers</p>
          </div>

          <div className="stat-card">
            <h2>6</h2>
            <p>Completed 40h</p>
          </div>

          <div className="stat-card">
            <h2>308</h2>
            <p>Total Hours</p>
          </div>

          <div className="stat-card">
            <h2>0</h2>
            <p>Alerts</p>
          </div>

        </div>

        <div className="section">
          <h3>Engineer Progress</h3>
          <div className="alert-box">🟢 All systems normal</div>
        </div>

      </div>

    </div>
  );
}