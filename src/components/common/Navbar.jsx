"use client"; // Ensures this component runs on the client side (Next.js requirement for interactive components)

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  GlobeAltIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  // ✅ State management
  const [menuOpen, setMenuOpen] = useState(false); // Tracks mobile menu visibility
  const [dropdownOpen, setDropdownOpen] = useState(false); // Tracks Services dropdown visibility
  const [activeLink, setActiveLink] = useState("Home"); // Tracks which link is currently active (highlighted in yellow)
  const [scrolled, setScrolled] = useState(false); // ✅ Track scroll for background color

  // ✅ Detect scroll on large screens only
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500 && window.innerWidth >= 1024) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Main navigation links
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services & Solutions", href: "#", dropdown: true },
    { name: "Company", href: "#" },
    { name: "Partners", href: "#" },
  ];

  // ✅ Dropdown menu links (shown under "Services & Solutions")
  const dropdownLinks = [
    "Oil & Gas",
    "Technology",
    "Electricity & Energy",
    "Education & Training",
    "Telecommunications",
    "Water Resources & Infrastructure",
    "Civil Construction & Infrastructure",
    "Real Estate & Urban Development",
    "Industrial Manufacturing & Logistics",
    "Healthcare & Medical Infrastructure",
    "Agriculture & Food Processing",
  ];

  // Split dropdown links into rows of 3 columns
  const rows = [];
  for (let i = 0; i < dropdownLinks.length; i += 3) {
    rows.push(dropdownLinks.slice(i, i + 3));
  }

  // Framer Motion variants (animations)
  const mobileMenuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.4 } },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const dropdownContainerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.25 } },
  };

  const mobileDropdownContainerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.07,
      },
    },
    exit: { opacity: 0, height: 0, transition: { duration: 0.4, ease: "easeInOut" } },
  };

  const dropdownItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeInOut" },
    },
  };

  return (
    <header
      className={`fixed top-0 w-full z-[1000] transition-all duration-500 ${
        scrolled ? "bg-black/90" : "bg-transparent"
      }`}
    >
      <nav className="relative w-full flex max-w-full py-5">
        {/* ========================== */}
        {/*  Navbar main container */}
        {/* ========================== */}
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 flex items-center justify-between text-white relative">
          {/* Logo (left side) */}
          <a href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={160}
              height={60}
              className="w-auto"
            />
          </a>

          {/*  Desktop navigation links */}
          <div className="hidden lg:flex font-poppins items-center gap-2 lg:gap-4 font-normal text-xs md:text-sm">
            {navLinks.map((link, i) => (
              <div key={i} className="relative group">
                {link.dropdown ? (
                  <button
                    onClick={() => {
                      setDropdownOpen(!dropdownOpen);
                      setActiveLink(link.name);
                    }}
                    className={`flex items-center gap-2 xl:gap-6 text-center transition-all duration-300 py-2 px-4 xl:px-5 rounded-lg cursor-pointer ${
                      activeLink === link.name ? "text-yellow-400" : "text-white"
                    }`}
                  >
                    <span className="relative flex overflow-hidden">
                      <span className="duration-500 group-hover:-translate-y-full">
                        {link.name}
                      </span>
                      <span className="absolute top-0 left-0 translate-y-full transition-transform duration-500 ease group-hover:translate-y-0">
                        {link.name}
                      </span>
                    </span>
                    <ChevronDownIcon className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                ) : (
                  <a
                    href={link.href}
                    onClick={() => setActiveLink(link.name)}
                    className={`relative flex items-center gap-2 xl:gap-6 text-center transition-all duration-300 py-2 px-4 xl:px-5 rounded-lg overflow-hidden ${
                      activeLink === link.name ? "text-yellow-400" : "text-white"
                    }`}
                  >
                    <span className="relative flex overflow-hidden">
                      <span className="duration-500 group-hover:-translate-y-full">
                        {link.name}
                      </span>
                      <span className="absolute top-0 left-0 translate-y-full transition-transform duration-500 ease group-hover:translate-y-0">
                        {link.name}
                      </span>
                    </span>
                  </a>
                )}
              </div>
            ))}
          </div>

          {/*  Right-side icon (globe) */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              aria-label="Select Region"
              className="flex items-center gap-2 text-white hover:text-main transition"
            >
              <GlobeAltIcon className="w-6 h-6" />
            </button>
          </div>

          {/* ✅ Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden transition-all duration-300 hover:text-blue-400 h-8 w-8 sm:h-10 sm:w-10 grid place-content-center rounded-lg text-xl sm:text-2xl"
            aria-label="Toggle mobile menu"
          >
            {menuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* ✅ Desktop dropdown */}
        <AnimatePresence>
          {dropdownOpen && (
            <motion.div
              key="desktopDropdown"
              variants={dropdownContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-full left-5 right-5 w-[calc(100vw-40px)] bg-white/90 shadow-lg rounded-lg border border-gray-100 z-50 hidden lg:block"
            >
              <div className="p-6 relative">
                <button
                  className="absolute top-2 right-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                  type="button"
                  onClick={() => setDropdownOpen(false)}
                >
                  <XMarkIcon className="w-5 h-5 text-gray-800" />
                </button>

                <div className="space-y-4">
                  {rows.map((row, rowIndex) => (
                    <div key={rowIndex} className="grid grid-cols-3 gap-4">
                      {row.map((link, colIndex) => (
                        <div
                          key={colIndex}
                          className="p-4 rounded hover:bg-gray-100 transition cursor-pointer text-gray-900 text-start"
                        >
                          {link}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ✅ Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobileMenu"
              className="lg:hidden fixed top-0 right-0 h-full w-[80vw] bg-secondary z-50 shadow-lg flex flex-col pt-20 px-6 gap-6 overflow-y-auto"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-200 transition"
                aria-label="Close mobile menu"
              >
                <XMarkIcon className="w-6 h-6 text-main" />
              </button>





              {navLinks.map((link, i) => (
                <motion.div key={i} variants={navItemVariants}>
                  {link.dropdown ? (
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex items-center justify-between text-base text-lg font-medium hover:text-main transition"
                      >
                        {link.name}
                        <ChevronDownIcon
                          className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                            dropdownOpen ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            key="dropdown"
                            variants={mobileDropdownContainerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="flex flex-col pl-4 mt-2 gap-1"
                          >
                            {dropdownLinks.map((dLink, idx) => (
                              <motion.a
                                key={idx}
                                href="#"
                                className="text-base hover:text-main transition"
                                variants={dropdownItemVariants}
                              >
                                {dLink}
                              </motion.a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      className="text-base text-lg hover:text-main transition"
                    >
                      {link.name}
                    </a>
                  )}
                  
                            {/* ✅ Divider line between links */}
                  {i < navLinks.length - 0 && (
                    <div className="w-full h-px bg-white/20 my-2"></div>
                  )}
                  
                </motion.div>
              ))}
                               {/* ✅ Added Globe Icon at top of mobile menu */}
<div className="flex items-center gap-2 mb-6 cursor-pointer text-white transition group">
  <GlobeAltIcon className="w-6 h-6 transition group-hover:text-main" />
  <span className="text-base transition group-hover:text-main">Language</span>
</div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
