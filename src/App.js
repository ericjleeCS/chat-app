import React, { useState } from 'react';
import ChatPage from './pages/ChatPage';

const App = () => {
  const [chats, setChats] = useState([

  ]);

  const handleSelectChat = (chatId) => {
    console.log(`Selected chat ID: ${chatId}`);
    // Add logic to handle chat selection
  };

  return (
    <div>
      <h1>Chat Application</h1>
      <ChatPage/>
   
      
    </div>
  );
};

export default App;
