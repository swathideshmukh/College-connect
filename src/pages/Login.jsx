import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('student'); // 'student' | 'club'
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');
  const [showPw, setShowPw] = useState(false);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setErr('');
    if (!form.email || !form.password) {
      setErr('Please enter email and password');
      return;
    }
    try {
      setLoading(true);
      await new Promise((r) => setTimeout(r, 600)); // simulate API call
      navigate('/home');
    } catch {
      setErr('Login failed. Try again.');
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
            placeholder="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            required
            autoComplete="email"
          />

          <div className="relative">
            <input
              className="w-full px-3 py-2 pr-10 rounded bg-gray-100 dark:bg-gray-800"
              placeholder="Password"
              type={showPw ? 'text' : 'password'}
              name="password"
              value={form.password}
              onChange={onChange}
              required
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowPw((s) => !s)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-600 dark:text-gray-300"
              aria-label="Toggle password visibility"
            >
              {showPw ? 'Hide' : 'Show'}
            </button>
          </div>

          {err && <p className="text-sm text-red-600">{err}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded bg-nieBlue text-white disabled:opacity-60"
          >
            {loading ? 'Logging in…' : 'Login'}
          </button>
        </form>

        <p className="text-sm mt-3 text-center">
          No account? <Link to="/signup" className="text-nieBlue underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
