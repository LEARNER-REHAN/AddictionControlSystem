import React, { useState, useEffect } from "react";
import IntroScreen from "./components/IntroScreen";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [page, setPage] = useState("landing");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Main Pages */}
      {page === "landing" && <Home goLogin={() => setPage("login")} />}

      {page === "login" && (
        <Login
          onLogin={(userData) => {
            setUser(userData);
            setPage("dashboard");
          }}
        />
      )}

      {page === "dashboard" && (
        <Dashboard
          user={user}
          onLogout={() => {
            setUser(null);
            setPage("landing");
          }}
        />
      )}

      {/* Intro Overlay */}
      {showIntro && <IntroScreen />}
    </>
  );
}

export default App;
