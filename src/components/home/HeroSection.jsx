"use client";
import React from "react";
import Link from "next/link";
import HeroLayout from "../common/HeroLayout";
import LearnMoreButton from "../common/LearnMoreButton"

const HeroSection = () => {
  return (
    <main className="transition-spacing duration-300">
      <HeroLayout
        videoSrc="/images/hero.mp4"
        poster="/images/hero.png"
      >
        {/* Subheading */}
        <div className="col-span-12">
          <h4 className="text-white font-light text-sm lg:text-base mb-0">
          Innovating Every Industry
          </h4>
        </div>

        {/* Main Heading */}
        <div className="col-span-12 md:col-span-5 lg:col-span-10 2xl:col-span-7">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-medium leading-tight">
            Powering Progress,<br />  Shaping the Future
          </h1>
        </div>

        {/* Text + Buttons */}
        <div className="col-span-12 lg:col-span-10 2xl:col-start-8 2xl:col-span-5 flex flex-col justify-evenly space-y-4 2xl:space-y-6">
          <p className="text-white text-base font-normal">
At Endless Building Solutions, we empower industries with advanced technology and expertise driving innovation and growth across construction, technology, healthcare, finance, and beyond.          </p>

          <div className="flex flex-row gap-3">
      

            <Link href="/control-systems/ucs" aria-label="Learn more">
       
              <LearnMoreButton/>
            </Link>
          </div>
        </div>
      </HeroLayout>
    </main>
  );
};

export default HeroSection;
