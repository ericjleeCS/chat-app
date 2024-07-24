import React from 'react';
import PropTypes from 'prop-types';

const ChatList = ({ chats, onSelectChat }) => {
  return (
    <div className="chat-list">
      {chats.map((chat) => (
        <div
          key={chat.id}
          className="chat-item"
          onClick={() => onSelectChat(chat.id)}
        >
          <div className="chat-item-details">
            <div className="chat-item-title">{chat.title}</div>
            <div className="last-message">{chat.lastMessage}</div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default ChatList;
