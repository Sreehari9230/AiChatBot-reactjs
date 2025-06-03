import React, { useState } from "react";
import ChatBotIcon from "./components/ChatBotIcon";
import { ArrowDown, Send, ChevronDown } from "lucide-react";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);
  // console.log(chatHistory, "chatHistory in app.jsx");

  const generateBotResponse = (history) => {
    console.log(history);
  };

  return (
    <div className="container">
      <div className="chatbot-popup">
        {/* chatBot-Header */}
        <div className="chat-header">
          <div className="headerinfo">
            <ChatBotIcon />
            <h2 className="logo-text">ChatBot</h2>
          </div>
          <button>
            <ChevronDown />
          </button>
        </div>
        {/* chatbot body */}
        <div className="chat-body">
          <div className="message bot-message">
            <ChatBotIcon />
            <p className="message-text">
              Hey there <br /> type some shit
            </p>
          </div>

          {/* render chatHistory dynamically */}
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>

        {/* chat-footer */}
        <div className="chat-footer">
          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
