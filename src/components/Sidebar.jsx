import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="w-64 shrink-0 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 hidden lg:block">
      <div className="mb-4">
        <h3 className="text-xs font-semibold text-gray-500 uppercase">Navigation</h3>
        <ul className="mt-2 space-y-1 text-sm">
          <li><Link to="/home" className="block px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Home</Link></li>
          <li><Link to="/chats" className="block px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Chats</Link></li>
          <li><Link to="/profile" className="block px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Profile</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="text-xs font-semibold text-gray-500 uppercase">Shortcuts</h3>
        <ul className="mt-2 space-y-1 text-sm">
          <li><button className="w-full text-left px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Create Post</button></li>
          <li><button className="w-full text-left px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Find Clubs</button></li>
          <li><button className="w-full text-left px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Invite Friends</button></li>
        </ul>
      </div>
    </aside>
  );
}
