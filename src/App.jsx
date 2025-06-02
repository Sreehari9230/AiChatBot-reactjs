import React from "react";
import ChatBotIcon from "./components/ChatBotIcon";
import { ArrowDown, Send, ChevronDown } from "lucide-react";
import ChatForm from "./components/ChatForm";

const App = () => {
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
              Hey there bkghbhnjbhdsbkjds <br /> tye some shit
            </p>
          </div>
          <div className="message user-message">
            <p className="message-text">bla bla bla ba</p>
          </div>
        </div>

        {/* chat-footer */}
        <div className="chat-footer">
          <ChatForm />
        </div>
      </div>
    </div>
  );
};

export default App;
