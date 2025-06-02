import React from "react";
import ChatBotIcon from "./components/ChatBotIcon";
import { ArrowDown, Send } from "lucide-react";

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
            <ArrowDown />
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
          <form action="#" className="chat-form">
            <input
              type="text"
              placeholder="Message...."
              className="message-input"
              required
            />
            <button>
              <Send/>   //arrowUpward
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
