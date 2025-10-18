"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate, useInView } from "framer-motion";
import Link from "next/link";
import LearnMoreButton from "../common/LearnMoreButton";

// -------------------------
// Animated Counter Component
// -------------------------
const AnimatedCounter = ({ to = 0, suffix = "", duration = 1.8, className = "" }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(0);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  useEffect(() => {
    const unsubscribe = motionValue.on("change", (v) => {
      setDisplay(Math.floor(v));
    });
    return unsubscribe;
  }, [motionValue]);

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, to, {
        duration,
        ease: [0.22, 0.1, 0.22, 1],
      });
      return () => controls.stop();
    } else {
      motionValue.set(0);
    }
  }, [isInView, motionValue, to, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
};

// -------------------------
// Stats Array
// -------------------------
const stats = [
  { to: 50, suffix: "+", label: "Countries & Regions" },
  { to: 30, suffix: "k+", label: "Global Customers" },
  { to: 100, suffix: "k+", label: "Deployments" },
  { to: 4, suffix: "k+", label: "AI-Powered Smart Plant Projects" },
];

// -------------------------
// About Section Component
// -------------------------
const AboutSection = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-16 bg-dropdown">
      <section className="relative pt-16 md:pt-20">
        {/* Backgrounds */}
        <div
          className="absolute z-0 hidden md:block"
          style={{
            backgroundImage:
              "url(https://d1gnelo9urr3zj.cloudfront.net/images/home/HomePage_GlobeBackground.png)",
            backgroundSize: "contain",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
            top: "clamp(80px, 10vh, 120px)",
            right: 0,
            width: "70%",
            height: "80%",
          }}
        />
        <div
          className="absolute z-0 md:hidden"
          style={{
            backgroundImage:
              "url(https://d1gnelo9urr3zj.cloudfront.net/images/home/HomePage_GlobeBackground.png)",
            backgroundSize: "contain",
            backgroundPosition: "center right",
            backgroundRepeat: "no-repeat",
            top: "clamp(60px, 8vh, 100px)",
            right: 0,
            width: "100%",
            height: "50%",
          }}
        />

        {/* Content */}
        <div className="relative z-10 font-medium">
          <div>
            <span className="text-black text-base font-poppins flex items-center font-medium gap-2 mb-2 md:mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
              >
                <circle cx="4" cy="4" r="4" fill="#50808c"></circle>
              </svg>
              About Endlessbuilding
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[52px] xl:leading-[1.15]">
              Leading <span className="text-main">Industrial AI</span> To
              <br />
              <span className="text-main">Sustainable Growth</span>
            </h1>

            <div className="mt-12">
              <Link href="/about" aria-label="Learn More">
                <LearnMoreButton />
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <section className="py-16 md:py-24 lg:py-32 xl:py-40">
            <div className="grid grid-cols-12 gap-x-2 xl:gap-x-5">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="col-span-12 md:col-span-6 lg:col-span-3 mb-8 lg:mb-0"
                >
                  <div className="flex flex-col justify-center items-center">
                    <div className="text-7xl xl:text-[104px] xl:leading-[1.15] text-center font-light text-secondary tracking-[-2.08px] mb-4">
                      <AnimatedCounter to={item.to} suffix={item.suffix} />
                    </div>
                    <div className="mt-4 text-base text-black max-w-[211px] leading-relaxed font-normal font-sans text-center">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
