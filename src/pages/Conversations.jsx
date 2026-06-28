import React, { useState, useEffect, useRef } from 'react';
import { conversationsData } from '../data/mockData';
import './Conversations.css';

export default function Conversations() {
  const [activeChat, setActiveChat] = useState(conversationsData[0]);
  const [inputMsg, setInputMsg] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState(activeChat.messages);
  const [showList, setShowList] = useState(true); // Always show list first on mobile

  const messagesEndRef = useRef(null);

  useEffect(() => {
    setMessages(activeChat.messages);
  }, [activeChat]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;
    
    const newMsg = { sender: 'customer', text: inputMsg, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages(prev => [...prev, newMsg]);
    setInputMsg('');
    setIsTyping(true);

    // Fake bot reply
    setTimeout(() => {
      setIsTyping(false);
      const botMsg = { 
        sender: 'bot', 
        text: "Thanks for sharing! I've updated the lead profile in our system. Is there anything else I can help with?", 
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
      };
      setMessages(prev => [...prev, botMsg]);
    }, 1500 + Math.random() * 1000); // 1.5 to 2.5s delay
  };

  return (
    <div className={`conversations-layout fade-in ${showList ? 'show-list' : 'show-chat'}`}>
      {/* Chat List Panel */}
      <div className="chat-list glass-panel">
        <h2 className="chat-list-title">Conversations</h2>
        <div className="chat-list-search glass-panel">
          <i className='bx bx-search'></i>
          <input type="text" placeholder="Search chats..." />
        </div>
        <div className="chat-items">
          {conversationsData.map(convo => (
            <div
              key={convo.id}
              className={`chat-item ${activeChat?.id === convo.id ? 'active' : ''}`}
              onClick={() => {
                setActiveChat(convo);
                if (window.innerWidth <= 900) {
                  setShowList(false); // Hide list to show chat on mobile
                }
              }}
            >
              <div className="chat-avatar">
                {convo.avatar}
                {convo.isOnline && <div className="online-dot"></div>}
              </div>
              <div className="chat-item-details">
                <div className="chat-item-header">
                  <span className="chat-item-name">{convo.customer}</span>
                  <span className="chat-item-time">{convo.time}</span>
                </div>
                <div className="chat-item-preview">
                  <span>{convo.lastMessage}</span>
                  {convo.unread > 0 && <span className="unread-badge">{convo.unread}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="chat-window glass-panel">
        {activeChat ? (
          <>
            <div className="chat-header">
              <button className="mobile-back-btn icon-btn" onClick={() => setShowList(true)}>
                <i className='bx bx-left-arrow-alt'></i>
              </button>
              <div className="chat-avatar">
                {activeChat.avatar}
                {activeChat.isOnline && <div className="online-dot"></div>}
              </div>
              <div>
                <h3>{activeChat.customer}</h3>
                <span className={`badge ${activeChat.status}`}>{activeChat.status.toUpperCase()}</span>
              </div>
              <div className="chat-header-actions">
                <button className="icon-btn glass-panel"><i className='bx bx-phone'></i></button>
                <button className="icon-btn glass-panel"><i className='bx bx-dots-vertical-rounded'></i></button>
              </div>
            </div>

            <div className="messages-area">
              {messages.map((msg, i) => (
                <div key={i} className={`message-bubble ${msg.sender} fade-in`}>
                  {msg.sender === 'bot' && (
                    <div className="bot-icon"><i className='bx bxs-bot'></i></div>
                  )}
                  <div className="bubble-content">
                    {/* Render newlines properly for bot msgs */}
                    <p style={{ whiteSpace: 'pre-wrap' }}>{msg.text}</p>
                    <span className="msg-time">{msg.time}</span>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="message-bubble bot fade-in">
                  <div className="bot-icon"><i className='bx bxs-bot'></i></div>
                  <div className="bubble-content typing-indicator">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form className="message-input glass-panel" onSubmit={handleSend}>
              <input
                type="text"
                value={inputMsg}
                onChange={e => setInputMsg(e.target.value)}
                placeholder="Type a message to take over from bot..."
              />
              <button type="submit" className="send-btn">
                <i className='bx bxs-send'></i>
              </button>
            </form>
          </>
        ) : (
          <div className="no-chat-selected">
            <i className='bx bx-message-square-dots'></i>
            <p>Select a conversation</p>
          </div>
        )}
      </div>
    </div>
  );
}
