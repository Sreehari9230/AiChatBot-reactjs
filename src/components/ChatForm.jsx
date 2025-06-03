import { Send } from "lucide-react";
import React, { useRef } from "react";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const handleFormSubmission = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";

    // updating chatHistory with user's message
    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);

    // "Thinking..." placeholder for the bots response
    setTimeout(() => {
      setChatHistory((history) => [
        ...history,
        { role: "model", text: "Thinking..." },
      ]);
      //call the funtion to generate bots response
      generateBotResponse([
        ...chatHistory,
        { role: "user", text: userMessage },
      ]);
    }, 600);

    console.log(userMessage);
  };

  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmission}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Message...."
        className="message-input"
        required
      />
      <button>
        <Send />
      </button>
    </form>
  );
};

export default ChatForm;
