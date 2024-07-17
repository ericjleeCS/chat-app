import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './ChatApp.css'
import ChatList from '../components/ChatList'



const ChatPage = () => {
    const [msg, setMsg] = useState([])
    const [currentMsg, setCurrMsg] = useState('')

    const socket = io('http://localhost:5000')

    useEffect(() => {
        socket.on('message', (msg) => {
            setMsg((prevMessages) => [...prevMessages, msg])
        });
        return () => {
            socket.off('message')
        };
    }, []);

    const handleInputChange = (e) => {
        setCurrMsg(e.target.value)
    }

    const sendMessage = () => {
        if (currentMsg.trim()){
            socket.emit('sendMsg', currentMsg)
            setCurrMsg('')
        }
    }


    return(
        <div className = "chat-application">
            <div className = "user-list">
            <ChatList chats={msg}  />
            </div>
            <div className='chat-window'>
                {msg.map((message,index) =>(
                    <div key = {index} className = "chat-message">
                        {message}
                        </div>
                ))}
            </div>
            <div className = "input-field">
                <input
                type = "text"
                value = {currentMsg}
                onChange = {handleInputChange}
                placeholder = "Type your message here..."
                />
                <button onClick= {sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default ChatPage