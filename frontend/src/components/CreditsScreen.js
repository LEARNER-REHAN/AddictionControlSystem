import React from "react";
import LineByLine from "./LineByLine";
import "./CreditsScreen.css";

function CreditsScreen() {
  const lines = [
    "System Ready.",
    "Launching Addiction Control Interface...",
    "Loading user dashboard modules...",
    "Synchronizing progress database...",
    "Establishing analytics engine...",
    "--------------------------------",
    "Addiction Control System v1.0.2",
    "--------------------------------",
    "Built by:",
    "> Sk Rehan Islam",
    "> Atulya Kumar",
    "> Rohit Singh",
    "> Harsh Kumar",
    "--------------------------------",
    "Welcome User.",
  ];

  return (
    <div className="credits-screen">
      <LineByLine lines={lines} delay={300} />
      <p className="blink">_</p>
    </div>
  );
}

export default CreditsScreen;
