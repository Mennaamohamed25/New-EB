"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

// Cards Data
const cards = [
  {
    title: "A Strong Legal Support System",
    description:
      "Endless Building Company goes beyond traditional consultancy services. We operate a highly skilled legal firm with in-depth knowledge of Iraq’s tax regulations, import and export procedures, and the legal framework for foreign businesses.Our legal team excels at navigating complex regulatory environments, ensuring full compliance with required documentation and procedures so you can stay focused on growing your business in Iraq.",
  },
  {
    title: "Industry Expertise Across Key Sectors",
    description:
      "Endless Building Company is well-equipped to support businesses across a wide range of sectors vital to Iraq’s development and economic growth. Our deep industry knowledge, combined with a strong network of local experts, positions us as a trusted partner for companies seeking long-term success in the Iraqi market. Below is an overview of the key sectors we serve.",
  },
  {
    title: "A Network of Local Talent for Maximum Efficiency",
    description:
      "One of our key strengths lies in our extensive network of over 200 skilled and experienced Iraqi engineers, technicians, and professionals. These experts provide on-the-ground support to international companies, delivering essential local knowledge and technical insight critical to successful operations in Iraq.",
    descriptionBR:
      "Our approach is results-driven. We enable international companies to depend on a qualified local workforce that consistently delivers projects on time, within budget, and to the highest standards. By combining global expertise with deep local understanding, we help you unlock the full potential of your investments in Iraq.",
  },
];

// 🔠 Animated Word Component (Each letter fills color on scroll)
const AnimatedYellowWord = ({ text }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 20%"],
  });

  const letters = text.split("");

  return (
    <span ref={ref} className="inline-block">
      {letters.map((letter, i) => {
        const start = i / letters.length;
        const end = (i + 1) / letters.length;
        const color = useTransform(
          scrollYProgress,
          [start, end],
          ["rgba(209,213,219,0.3)", "#e9c369"]
        );

        return (
          <motion.span
            key={i}
            style={{ color }}
            className="inline-block transition-colors duration-300"
          >
            {letter}
          </motion.span>
        );
      })}
    </span>
  );
};

// -------------------------
// Empower Section Component
// -------------------------
export default function EmpowerSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 }); // triggers on scroll up/down

  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8 },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-16 px-6 md:px-16 relative overflow-hidden"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-semibold mb-12 text-center"
      >
        <AnimatedYellowWord text="Our" />{" "}
        <span className="text-white">Unique Approach</span>
      </motion.h2>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
        {/* Left Column */}
        <div className="flex flex-col gap-6 flex-[0.6]">
          {cards.slice(0, 2).map((card, index) => (
            <motion.div
              key={card.title}
              custom={index}
              variants={cardVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-[#1c1a1a] rounded-xl p-[48px] flex flex-col gap-6"
            >
              <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
              <p className="text-white">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Right Column */}
        <motion.div
          custom={2}
          variants={cardVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-[#1c1a1a] rounded-xl p-[48px] flex flex-col justify-start gap-6 flex-[0.4]"
        >
          <h3 className="text-2xl font-semibold mb-2">{cards[2].title}</h3>
          <p className="text-white">{cards[2].description}</p>
          <p className="text-white">{cards[2].descriptionBR}</p>
        </motion.div>
      </div>
    </section>
  );
}
