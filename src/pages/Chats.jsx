import React from 'react';
import Navbar from '../components/Navbar.jsx';
import ChatBox from '../components/ChatBox.jsx';

export default function Chats() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      <div className="mx-auto max-w-5xl px-4 py-6 grid md:grid-cols-3 gap-4">
        <div className="md:col-span-1 space-y-2">
          <div className="p-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <h3 className="text-sm font-semibold mb-2">Conversations</h3>
            <ul className="space-y-1 text-sm">
              <li className="px-2 py-2 rounded bg-gray-100 dark:bg-gray-800">NIE Coding Club</li>
              <li className="px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Robotics Club</li>
              <li className="px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Hiking Tribe</li>
            </ul>
          </div>
        </div>
        <div className="md:col-span-2">
          <ChatBox />
        </div>
      </div>
    </div>
  );
}
