import React, { useState } from 'react';

const Message = () => {
    const [messages, setMessages] = useState([
        { sender: "John", text: "Hello! I'm interested in your services." },
        { sender: "Artisan", text: "Great! Let's discuss your project." }
    ]);
    const [newMessage, setNewMessage] = useState("");

    const sendMessage = () => {
        setMessages([...messages, { sender: "You", text: newMessage }]);
        setNewMessage("");
    };

    return (
        <div>
            <h2>Messages</h2>
            <div>
                {messages.map((message, index) => (
                    <p key={index}><strong>{message.sender}:</strong> {message.text}</p>
                ))}
            </div>
            <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message"
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Message;
