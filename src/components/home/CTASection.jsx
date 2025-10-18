"use client";

import React from "react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[50vh] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
<video
  autoPlay
  loop
  muted
  playsInline
  className="object-cover w-full h-full"
>
  <source
    src="/images/wahed.mp4"
    type="video/mp4"
  />
  <source
    src="/images/wahed.mp4"
    type="video/mp4"
  />
  Your browser does not support the video tag.
</video>
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <div className="w-full md:w-8/12">
            <h4 className="tracking-wider text-sm sm:text-2xl md:text-h4 lg:text-h3 xl:text-[40px] font-light lg:font-light leading-relaxed sm:leading-normal md:leading-relaxed">
              <span className="block sm:inline">
                Lorem ipsum dolor sit amet   
              </span>{" "}
              <span className="block sm:inline">
            adipisicing elit Necessitatibus ut cumque
              </span>{" "}
              <span className="block sm:inline">Necessitatibus ut cumque</span>
            </h4>
          </div>

          {/* Button */}
          <Link href="/about/location" aria-label="Contact Us">
            <button className="group flex items-center gap-1 sm:gap-1.5 rounded-full px-4 py-2 sm:px-6 sm:py-2.5 transition-all duration-200 font-poppins text-xs sm:text-sm font-normal bg-main text-white hover:bg-global-blue-hover hover:text-slate-100">
              <span>Contact Us</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-[22px] md:h-[22px] lg:w-6 lg:h-6"
                viewBox="0 0 23 22"
                fill="none"
              >
                <circle cx="11.5" cy="11" r="11" fill="white"></circle>
                <path
                  d="M13.341 11.4444L10.2681 15L9.5 14.1113L12.1888 11L9.5 7.88875L10.2681 7L13.341 10.5556C13.4428 10.6735 13.5 10.8333 13.5 11C13.5 11.1667 13.4428 11.3265 13.341 11.4444Z"
                  fill="#0057e3"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
