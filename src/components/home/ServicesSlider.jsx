"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/**
 * TwoRowCardSlider Component
 * 2 auto-scrolling rows — one right→left, one left→right
 * Works perfectly with local images inside /public/images/
 */

const TwoRowCardSlider = () => {
  const cards = [

    {
      title: "Energy & Sustainability",
      image: "/images/ServiceOne.png",
      desc: "Empowering the future through sustainable energy.",
    },
    {
      title: "Digital Transformation",
      image: "/images/ServiceTwo.png",
      desc: "Transforming businesses through digital innovation.",
    },
    {
      title: "Infrastructure & Growth",
      image: "/images/ServiceThree.png",
      desc: "Building the foundation for global development.",
    },
        {
      title: "Infrastructure & Growth",
      image: "/images/ServiceFour.png",
      desc: "Building the foundation for global development.",
    },
        {
      title: "Infrastructure & Growth",
      image: "/images/ServiceFive.png",
      desc: "Building the foundation for global development.",
    },
        {
      title: "Innovative Solutions",
      image: "/images/ServiceSix.png",
      desc: "Delivering next-gen technologies to clients worldwide.",
    },
            {
      title: "Innovative Solutions",
      image: "/images/ServiceSeven.png",
      desc: "Delivering next-gen technologies to clients worldwide.",
    },
            {
      title: "Innovative Solutions",
      image: "/images/ServiceEight.png",
      desc: "Delivering next-gen technologies to clients worldwide.",
    },
  ];

  // Duplicate array for infinite scroll
  const repeatedCards = [...cards, ...cards];

  return (
    <section className="py-16 bg-base overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h3 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
          Our <span className="text-main">services</span> we have prepared for you
        </h3>
      </div>

      <div className="flex flex-col gap-10">
        {/* Row 1 - Right to Left */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {repeatedCards.map((card, index) => (
              <div
                key={`row1-${index}`}
                className="min-w-[250px] md:min-w-[280px] lg:min-w-[320px] bg-dropdown  rounded-2xl  overflow-hidden flex-shrink-0 hover:shadow-lg transition"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {card.title}
                  </h4>
                  {/* <p className="text-sm text-gray-600">{card.desc}</p> */}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Left to Right */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {repeatedCards.map((card, index) => (
              <div
                key={`row2-${index}`}
                className="min-w-[250px] md:min-w-[280px] lg:min-w-[320px] bg-dropdown rounded-2xl  overflow-hidden flex-shrink-0 hover:shadow-lg transition"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {card.title}
                  </h4>
                  <p className="text-sm text-gray-600">{card.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TwoRowCardSlider;
