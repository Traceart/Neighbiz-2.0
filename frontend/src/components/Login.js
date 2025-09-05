import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (res.ok && data.token) {
        onLogin(data);
      } else {
        setError(data.error || "Login failed");
      }
    } catch (err) {
      setError("Network error");
    }
    setLoading(false);
  }

  return (
    <form className="space-y-4 max-w-sm mx-auto" onSubmit={handleSubmit}>
      <input className="w-full px-4 py-3 border border-gray-300 rounded-xl" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input className="w-full px-4 py-3 border border-gray-300 rounded-xl" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
      <button className="w-full bg-teal text-white py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-colors" disabled={loading}>{loading ? "Signing in..." : "Sign In"}</button>
      {error && <div className="text-red-500 text-center">{error}</div>}
    </form>
  );
}
