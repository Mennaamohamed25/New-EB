"use client";
import React from "react";

const HeroLayout = ({ videoSrc, poster, children }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* ===== Background Video / Image ===== */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Video */}
        <video
          className="absolute w-full h-full object-cover hidden lg:block"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={poster}
          style={{ filter: "brightness(0.8)" }}
                  src={videoSrc}

        >
          <source src={videoSrc + ".mp4"} type="video/mp4" />
          <source src={videoSrc + ".webm"} type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Mobile fallback image */}
        <div
          className="absolute inset-0 bg-cover bg-center lg:hidden"
          style={{
            backgroundImage: `url("${poster}")`,
            filter: "brightness(0.8)",
          }}
        ></div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* ===== Content ===== */}
      <div className="relative z-10 flex items-end pb-16 h-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-2 gap-x-5 w-full px-4 sm:px-6 md:px-7 lg:px-8 xl:px-16">
          {children}
        </div>
      </div>
    </section>
  );
};

export default HeroLayout;
