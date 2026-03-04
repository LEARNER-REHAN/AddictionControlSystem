import React from "react";
import "./Progress.css";

function Progress() {
  // Dummy Data (later we connect to database)
  const currentStreak = 7;
  const recoveryPercent = 65;

  const weeklyData = [60, 80, 40, 90, 70, 100, 85];
  const relapseHistory = ["Feb 10, 2025", "Jan 22, 2025", "Dec 30, 2024"];

  return (
    <div className="progress-page">
      <h1>Progress Overview</h1>

      {/* ===== TOP CARDS ===== */}
      <div className="progress-grid">
        <div className="progress-card">
          <h3>🔥 Current Streak</h3>
          <p className="big-number">{currentStreak} Days</p>
        </div>

        <div className="progress-card">
          <h3>📈 Recovery Progress</h3>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${recoveryPercent}%` }}
            ></div>
          </div>
          <span>{recoveryPercent}%</span>
        </div>
      </div>

      {/* ===== WEEKLY SECTION ===== */}
      <div className="weekly-section">
        <h2>📊 Weekly Clean Days</h2>
        <div className="weekly-chart">
          {weeklyData.map((value, index) => (
            <div
              key={index}
              className="bar"
              style={{ height: `${value}%` }}
            ></div>
          ))}
        </div>
      </div>

      {/* ===== RELAPSE HISTORY ===== */}
      <div className="relapse-section">
        <h2>🕒 Relapse History</h2>
        <ul>
          {relapseHistory.map((date, index) => (
            <li key={index}>{date}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Progress;
