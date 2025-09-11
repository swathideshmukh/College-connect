import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Sidebar from '../components/Sidebar.jsx';
import PostCard from '../components/PostCard.jsx';
import FloatingActionButton from '../components/FloatingActionButton.jsx';

const demoPosts = [
  { id:1, author:'Coding Club', time:'2h', caption:'Hackathon meetup this Friday!', likes:24, comments:5 },
  { id:2, author:'Hiking Tribe', time:'5h', caption:'Chamundi morning trek ☀️', likes:48, comments:12 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      <div className="mx-auto max-w-6xl px-4 py-6 flex gap-6">
        <Sidebar />
        <main className="flex-1 space-y-6">
          <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-gradient-to-br from-pastelYellow to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold mb-1">Clubs at NIE</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Explore coding, robotics, and cultural clubs</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-pastelOrange to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold mb-1">Find Your Tribe</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Hiking, dance, anime, sports—meet your people</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-blue-100 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold mb-1">Find Your Friends</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">People with similar interests at NIE</p>
            </div>
          </section>

          <section className="space-y-4">
            {demoPosts.map((p) => <PostCard key={p.id} post={p} />)}
          </section>
        </main>
      </div>
      <FloatingActionButton onClick={() => alert('Create Post / Join Group')} />
    </div>
  );
}
