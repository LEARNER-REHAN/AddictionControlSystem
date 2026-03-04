import React, { useState } from "react";
import "./Goals.css";

function Goals() {
  const [goalInput, setGoalInput] = useState("");
  const [goals, setGoals] = useState([
    { text: "30 Days Clean", completed: false },
    { text: "Morning Exercise", completed: true },
  ]);

  const addGoal = () => {
    if (!goalInput.trim()) return;
    setGoals([...goals, { text: goalInput, completed: false }]);
    setGoalInput("");
  };

  const toggleGoal = (index) => {
    const updated = [...goals];
    updated[index].completed = !updated[index].completed;
    setGoals(updated);
  };

  const deleteGoal = (index) => {
    setGoals(goals.filter((_, i) => i !== index));
  };

  return (
    <div className="goals-page">
      <h1>Goals</h1>

      <div className="goal-input-wrapper">
        <input
          type="text"
          placeholder="Enter new goal..."
          value={goalInput}
          onChange={(e) => setGoalInput(e.target.value)}
        />
        <button onClick={addGoal}>+ Add Goal</button>
      </div>

      <div className="goals-container">
        {goals.map((goal, index) => (
          <div
            key={index}
            className={`goal-card ${goal.completed ? "completed" : ""}`}
          >
            <div className="goal-left">
              <h3>{goal.text}</h3>
              <p>
                Status:{" "}
                <span
                  className={goal.completed ? "status-done" : "status-progress"}
                >
                  {goal.completed ? "Completed" : "In Progress"}
                </span>
              </p>
            </div>

            <div className="goal-right">
              <button
                className="complete-btn"
                onClick={() => toggleGoal(index)}
              >
                ✔
              </button>
              <button className="delete-btn" onClick={() => deleteGoal(index)}>
                ✖
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Goals;
