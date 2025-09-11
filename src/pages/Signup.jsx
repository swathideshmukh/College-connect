import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('student'); // 'student' | 'club'
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    collegeId: '',
  });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  function onChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setErr('');
    if (!form.name || !form.email || !form.password || !form.collegeId) {
      setErr('Please fill all required fields');
      return;
    }
    try {
      setLoading(true);
      await new Promise((r) => setTimeout(r, 700)); // simulate API call
      navigate('/profile/setup', { replace: true });
    } catch {
      setErr('Signup failed. Try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen grid place-items-center bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-xl shadow p-6">
        <div className="flex gap-2 mb-6">
          <button
            type="button"
            onClick={() => setActiveTab('student')}
            className={`flex-1 py-2 rounded ${activeTab === 'student' ? 'bg-nieBlue text-white' : 'bg-gray-100 dark:bg-gray-800'}`}
          >
            Student
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('club')}
            className={`flex-1 py-2 rounded ${activeTab === 'club' ? 'bg-nieBlue text-white' : 'bg-gray-100 dark:bg-gray-800'}`}
          >
            Club
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-3">
          <input
            className="w-full px-3 py-2 rounded bg-gray-100 dark:bg-gray-800"
            placeholder={activeTab === 'club' ? 'Club Name' : 'Name'}
            name="name"
            value={form.name}
            onChange={onChange}
            required
            autoComplete="name"
          />
          <input
            className="w-full px-3 py-2 rounded bg-gray-100 dark:bg-gray-800"
            placeholder="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            required
            autoComplete="email"
          />
          <input
            className="w-full px-3 py-2 rounded bg-gray-100 dark:bg-gray-800"
            placeholder="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={onChange}
            required
            autoComplete="new-password"
          />
          <input
            className="w-full px-3 py-2 rounded bg-gray-100 dark:bg-gray-800"
            placeholder={activeTab === 'club' ? 'Club ID' : 'College ID'}
            name="collegeId"
            value={form.collegeId}
            onChange={onChange}
            required
            autoComplete="organization"
          />

          {err && <p className="text-sm text-red-600">{err}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded bg-nieBlue text-white disabled:opacity-60"
          >
            {loading ? 'Creating account…' : 'Sign up'}
          </button>
        </form>

        <p className="text-sm mt-3 text-center">
          Have an account? <Link to="/login" className="text-nieBlue underline">Login</Link>
        </p>
      </div>
    </div>
  );
}
