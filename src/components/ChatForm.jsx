import { Send } from 'lucide-react'
import React from 'react'

const ChatForm = () => {
  return (
<form action="#" className="chat-form">
            <input
              type="text"
              placeholder="Message...."
              className="message-input"
              required
            />
            <button>
              <Send/>
            </button>
          </form>
  )
}

export default ChatForm
