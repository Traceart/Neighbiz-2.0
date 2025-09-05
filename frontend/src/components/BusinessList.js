import React, { useState, useEffect } from "react";

export default function BusinessList() {
  const [businesses, setBusinesses] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchBusinesses(query = "") {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/businesses${query}`);
      const data = await res.json();
      if (res.ok) setBusinesses(data);
      else setError(data.error || "Failed to load businesses");
    } catch (err) {
      setError("Network error");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchBusinesses();
  }, []);

  function handleSearch(e) {
    e.preventDefault();
    const q = search ? `?search=${encodeURIComponent(search)}` : "";
    fetchBusinesses(q);
  }

  return (
    <div className="max-w-4xl mx-auto my-8">
      <form className="flex gap-2 mb-4" onSubmit={handleSearch}>
        <input className="flex-1 px-4 py-2 border rounded" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search businesses..." />
        <button className="bg-teal text-white px-4 py-2 rounded" type="submit">Search</button>
      </form>
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}
      <ul className="grid md:grid-cols-2 gap-4">
        {businesses.map(biz => (
          <li key={biz._id} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold text-lg text-navy">{biz.businessName}</h3>
            <div className="text-gray-700">Owner: {biz.ownerName}</div>
            <div className="text-gray-500 text-sm">Category: {biz.category}</div>
            <div className="text-gray-500 text-sm">Email: {biz.email}</div>
          </li>
        ))}
      </ul>
      {!loading && businesses.length === 0 && <div className="text-gray-500 text-center">No businesses found.</div>}
    </div>
  );
}
