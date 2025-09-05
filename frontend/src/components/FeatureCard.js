import React from "react";

export default function FeatureCard({ icon, title, desc }) {
  return (
    <div className="text-center p-6">
      <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-navy mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
