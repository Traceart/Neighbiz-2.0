import React from "react";

export default function CategoryCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-teal rounded-lg flex items-center justify-center mb-3">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-navy mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}
