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

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === "") return;

    // Add user's message
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    try {
      // Send request and wait for response
      const response = await axios.post("http://localhost:8000/chat", { query: input });
      console.log(response);
      // Get bot response from API
      const botReply = response?.data?.response || "I'm still learning! But I can help you navigate the website.";

      // Add bot's response
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, I couldn't get a response. Please try again." },
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="chat-modal" role="dialog" aria-labelledby="chatbot-title">
      {/* Header */}
      <div className="chat-header">
        <h2 id="chatbot-title" className="chat-title">MediBot</h2>
        <button className="close-button" onClick={onClose} aria-label="Close chatbot">
          <X size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="messages-container">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender === "bot" ? "bot" : "user"}`}>
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
          onKeyDown={handleKeyDown} // Fixed event
          aria-label="Chat input"
        />
        <button className="send-button" onClick={handleSend} aria-label="Send message">
          Send
        </button>
      </div>
    </div>
  );
};

export default AIChatModal;
