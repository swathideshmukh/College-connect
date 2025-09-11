import React from 'react';

export default function FloatingActionButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-nieBlue to-blue-500 text-white text-2xl shadow-lg"
      aria-label="Create"
    >
      +
    </button>
  );
}
