"use client";

import Image from "next/image";

// Use relative paths (no @ alias)
import UCSImage from "../../../public/images/menna.jpg";
import DCSImage from "../../../public/images/mennaa.jpg";
import InstrumentImage from "../../../public/images/hc.jpg";
import DigitalImage from "../../../public/images/fc.jpg";

export default function SolutionsScroll() {
  const sections = [
    {
      title: "Oil & Gas   ",
      text: "Empowering Oil & Gas industries with innovative solutions and advanced technology for safer, more efficient, and sustainable operations.",
      img: UCSImage,
      href: "/",
    },
    {
      title: "Technology",
      text: "Empowering Technology industries with innovative solutions and advanced expertise for smarter, faster, and sustainable growth.",
      img: DCSImage,
      href: "/",
    },
    {
      title: "Healthcare",
      text: "Empowering Healthcare with advanced solutions and technology for safer, more efficient, and patient focused care.",
      img: InstrumentImage,
      href: "/",
    },
    {
      title: "Finance ",
      text: "Empowering Finance industries with innovative solutions and advanced technology for smarter, more secure, and efficient operations.",
      img: DigitalImage,
      href: "/",
    },
  ];

  return (
    <div className="hidden md:block">
      <div className="relative min-h-[400vh]">
        {sections.map((section, index) => (
          <div
            key={index}
            className="sticky h-screen "
            style={{
              top: `${index * 10}vh`,
              opacity: 1,
            }}
          >
            <div className="relative h-full  overflow-hidden">
              <Image
                src={section.img}
                alt={section.title}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  borderRadius: "inherit",
                }}
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="relative z-10 h-full flex flex-col items-start justify-start p-4 lg:p-12">
                <h3 className="text-4xl md:text-5xl text-white font-normal mb-4 font-poppins">
                  {section.title}
                </h3>
                <p className="text-white text-base max-w-lg mb-12 font-normal font-poppins">
                  {section.text}
                </p>
                <a
                  className="font-sans inline-flex text-base items-center justify-center bg-white text-black px-6 py-3 rounded-full font-normal hover:bg-secondary hover:text-white transition-colors"
                  href={section.href}
                >
                  Explore More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
