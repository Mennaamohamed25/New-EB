"use client";

import React from "react";

const LearnMoreButton = () => {
  return (
<button
  className="
    relative flex items-center gap-1 sm:gap-1.5
    rounded-full px-4 py-2 sm:px-6 sm:py-2.5
    font-poppins text-xs sm:text-sm font-normal
    overflow-hidden transition-all duration-300 group
    bg-main text-white
  "
>
  {/* Animated fill */}
  <span
    className="
      absolute left-0 top-0 h-full w-0
      bg-important rounded-full
      transition-all duration-700 ease-in-out
      group-hover:w-full
    "
  />

  {/* Text & icon */}
  <span className="relative z-10 flex items-center gap-1">
    learn more
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 23 22"
      fill="none"
      className="w-4 h-4 sm:w-5 sm:h-5 md:w-[22px] md:h-[22px] lg:w-6 lg:h-6 transition-transform duration-300 group-hover:translate-x-1"
    >
      <circle cx="11.5" cy="11" r="11" fill="currentColor" />
      <path
        d="M13.341 11.4444L10.2681 15L9.5 14.1113L12.1888 11L9.5 7.88875L10.2681 7L13.341 10.5556C13.4428 10.6735 13.5 10.8333 13.5 11C13.5 11.1667 13.4428 11.3265 13.341 11.4444Z"
        fill="#50808c"
      />
    </svg>
  </span>
</button>



  );
};

export default LearnMoreButton;
