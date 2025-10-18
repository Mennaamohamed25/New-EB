"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What industries does your company serve?",
    answer: "We provide specialized solutions across multiple industries, including Construction, Oil & Gas, Industrial, Investments, Healthcare, Consumer & Real Estate, Information Technology, and Food & Beverage. Our diverse expertise ensures we meet the unique needs of each sector.",
  },
  {
    question: "How does your company ensure quality across different sectors?",
    answer: "We employ industry-specific experts and leverage advanced technologies to deliver high-quality, tailored solutions for each sector. Our commitment to excellence ensures that we meet and exceed the standards of every industry we serve.",
  },
  {
    question: "What sets your company apart from competitors?",
    answer: "Our unique approach lies in our ability to blend industry knowledge with innovative technology, providing customized solutions that drive growth and efficiency. We prioritize understanding our clients’ specific challenges and offer services that are not only comprehensive but also adaptable to future needs.",
  },
  {
    question: "How can I get in touch to learn more about your services?",
    answer: "You can contact us through our website contact form, via email at info@endlessbuilding.org, or by calling our office directly at 009647855999989. Our team is ready to discuss your needs and how we can help your business thrive.",
  },

];

export default function FAQSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questionVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="bg-black text-white py-16 px-6 md:px-16"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <p className="text-sm text-main uppercase mb-2">Questions</p>
        <h2 className="text-3xl md:text-5xl font-semibold">
          Asked by Others
        </h2>
      </motion.div>

      {/* Questions List */}
      <div className="flex flex-col gap-4">
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={questionVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-[#1c1a1a] rounded-lg cursor-pointer overflow-hidden"
          >
            {/* Question */}
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full flex justify-between items-center p-6 text-white focus:outline-none"
            >
              <h6 className="text-white text-lg">{item.question}</h6>
              <div className="w-6 h-6 flex items-center justify-center text-main text-xl">
                {openIndex === index ? "-" : "+"}
              </div>
            </button>

            {/* Answer */}
            <AnimatePresence initial={false}>
              {openIndex === index && (
             <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 20,
                mass: 0.5,
                delay: index * 0.1, // يعطي تأثير متتابع للأسئلة
              }}
              className="px-6 pb-6 text-white"
            >
              <p>{item.answer}</p>
            </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
