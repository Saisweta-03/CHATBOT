import { X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./AIChatModal.css"; // Import the CSS file

const AIChatModal = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (input.trim() === "") return;
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "I'm still learning! But I can help you navigate the website." },
      ]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="chat-modal" role="dialog" aria-labelledby="chatbot-title">
      {/* Header */}
      <div className="chat-header">
        <h2 id="chatbot-title" className="chat-title">
          MediBot
        </h2>
        <button
          className="close-button"
          onClick={onClose}
          aria-label="Close chatbot"
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="messages-container">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === "bot" ? "bot" : "user"}`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="input-container">
        <input
          type="text"
          className="chat-input"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          aria-label="Chat input"
        />
        <button
          className="send-button"
          onClick={handleSend}
          aria-label="Send message"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default AIChatModal;