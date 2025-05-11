
import React from "react";
import { Link } from "react-router-dom";

interface Contact {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
  status: string;
}

const contacts: Contact[] = [
  {
    id: "1",
    name: "Joanna Codilla",
    avatar: "/placeholder.svg",
    lastMessage: "Oh ok, thanks!",
    timestamp: "9:50 AM",
    unread: false,
    status: "Online",
  },
  {
    id: "2",
    name: "Mike Johnson",
    avatar: "/placeholder.svg",
    lastMessage: "I think I found your wallet at the park",
    timestamp: "Yesterday",
    unread: true,
    status: "Offline",
  },
  {
    id: "3",
    name: "Sarah Williams",
    avatar: "/placeholder.svg",
    lastMessage: "Is the phone still available?",
    timestamp: "Yesterday",
    unread: false,
    status: "Offline",
  },
  {
    id: "4",
    name: "LostTrack Support",
    avatar: "/placeholder.svg",
    lastMessage: "Thank you for using our app!",
    timestamp: "03/15/24",
    unread: false,
    status: "Online",
  },
];

const MessagesListPage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white z-10 border-b border-gray-200 p-4">
        <h1 className="text-2xl font-bold text-center">Messages</h1>
      </header>
      <div className="flex-1 overflow-y-auto pt-16 pb-2">
        {contacts.map((contact) => (
          <Link to={`/messages/${contact.id}`} key={contact.id}>
            <div className="flex items-center p-4 border-b border-gray-100 hover:bg-gray-50">
              <div className="relative">
                <img
                  src={contact.avatar}
                  alt={`${contact.name}'s avatar`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                {contact.status === "Online" && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div className="ml-3 flex-1">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-lg">{contact.name}</h3>
                  <span className="text-xs text-gray-500">{contact.timestamp}</span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-sm text-gray-600 truncate max-w-[70%]">
                    {contact.lastMessage}
                  </p>
                  {contact.unread && (
                    <span className="bg-[hsl(var(--message-primary))] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      1
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MessagesListPage;
