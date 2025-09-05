import React from "react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Neighbiz</h3>
            <p className="text-gray-300">Connecting communities through local business services.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">For Users</h4>
            <ul className="space-y-2 text-gray-300">
              <li><button type="button" className="hover:text-white bg-transparent border-none p-0 m-0 cursor-pointer">Find Services</button></li>
              <li><button type="button" className="hover:text-white bg-transparent border-none p-0 m-0 cursor-pointer">How It Works</button></li>
              <li><button type="button" className="hover:text-white bg-transparent border-none p-0 m-0 cursor-pointer">Safety</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">For Businesses</h4>
            <ul className="space-y-2 text-gray-300">
              <li><button type="button" className="hover:text-white bg-transparent border-none p-0 m-0 cursor-pointer">List Your Business</button></li>
              <li><button type="button" className="hover:text-white bg-transparent border-none p-0 m-0 cursor-pointer">Pricing</button></li>
              <li><button type="button" className="hover:text-white bg-transparent border-none p-0 m-0 cursor-pointer">Success Stories</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><button type="button" className="hover:text-white bg-transparent border-none p-0 m-0 cursor-pointer">Help Center</button></li>
              <li><button type="button" className="hover:text-white bg-transparent border-none p-0 m-0 cursor-pointer">Contact Us</button></li>
              <li><button type="button" className="hover:text-white bg-transparent border-none p-0 m-0 cursor-pointer">Privacy Policy</button></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Neighbiz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
