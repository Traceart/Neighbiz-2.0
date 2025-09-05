import React from "react";

export default function Toast({ message, type = "success", onClose }) {
  return (
    <div className={`fixed top-5 right-5 z-50 px-4 py-2 rounded shadow-lg text-white transition-all duration-300 ${type === "error" ? "bg-red-500" : "bg-teal-600"}`}
      role="alert">
      <div className="flex items-center">
        <span className="mr-2">{type === "error" ? "❌" : "✅"}</span>
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 text-white font-bold">×</button>
      </div>
    </div>
  );
}
