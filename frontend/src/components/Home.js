import React, { useState } from "react";
import "./Home.css";

function Home({ goLogin }) {
  const [active, setActive] = useState("home");

  const renderContent = () => {
    switch (active) {
      case "features":
        return (
          <div className="content features-page">
            <h2 className="section-title">Why Choose ACS?</h2>

            <div className="feature-grid">
              <div className="feature-box">
                <div className="feature-icon">📊</div>
                <h3>Track Progress</h3>
                <p>
                  Monitor your recovery journey daily with structured tracking
                  and smart analytics.
                </p>
              </div>

              <div className="feature-box">
                <div className="feature-icon">🎯</div>
                <h3>Set Goals</h3>
                <p>
                  Create milestone-based goals and build consistent healthy
                  habits.
                </p>
              </div>

              <div className="feature-box">
                <div className="feature-icon">🤖</div>
                <h3>AI Support</h3>
                <p>
                  Get instant motivation and guidance from your personal AI
                  recovery assistant.
                </p>
              </div>

              <div className="feature-box">
                <div className="feature-icon">📈</div>
                <h3>Analytics</h3>
                <p>
                  Visual insights and performance graphs to measure improvement.
                </p>
              </div>
            </div>
          </div>
        );

      case "about":
        return (
          <div className="content">
            <h2>About ACS</h2>
            <p>
              ACS helps individuals overcome addiction using structured recovery
              tracking and motivation systems.
            </p>
          </div>
        );

      case "contact":
        return (
          <div className="content">
            <h2>Contact Us</h2>
            <p>Email: skrehanislam12@gmail.com</p>
            <p>Phone: +91 8348109468</p>
          </div>
        );

      default:
        return (
          <div className="content">
            <h1>Take Control of Your Life</h1>
            <p>
              Addiction Control System helps you track recovery, set goals, and
              rebuild your life step by step.
            </p>
            <button className="hero-btn" onClick={goLogin}>
              Get Started
            </button>
          </div>
        );
    }
  };

  return (
    <div className="home">
      <nav className="navbar">
        <div className="logo">ACS</div>

        <ul className="nav-links">
          <li onClick={() => setActive("home")}>Home</li>
          <li onClick={() => setActive("features")}>Features</li>
          <li onClick={() => setActive("about")}>About</li>
          <li onClick={() => setActive("contact")}>Contact</li>
        </ul>

        <button className="nav-btn" onClick={goLogin}>
          Login
        </button>
      </nav>

      {/* 🔥 KEY ADDED HERE */}
      <section key={active} className="hero animated">
        {renderContent()}
      </section>
    </div>
  );
}

export default Home;
