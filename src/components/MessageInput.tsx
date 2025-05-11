
import React, { useState } from "react";
import { Send, Paperclip } from "lucide-react";

interface MessageInputProps {
  onSendMessage: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3">
      <div className="relative flex items-center">
        <button className="absolute left-3 text-gray-500">
          <Paperclip size={20} />
        </button>
        <input
          type="text"
          placeholder="Write your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          className="message-input pl-10"
        />
        <button
          onClick={handleSendMessage}
          className="absolute right-3 text-[hsl(var(--message-primary))]"
          disabled={!message.trim()}
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
