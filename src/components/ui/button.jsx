import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 bg-amber-600 text-white font-medium rounded-lg shadow-md hover:bg-amber-700 transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
