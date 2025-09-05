import React from "react";

export default function Modal({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <span className="text-2xl">&times;</span>
        </button>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">{title}</h2>
        </div>
        {children}
      </div>
    </div>
  );
}
