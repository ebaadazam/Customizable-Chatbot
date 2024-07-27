import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ChatbotInterface.css'; // Create and import CSS file for styling

const ChatbotInterface = () => {
  const [settings, setSettings] = useState({});
  const [messages, setMessages] = useState([
    { type: 'received', text: 'Hello, how can I help you?', timestamp: new Date() },
  ]);
  const [input, setInput] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/customize')
      .then(response => {
        setSettings(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the settings!', error);
      });
  }, []);

  const handleSend = () => {
    if (input.trim() !== '') {
      // Add user's message to the chat
      setMessages([...messages, { type: 'sent', text: input, timestamp: new Date() }]);
      
      // Send user's message to the backend and get a response
      axios.post('http://localhost:8000/api/chat/', { message: input })
        .then(response => {
          // Add bot's response to the chat
          setMessages([...messages, { type: 'sent', text: input, timestamp: new Date() }, 
            { type: 'received', text: response.data.reply, timestamp: new Date() }]);
          setInput('');
        })
        .catch(error => {
          console.error('There was an error sending the message!', error);
        });
    }
  };

  return (
    <div className="parent-container">
      <div className="chatbot-container" style={{ backgroundColor: settings.backgroundColor }}>
        <div className="chatbot-header" style={{ backgroundColor: settings.mainColor }}>
          <h3>Blind Assistant Version 2</h3>
        </div>
        <div className="chatbot-body">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.type}-message`} style={{
              backgroundColor: msg.type === 'received' ? settings.receivedMessageColor : settings.sendMessageColor,
              color: msg.type === 'received' ? settings.receivedMessageTextColor : settings.sendMessageTextColor
            }}>
              <p>{msg.text}</p>
              <span className="timestamp">{msg.timestamp.toLocaleTimeString()}</span>
            </div>
          ))}
        </div>
        <div className="chatbot-footer">
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button onClick={handleSend} style={{ backgroundColor: settings.sendMessageColor }}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotInterface;
