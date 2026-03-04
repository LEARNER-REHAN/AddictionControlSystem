import React from "react";
import LineByLine from "./LineByLine";
import "./BootScreen.css";

function BootScreen() {
  const lines = [
  "Booting Addiction Control System...",
  "Checking system integrity...",
  "Loading core modules ████████████████s 100%",
  "Initializing memory allocation...",
  "Mounting secure partitions...",
  "Establishing encrypted connection...",
  "Verifying user environment...",
  "Initializing security protocols...",
  "System diagnostics complete.",
  "All systems operational."
];

  return (
    <div className="boot-screen">
      <LineByLine lines={lines} delay={300} />
      <p className="blink">_</p>
    </div>
  );
}

export default BootScreen;