
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
        <div className={isSent ? "message-bubble-sent" : "message-bubble-received"}>
          <p>{content}</p>
        </div>
        <p className={`text-xs text-gray-500 mt-1 ${isSent ? "text-right" : "text-left"}`}>
          {timestamp}
        </p>
      </div>
    </div>
  );
};

export default MessageBubble;
