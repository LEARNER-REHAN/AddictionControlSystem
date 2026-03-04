import React from "react";
import "./About.css";

import rehanImg from "../assets/rehan.png";
import atulyaImg from "../assets/atulya.png";
import harshImg from "../assets/harsh.png";
import rohitImg from "../assets/rohit.png";

function About() {
  return (
    <div className="about-container">
      <h2>About Addiction Control System</h2>

      <p>
        Addiction Control System (ACS) is a digital platform designed to help
        individuals monitor, manage, and overcome behavioral addictions such as
        gaming, social media, internet, and mobile usage.
      </p>

      <p>
        Our system allows users to track daily progress, maintain recovery
        streaks, set personal goals, and receive AI-powered motivational
        support.
      </p>

      <p>
        ACS focuses on self-discipline, consistency, and data-driven improvement
        to promote healthier digital habits and long-term recovery.
      </p>

      {/* Features */}
      <div className="about-features">
        <div className="feature-box">
          <h4>📊 Progress Tracking</h4>
          <p>Monitor recovery progress with daily logs and analytics.</p>
        </div>

        <div className="feature-box">
          <h4>🔥 Streak Monitoring</h4>
          <p>Maintain clean streaks and build positive habits.</p>
        </div>

        <div className="feature-box">
          <h4>🤖 AI Support</h4>
          <p>Receive motivational and recovery guidance anytime.</p>
        </div>
      </div>

      {/* Developers */}
      <h2 className="team-heading">Meet The Developers</h2>

      <div className="team-card">
        <img src={rehanImg} alt="Rehan" />

        <div className="team-info">
          <h3>Sk Rehan Islam</h3>
          <p className="role">Full-Stack Developer</p>
          <p>Designed UI, dashboard and overall user experience.</p>
        </div>
      </div>

      <div className="team-card">
        <img src={atulyaImg} alt="Atulya" />

        <div className="team-info">
          <h3>Atulya Kumar</h3>
          <p className="role">Backend Developer</p>
          <p>Built MongoDB database structure and API integration.</p>
        </div>
      </div>

      <div className="team-card">
        <img src={harshImg} alt="Harsh" />

        <div className="team-info">
          <h3>Harsh Kumar</h3>
          <p className="role">Mental Support</p>
          <p>Designed application structure and system workflow.</p>
        </div>
      </div>

      <div className="team-card">
        <img src={rohitImg} alt="Rohit" />

        <div className="team-info">
          <h3>Rohit Singh Sisodiya</h3>
          <p className="role">Financer</p>
          <p>Integrated AI chatbot and recovery support system.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
