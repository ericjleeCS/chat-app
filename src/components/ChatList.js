import React, { useState, useEffect } from 'react';


const ChatList = ({chats, onSelectChat}) =>{
    return(
        <div className = "chat-list">
            {chats.map((chat) => (
                <div
                key = {chat.id}
                className = "chat-item"
                onClick={() => onSelectChat(chat.id)}
                >
                    <div className = "chat-item-details">
                        <div className = "chat-item-title">
                            <div className = "last-message">
                                {chat.lastMessage}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ChatList