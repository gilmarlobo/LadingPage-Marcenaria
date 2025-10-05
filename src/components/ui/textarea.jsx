import React from "react";

export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={`border border-gray-300 rounded-lg p-2 w-full min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
}
