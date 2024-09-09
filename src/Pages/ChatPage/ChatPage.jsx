import React, { useState, useEffect } from "react";
import "./ChatPage.css";

const ChatPage = ({ sender, receiver }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  console.log(sender, receiver);

  useEffect(() => {
    // Bu yerda serverdan xabarlarni olish va setMessages yordamida saqlash kerak bo'ladi
    // Misol uchun, oldingi xabarlarni serverdan olish
  }, [receiver]);

  const handleSendMessage = (event) => {
    event.preventDefault();

    if (newMessage.trim() === "") return;

    const message = {
      sender,
      receiver,
      content: newMessage,
      timestamp: new Date(),
    };

    // Xabarni serverga jo'natish va mahalliy holatda saqlash
    setMessages([...messages, message]);
    setNewMessage("");

    // Bu yerda serverga xabarni jo'natish logikasini qo'shishingiz mumkin
  };

  return (
    <div className="chat-page">
      <div className="chat-header">
        <h2>Chat with {receiver}</h2>
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === sender ? "sent" : "received"}`}
          >
            <div className="message-content">{msg.content}</div>
            <div className="message-timestamp">
              {msg.timestamp.toLocaleTimeString()}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="chat-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Xabar yozing..."
        />
        <button type="submit">Yuborish</button>
      </form>
    </div>
  );
};

export default ChatPage;
