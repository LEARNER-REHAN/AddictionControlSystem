import React, { useState, useEffect } from "react";
import BootScreen from "./components/BootScreen";
import CreditsScreen from "./components/CreditsScreen";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [stage, setStage] = useState(1);
  const [page, setPage] = useState("landing");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(2), 3500);
    const t2 = setTimeout(() => setStage(3), 8300);
    const t3 = setTimeout(() => setStage(4), 11800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (stage === 1) return <BootScreen />;
  if (stage === 2) return <CreditsScreen />;
  if (stage === 3) return <LoadingScreen />;

  if (page === "landing") {
    return <Home goLogin={() => setPage("login")} />;
  }

  if (page === "login") {
    return (
      <Login
        onLogin={(userData) => {
          console.log("LOGIN RECEIVED:", userData); // 🔥 ADD THIS
          setUser(userData);
          setPage("dashboard");
        }}
      />
    );
  }

  if (page === "dashboard") {
    return (
      <Dashboard
        user={user}
        onLogout={() => {
          setUser(null);
          setPage("landing");
        }}
      />
    );
  }

  return null;
}

export default App;
