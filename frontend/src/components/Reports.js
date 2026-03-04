import React from "react";
import "./Reports.css";

function Reports() {
  const totalCleanDays = 120;
  const totalRelapses = 5;
  const longestStreak = 45;

  const cleanPercent = 80;
  const relapsePercent = 20;

  const monthlyTrend = [40, 60, 75, 90];

  return (
    <div className="reports-page">
      <h1>Reports</h1>

      {/* ===== SUMMARY CARDS ===== */}
      <div className="report-summary">
        <div className="report-card">
          <h3>Total Clean Days</h3>
          <p className="report-number">{totalCleanDays}</p>
        </div>

        <div className="report-card">
          <h3>Total Relapses</h3>
          <p className="report-number red">{totalRelapses}</p>
        </div>

        <div className="report-card">
          <h3>Longest Streak</h3>
          <p className="report-number">{longestStreak} Days</p>
        </div>
      </div>

      {/* ===== BREAKDOWN ===== */}
      <div className="report-section">
        <h2>Recovery Breakdown</h2>

        <div className="breakdown-bar">
          <div className="clean-bar" style={{ width: `${cleanPercent}%` }}>
            Clean {cleanPercent}%
          </div>
          <div className="relapse-bar" style={{ width: `${relapsePercent}%` }}>
            Relapse {relapsePercent}%
          </div>
        </div>
      </div>

      {/* ===== MONTHLY TREND ===== */}
      <div className="report-section">
        <h2>Monthly Improvement Trend</h2>

        <div className="trend-chart">
          {monthlyTrend.map((value, index) => (
            <div
              key={index}
              className="trend-bar"
              style={{ height: `${value}%` }}
            >
              <span>{value}%</span>
            </div>
          ))}
        </div>
      </div>

      <button className="download-btn">Download Report</button>
    </div>
  );
}

export default Reports;
