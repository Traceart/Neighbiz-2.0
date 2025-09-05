
import React, { useState, useEffect } from "react";
import Logo from "./components/Logo";
import FeatureCard from "./components/FeatureCard";
import CategoryCard from "./components/CategoryCard";
import Modal from "./components/Modal";
import Login from "./components/Login";
import BusinessList from "./components/BusinessList";

function App() {
  const [modal, setModal] = useState(null); // 'signin' | null
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("neighbizUser");
    return stored ? JSON.parse(stored) : null;
  });
  // const [jwt, setJwt] = useState(() => localStorage.getItem("neighbizToken") || "");

  // Show login modal
  function openLogin() {
    setModal("signin");
  }
  function closeModal() {
    setModal(null);
  }

  // Handle login
  function handleLogin(data) {
    setUser(data.user || {});
    // setJwt(data.token); // Not needed unless passing JWT to children
    localStorage.setItem("neighbizUser", JSON.stringify(data.user || {}));
    localStorage.setItem("neighbizToken", data.token);
    setModal(null);
  }

  // Handle logout
  function handleLogout() {
    setUser(null);
    // setJwt("");
    localStorage.removeItem("neighbizUser");
    localStorage.removeItem("neighbizToken");
  }

  // Optionally, refresh user from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("neighbizUser");
    if (stored) setUser(JSON.parse(stored));
    // const token = localStorage.getItem("neighbizToken");
    // if (token) setJwt(token);
  }, []);

  return (
    <div className="min-h-screen bg-light-bg font-poppins">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Logo />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <span className="text-navy font-medium">Hi, {user.name || user.email}</span>
                  <button onClick={handleLogout} className="bg-gray-200 text-navy px-4 py-2 rounded-full hover:bg-gray-300 font-medium">Log Out</button>
                </>
              ) : (
                <>
                  <button onClick={openLogin} className="text-navy hover:text-teal font-medium">Sign In</button>
                  <button onClick={openLogin} className="bg-teal text-white px-6 py-2 rounded-full hover:bg-opacity-90 font-medium">Get Started</button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      <Modal open={modal === "signin"} onClose={closeModal} title="Sign In">
        <Login onLogin={handleLogin} />
      </Modal>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-teal text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Connect with Your Neighborhood</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Discover local businesses and services right in your area. From home repairs to beauty services, find trusted neighbors ready to help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#business-list" className="bg-white text-navy px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              {/* Search Icon */}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              Find Local Services
            </a>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-navy transition-colors flex items-center justify-center gap-2" onClick={user ? undefined : openLogin}>
              {/* Business Icon */}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
              List Your Business
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">How Neighbiz Works</h2>
            <p className="text-gray-600 text-lg">Simple, secure, and local</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard icon={<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>} title="Set Your Radius" desc="Choose how far you want to search - 5km, 10km, or 15km from your location." />
            <FeatureCard icon={<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>} title="Chat Directly" desc="Message businesses directly through our secure in-app chat system." />
            <FeatureCard icon={<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a4 4 0 01-4 4z"></path></svg>} title="Book Appointments" desc="Schedule services directly with businesses that offer appointment booking." />
          </div>
        </div>
      </section>

      {/* Business Listing/Search Section */}
      <section id="business-list" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy mb-4">Find Local Businesses</h2>
            <p className="text-gray-600 text-lg">Browse and search for trusted services in your area</p>
          </div>
          <BusinessList />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Service Categories</h2>
            <p className="text-gray-600 text-lg">Find exactly what you need</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CategoryCard
              icon={<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>}
              title="Home & Handy Help"
              desc="Repairs, maintenance, cleaning, and home improvements"
            />
            <CategoryCard
              icon={<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>}
              title="Beauty"
              desc="Hair, nails, skincare, and wellness services"
            />
            <CategoryCard
              icon={<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path></svg>}
              title="Child & Family Support"
              desc="Childcare, tutoring, and family assistance"
            />
            <CategoryCard
              icon={<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 1v6m6-6v6"></path></svg>}
              title="Delivery & Errands"
              desc="Shopping, pickup, delivery, and personal errands"
            />
            <CategoryCard
              icon={<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>}
              title="Auto Services"
              desc="Car maintenance, repairs, and automotive care"
            />
            <CategoryCard
              icon={<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2a2 2 0 002-2V5a2 2 0 00-2-2z"></path></svg>}
              title="Clothing & Tailoring"
              desc="Alterations, custom clothing, and textile services"
            />
          </div>
        </div>
      </section>

    {/* Footer removed as requested */}
    </div>
  );
}

export default App;
