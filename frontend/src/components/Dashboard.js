import React, { useState } from "react";
import ChatBot from "./ChatBot";
import About from "./About";
import Progress from "./Progress";
import Goals from "./Goals";
import Reports from "./Reports";
import "./Dashboard.css";

function Dashboard({ user, onLogout }) {
  const [active, setActive] = useState("home");

  return (
    <div className="dashboard">
      {/* ===== NAVBAR ===== */}
      <div className="navbar">
        <div className="nav-left">
          <h2 className="logo">ACS</h2>

          <ul className="nav-links">
            <li
              className={active === "home" ? "active" : ""}
              onClick={() => setActive("home")}
            >
              🏠 Home
            </li>

            <li
              className={active === "progress" ? "active" : ""}
              onClick={() => setActive("progress")}
            >
              📊 Progress
            </li>

            <li
              className={active === "goals" ? "active" : ""}
              onClick={() => setActive("goals")}
            >
              🎯 Goals
            </li>

            <li
              className={active === "reports" ? "active" : ""}
              onClick={() => setActive("reports")}
            >
              📈 Reports
            </li>

            <li
              className={active === "about" ? "active" : ""}
              onClick={() => setActive("about")}
            >
              ℹ About
            </li>
          </ul>
        </div>

        <div className="nav-right">
          <span className="welcome">Welcome {user?.username || "User"}</span>

          <button className="logout-btn" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="main-content">
        {active === "home" && (
          <>
            <h1>Dashboard</h1>

            <div className="cards">
              <div className="card-box">
                <h3>Current Streak</h3>
                <p>7 Days</p>
              </div>

              <div className="card-box">
                <h3>Recovery Progress</h3>
                <p>65%</p>
              </div>

              <div className="card-box">
                <h3>Active Goals</h3>
                <p>3 Goals</p>
              </div>

              <div className="card-box">
                <h3>Weekly Improvement</h3>
                <p>+12%</p>
              </div>
            </div>
          </>
        )}

        {active === "progress" && <Progress />}
        {active === "goals" && <Goals />}
        {active === "reports" && <Reports />}
        {active === "about" && <About />}
      </div>

      {/* ===== CHATBOT ===== */}
      <ChatBot />
    </div>
  );
}

export default Dashboard;
