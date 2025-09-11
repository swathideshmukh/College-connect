import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';

// Simple modal component for inline editing
function EditProfileModal({ open, initial, onClose, onSave }) {
  const [form, setForm] = useState(initial);

  React.useEffect(() => {
    setForm(initial);
  }, [initial]);

  if (!open) return null;

  function onChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSave(e) {
    e.preventDefault();
    onSave(form);
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 px-4">
      <div className="w-full max-w-lg rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800">
          <h3 className="font-semibold">Edit Profile</h3>
        </div>
        <form onSubmit={handleSave} className="p-4 space-y-3">
          <div>
            <label className="text-sm block mb-1">Name</label>
            <input
              className="w-full px-3 py-2 rounded bg-gray-100 dark:bg-gray-800"
              name="name"
              value={form.name}
              onChange={onChange}
              required
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="text-sm block mb-1">Year</label>
              <input
                className="w-full px-3 py-2 rounded bg-gray-100 dark:bg-gray-800"
                name="year"
                value={form.year}
                onChange={onChange}
              />
            </div>
            <div>
              <label className="text-sm block mb-1">Branch</label>
              <input
                className="w-full px-3 py-2 rounded bg-gray-100 dark:bg-gray-800"
                name="branch"
                value={form.branch}
                onChange={onChange}
              />
            </div>
          </div>
          <div>
            <label className="text-sm block mb-1">Bio</label>
            <textarea
              className="w-full px-3 py-2 rounded bg-gray-100 dark:bg-gray-800"
              name="bio"
              value={form.bio}
              onChange={onChange}
              rows={3}
            />
          </div>
          <div className="flex items-center justify-end gap-2 pt-2">
            <button type="button" onClick={onClose} className="px-3 py-2 rounded bg-gray-200 dark:bg-gray-800">
              Cancel
            </button>
            <button type="submit" className="px-3 py-2 rounded bg-nieBlue text-white">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function Profile() {
  const [user, setUser] = useState({
    name: 'New User',
    year: '1st Year',
    branch: 'CSE',
    bio: 'Excited to be part of NIE community!',
    avatar: '',
    banner: '',
    interests: ['Coding', 'Hiking', 'Dance'], // optional; can be removed later
  });

  const [openEdit, setOpenEdit] = useState(false);

  function handleSave(updated) {
    setUser(updated);
    setOpenEdit(false);
    // TODO: call backend to persist
  }

  const posts = Array.from({ length: 9 }).map((_, i) => ({
    id: i + 1,
  }));

  return (
    <>
      <Navbar />

      {/* Profile header */}
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <div className="mx-auto max-w-5xl px-4 pt-6">
          <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow">
            <div className="relative">
              <div className="h-48 w-full bg-gray-200 dark:bg-gray-800" />
            </div>

            <div className="p-4 sm:p-6 relative">
              <div className="absolute -top-10 left-6">
                <div className="w-24 h-24 rounded-full ring-4 ring-white dark:ring-gray-900 overflow-hidden bg-gray-300 dark:bg-gray-700" />
              </div>

              <div className="sm:ml-40 mt-12 sm:mt-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-bold">{user.name}</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {user.year} • {user.branch}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => setOpenEdit(true)} className="px-3 py-2 rounded bg-gray-200 dark:bg-gray-800">
                      Edit profile
                    </button>
                    <button className="px-3 py-2 rounded bg-nieBlue text-white">Share</button>
                  </div>
                </div>

                {user.bio && <p className="mt-3 text-sm text-gray-700 dark:text-gray-200">{user.bio}</p>}

                {user.interests?.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {user.interests.map((i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800">
                        {i}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Posts grid */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">Posts</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {posts.map((p) => (
                <div key={p.id} className="aspect-square overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <EditProfileModal open={openEdit} initial={user} onClose={() => setOpenEdit(false)} onSave={handleSave} />
    </>
  );
}
