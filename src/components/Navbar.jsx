import React, { useContext } from 'react';
import { DarkModeContext } from '../App.jsx';
import { Bell, Sun, Moon, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <nav className="sticky top-0 z-40 flex items-center justify-between px-4 py-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow">
      <Link to="/home" className="text-nieBlue font-extrabold tracking-tight">NIE Community</Link>

      <div className="flex items-center gap-3">
        <div className="relative hidden sm:block">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
          <input
            className="pl-7 pr-3 py-1.5 rounded-md text-sm bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-nieBlue"
            placeholder="Search clubs, groups, friends..."
          />
        </div>

        <Bell className="text-gray-700 dark:text-gray-300" size={20} />

        <button
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle theme"
          className="p-1.5 rounded-full bg-gray-200 dark:bg-gray-700"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <Link to="/profile" className="w-8 h-8 rounded-full bg-gradient-to-br from-pastelYellow to-pastelOrange border border-gray-200 dark:border-gray-700" />
      </div>
    </nav>
  );
}
