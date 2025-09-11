import React, { useState } from 'react';

export default function ChatBox({ activeChat = { name: 'NIE Coding Club' } }) {
  const [messages, setMessages] = useState([
    { id: 1, from: 'You', text: 'Hey everyone!' },
    { id: 2, from: activeChat.name, text: 'Welcome to the group 🎉' },
  ]);
  const [input, setInput] = useState('');

  function sendMessage(e) {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((m) => [...m, { id: Date.now(), from: 'You', text: input }]);
    setInput('');
  }

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
      <div className="p-3 border-b border-gray-200 dark:border-gray-800 font-semibold">{activeChat.name}</div>
      <div className="flex-1 p-3 space-y-2 overflow-y-auto">
        {messages.map((m) => (
          <div key={m.id} className={`max-w-[70%] px-3 py-2 rounded-lg ${m.from === 'You' ? 'ml-auto bg-nieBlue text-white' : 'bg-gray-100 dark:bg-gray-800'}`}>
            <p className="text-xs opacity-70 mb-0.5">{m.from}</p>
            <p className="text-sm">{m.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="p-3 border-t border-gray-200 dark:border-gray-800 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Message..."
          className="flex-1 px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-800 focus:outline-none"
        />
        <button className="px-4 py-2 rounded-md bg-nieBlue text-white">Send</button>
      </form>
    </div>
  );
}
