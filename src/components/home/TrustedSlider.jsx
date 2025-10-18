"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

/**
 * TrustedSlider Component
 * Auto-scrolling slider using Framer Motion
 */

const TrustedSlider = () => {
  const companyLogos = [
//     "/images/sevlogo.svg",
//  "/images/sevlogo2.svg",
//  "/images/sevlogo3.svg",
//  "/images/sevlogo4.svg",
"https://d1gnelo9urr3zj.cloudfront.net/logos/placeholder-logo-5.png",
 "https://d1gnelo9urr3zj.cloudfront.net/logos/placeholder-logo-5.png",
  "https://d1gnelo9urr3zj.cloudfront.net/logos/placeholder-logo-5.png",
  "https://d1gnelo9urr3zj.cloudfront.net/logos/placeholder-logo-5.png",
  ];

  return (
    <section className="py-8 md:py-12 lg:py-24 xl:py-32 bg-dropdown overflow-hidden">
      {/* ✅ Section Title */}
      <div className="container mx-auto px-4 mb-16">
        <h3 className="text-center mb-16 text-lg lg:text-[2rem] xl:text-h3 font-medium">
          Trusted By <span className="text-main">20+</span> worldwide leading compaines
        </h3>
      </div>

      {/* ✅ Scrolling Logos with Framer Motion */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 20, // 👈 Duration of one full scroll
            repeat: Infinity,
          }}
        >
          {[...companyLogos, ...companyLogos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[120px] md:w-[160px] lg:w-[192px] mx-4 flex items-center justify-center"
            >
              <div className="relative h-[40px] md:h-[60px] lg:h-[72px] w-[100px] md:w-[130px] lg:w-[160px]">
                <Image
                  src={logo}
                  alt={`Company ${index + 1}`}
                  fill
                  className="object-contain hover:grayscale transition-all duration-300"
                  sizes="(max-width: 768px) 100px, (max-width: 1024px) 130px, 160px"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedSlider;
