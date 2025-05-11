
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center mt-12">LostTrack</h1>
        <p className="text-center text-gray-600 mb-8">Your mobile lost and found app</p>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Link to="/messages" className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <span className="font-medium text-gray-800">Messages</span>
          </Link>
          
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <span className="font-medium text-gray-800">Report Found</span>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
                <path d="m21 3-9 9"></path>
                <path d="M12 12 3 21"></path>
                <path d="m21 21-9-9"></path>
                <path d="M12 12 3 3"></path>
              </svg>
            </div>
            <span className="font-medium text-gray-800">Report Lost</span>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <span className="font-medium text-gray-800">Profile</span>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="font-semibold text-lg mb-2">Recent Activity</h2>
          <div className="space-y-3">
            <div className="flex items-center p-2 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium">New match found for your item</p>
                <p className="text-xs text-gray-500">2 minutes ago</p>
              </div>
            </div>
            
            <div className="flex items-center p-2 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium">New message from Mike Johnson</p>
                <p className="text-xs text-gray-500">1 hour ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
