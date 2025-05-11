
import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface MessageHeaderProps {
  name: string;
  status: string;
  avatar: string;
}

const MessageHeader: React.FC<MessageHeaderProps> = ({ name, status, avatar }) => {
  const navigate = useNavigate();
  
  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-10 border-b border-gray-200">
      <div className="flex items-center p-3">
        <button 
          onClick={() => navigate(-1)} 
          className="mr-2 p-1 rounded-full hover:bg-gray-100"
        >
          <ArrowLeft size={24} />
        </button>
        <div className="flex items-center">
          <div className="relative">
            <img
              src={avatar}
              alt={`${name}'s avatar`}
              className="w-10 h-10 rounded-full object-cover"
            />
            {status === "Online" && (
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            )}
          </div>
          <div className="ml-3">
            <h1 className="font-semibold text-lg">{name}</h1>
            <p className="text-sm text-green-600">{status}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageHeader;
