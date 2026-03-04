import React, { useState, useRef, useEffect } from "react";
import "./ChatBot.css";

function ChatBot() {
  const [showPopup, setShowPopup] = useState(false);
  const [intro, setIntro] = useState(true);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋 I'm your Recovery Assistant." },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const chatEndRef = useRef(null);
  const buttonRef = useRef(null);
  const dotRef = useRef(null);

  /* ================= INTRO ANIMATION ================= */

  useEffect(() => {
    const button = buttonRef.current;

    if (!button) return;

    const handleAnimationEnd = () => {
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 3000);

      // Remove intro class AFTER animation fully finishes
      setIntro(false);
    };

    button.addEventListener("animationend", handleAnimationEnd);

    return () => {
      button.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  /* ================= AUTO SCROLL ================= */

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  /* ================= SEND MESSAGE ================= */

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userText = input;

    const userMessage = { sender: "user", text: userText };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setTyping(true);

    try {
      const response = await fetch("http://localhost:8000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userText }),
      });

      const data = await response.json();

      setTyping(false);
      setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
    } catch (error) {
      console.error(error);
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Error connecting to AI server." },
      ]);
    }
  };

  /* ================= GLOBAL MOUSE TRACKING ================= */

  useEffect(() => {
    let animationFrame;

    const handleMouseMove = (e) => {
      if (!buttonRef.current || !dotRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const strength = Math.max(0, 1 - distance / 500);

      const moveX = deltaX * 0.15 * strength;
      const moveY = deltaY * 0.15 * strength;

      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        dotRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  /* ================= JSX ================= */

  return (
    <>
      <div className="chatbot-wrapper">
        <div
          ref={buttonRef}
          className={`chatbot-button ${intro ? "intro-move" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <div className="chatbot-core">
            <div ref={dotRef} className="chatbot-dot"></div>
          </div>
        </div>

        {showPopup && <div className="chatbot-popup">Hello buddy 👋</div>}
      </div>

      {/* ===== CHAT WINDOW ===== */}
      {open && (
        <div className="chatbot-container">
          <div className="chat-header">
            Recovery Assistant
            <span onClick={() => setOpen(false)}>✖</span>
          </div>

          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}

            {typing && (
              <div className="chat-message bot">
                <div className="typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}

            <div ref={chatEndRef}></div>
          </div>

          <div className="chat-footer">
            <input
              type="text"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;
