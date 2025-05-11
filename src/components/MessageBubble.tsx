
import React from "react";

interface MessageBubbleProps {
  content: string;
  timestamp: string;
  isSent: boolean;
  avatar?: string;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({
  content,
  timestamp,
  isSent,
  avatar,
}) => {
  return (
    <div className={`flex items-end mb-4 ${isSent ? "justify-end" : ""}`}>
      {!isSent && avatar && (
        <img
          src={avatar}
          alt="Avatar"
          className="w-8 h-8 rounded-full mr-2 mb-1"
        />
      )}
      <div>
        <div 
          className={`px-4 py-3 rounded-2xl max-w-[80%] ${
            isSent 
              ? "bg-[hsl(var(--message-primary))] text-white rounded-br-none" 
              : "bg-gray-100 rounded-bl-none"
          }`}
        >
          <p className="text-sm">{content}</p>
        </div>
        <p className={`text-xs text-gray-500 mt-1 ${isSent ? "text-right" : "text-left"}`}>
          {timestamp}
        </p>
      </div>
    </div>
  );
};

export default MessageBubble;
