"use client";
import React from "react";

const AnimatedButton = ({ label, color = "bg-blue-600", onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative inline-flex items-center justify-center 
        px-6 py-3 rounded-full font-sans font-normal text-base
        bg-black text-white 
        overflow-hidden transition-colors duration-300
        group ${className}
      `}
    >
      {/* Text always above the animation */}
      <span className="relative z-10">{label}</span>

      {/* Blue fill animation layer */}
      <span
        className={`
          absolute left-0 top-0 h-full w-0 
          ${color} 
          transition-all duration-700 ease-in-out 
          group-hover:w-full
        `}
      ></span>
    </button>
  );
};

export default AnimatedButton;
