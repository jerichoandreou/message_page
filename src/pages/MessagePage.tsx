
import React, { useState, useEffect, useRef } from "react";
import MessageHeader from "../components/MessageHeader";
import MessageBubble from "../components/MessageBubble";
import MessageInput from "../components/MessageInput";
import { useParams } from "react-router-dom";

// Sample avatar images
const userAvatar = "/placeholder.svg";
const contactAvatar = "/placeholder.svg";

interface Message {
  id: number;
  content: string;
  timestamp: string;
  isSent: boolean;
}

// Sample initial messages
const initialMessages: Message[] = [
  {
    id: 1,
    content: "Hello",
    timestamp: "9:41 AM",
    isSent: true,
  },
  {
    id: 2,
    content: "Hello! Good Evening, this is Jessica from LostTrack's Contact Support team. How may I help you?",
    timestamp: "9:42 AM",
    isSent: false,
  },
  {
    id: 3,
    content: "Where can I find the matched users contact info?",
    timestamp: "9:45 AM",
    isSent: true,
  },
  {
    id: 4,
    content: "You can find the contact information of matched users by going to the 'Matches' tab and tapping on the specific item. There you'll see a 'Contact' button that will show you the information shared by the other user.",
    timestamp: "9:48 AM",
    isSent: false,
  },
  {
    id: 5,
    content: "Oh ok, thanks!",
    timestamp: "9:50 AM",
    isSent: true,
  },
];

const MessagePage: React.FC = () => {
  const { contactId } = useParams();
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: messages.length + 1,
      content,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      isSent: true,
    };
    setMessages([...messages, newMessage]);

    // Simulate received message
    setTimeout(() => {
      const replyMessage: Message = {
        id: messages.length + 2,
        content: "Thank you for your message. Is there anything else I can help you with regarding your lost item?",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isSent: false,
      };
      setMessages(prevMessages => [...prevMessages, replyMessage]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <MessageHeader
        name="Joanna Codilla"
        status="Online"
        avatar={contactAvatar}
      />
      <div className="flex-1 overflow-y-auto pt-20 pb-20 px-4">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            content={message.content}
            timestamp={message.timestamp}
            isSent={message.isSent}
            avatar={!message.isSent ? contactAvatar : undefined}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default MessagePage;
