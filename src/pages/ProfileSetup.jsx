import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProfileSetup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    year: '',
    branch: '',
    bio: '',
  });
  const [loading, setLoading] = useState(false);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    // TODO: persist to backend
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    navigate('/profile', { replace: true });
  }

  return (
    <div className="min-h-screen grid place-items-center bg-gray-50 dark:bg-gray-950 px-4">
      <div className="w-full max-w-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow">
        <h1 className="text-xl font-bold mb-4">Complete Profile</h1>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          Add basic details to finish setting up the account.
        </p>
        <form onSubmit={onSubmit} className="space-y-3">
          <input
            className="w-full px-3 py-2 rounded bg-gray-100 dark:bg-gray-800"
            placeholder="Full Name"
            name="name"
            value={form.name}
            onChange={onChange}
            required
          />
          <div className="grid sm:grid-cols-2 gap-3">
            <input
              className="w-full px-3 py-2 rounded bg-gray-100 dark:bg-gray-800"
              placeholder="Year (e.g., 1st Year)"
              name="year"
              value={form.year}
              onChange={onChange}
              required
            />
            <input
              className="w-full px-3 py-2 rounded bg-gray-100 dark:bg-gray-800"
              placeholder="Branch (e.g., CSE)"
              name="branch"
              value={form.branch}
              onChange={onChange}
              required
            />
          </div>
          <textarea
            className="w-full px-3 py-2 rounded bg-gray-100 dark:bg-gray-800"
            placeholder="Short bio (optional)"
            name="bio"
            value={form.bio}
            onChange={onChange}
            rows={3}
          />
          <button className="w-full py-2 rounded bg-nieBlue text-white" disabled={loading}>
            {loading ? 'Saving…' : 'Save and continue'}
          </button>
        </form>
      </div>
    </div>
  );
}
