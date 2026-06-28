import React, { useState } from 'react';
import { conversationsData } from '../data/mockData';
import './Conversations.css';

export default function Conversations() {
  const [activeChat, setActiveChat] = useState(conversationsData[0]);
  const [inputMsg, setInputMsg] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;
    // In real app: calls API
    setInputMsg('');
  };

  return (
    <div className="conversations-layout fade-in">
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
              onClick={() => setActiveChat(convo)}
            >
              <div className="chat-avatar">{convo.avatar}</div>
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
              <div className="chat-avatar">{activeChat.avatar}</div>
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
              {activeChat.messages.map((msg, i) => (
                <div key={i} className={`message-bubble ${msg.sender}`}>
                  {msg.sender === 'bot' && (
                    <div className="bot-icon"><i className='bx bxs-bot'></i></div>
                  )}
                  <div className="bubble-content">
                    <p>{msg.text}</p>
                    <span className="msg-time">{msg.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <form className="message-input glass-panel" onSubmit={handleSend}>
              <input
                type="text"
                value={inputMsg}
                onChange={e => setInputMsg(e.target.value)}
                placeholder="Type a message or reply..."
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
