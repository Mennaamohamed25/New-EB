"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full md:[clipPath:polygon(0%_0,100%_0%,100%_100%,0_100%)] relative  md:h-[min(51rem,100vh)]" style={{ "--footer-height": "min(51rem,100vh)" }}>
      <div className="font-light text-[#F5F5F5] bg-[#151515] relative md:h-[calc(100vh+var(--footer-height))] md:-top-[100vh]">
        <div className="h-fit md:h-[var(--footer-height)] md:sticky md:top-[calc(100vh-var(--footer-height))]">
          <div className="py-8 md:py-20 mx-auto flex flex-col gap-10 md:gap-2 xl:gap-5 px-4 sm:px-6 lg:px-8 xl:px-16 h-full w-full justify-between">
            {/* Logo */}
            {/* <div className="flex max-sm:flex-col justify-between items-start max-sm:gap-3">
              <Link href="/" className="max-lg:hidden">
                <img
                  alt="SUPCON"
                  loading="lazy"
                  width={150}
                  height={40}
                  className="h-8 md:h-11 w-auto"
                  src="https://d1gnelo9urr3zj.cloudfront.net/LOGO.svg?w=384"
                />
              </Link>
            </div> */}

            {/* Footer Links Grid */}
      
            <div className="grid grid-cols-1 md:grid-cols-5 xl:grid-cols-12 gap-2 md:gap-4 xl:gap-5 pt-8 border-t border-[#F5F5F550]">
                
              {/* Main Tagline */}

              <p className="col-span-1 md:col-span-3 xl:col-span-5 text-xl md:text-2xl xl:text-[32px] leading-relaxed font-poppins mb-4 md:mb-6 tracking-widest">
         <span className="text-main ">Endless Building </span>  <br/>Driving Growth and Excellence Across Sectors with Tailored <br/> Expertise and Cutting Edge Technology.
              </p>

          

          

              {/* Discover SUPCON */}
              <div className="col-span-1 md:col-span-2 xl:col-start-9 xl:col-span-2">
                <h3 className="text-gray mb-2 md:mb-4 uppercase text-xs lg:text-sm tracking-wider text-[#515151]">Discover Endless Buildings</h3>
                <div className="max-md:text-xs flex flex-col flex-wrap gap-1 text-[#F5F5F5] md:text-sm">
                  <FooterLink href="/">Home</FooterLink>
                  <FooterLink href="/">Company</FooterLink>
                  <ExternalLink href="/">Partners</ExternalLink>
                  <FooterLink href="/about/location">Contact us</FooterLink>
                
                </div>
              </div>
                  {/* Products */}
              <div className="col-span-1 md:col-span-2 xl:col-start-11 xl:col-span-2">
                <h3 className="text-gray mb-2 md:mb-4 uppercase text-xs lg:text-sm tracking-wider text-[#515151]">Services</h3>
                
                <div className="max-md:text-xs flex flex-col flex-wrap gap-1 text-[#F5F5F5] md:text-sm">
                  <FooterLink href="/">Oil & Gas</FooterLink>
                  <FooterLink href="/">Technology</FooterLink>
                  <FooterLink href="/"> Healthcare</FooterLink>
                  <FooterLink href="/">Finance</FooterLink>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div className="flex flex-col items-start sm:gap-1 md:gap-4">
              <Link href="/about/location" className="flex items-center gap-2 text-xl sm:text-3xl md:text-4xl font-light font-poppins py-2">
                <span>FOLLOW US</span>
              </Link>
              <div className="flex gap-3 sm:gap-6 text-xl md:text-3xl">
                <ExternalIconLink href="" icon="linkedin" />
                <ExternalIconLink href="" icon="youtube" />
                <ExternalIconLink href="/about/location" icon="location" />
              </div>
            </div>

            {/* Bottom */}
            <div className="flex gap-2 max-md:flex-col justify-between items-start sm:items-center pt-4 border-t border-[#F5F5F550] text-[10px] md:text-xs">
              <p className="text-xs">© 2025 Endless Building. All Rights Reserved.</p>
              <div className="flex max-sm:flex-wrap gap-1 sm:gap-1 text-xs">
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms Of Service</FooterLink>
                <FooterLink href="#">Accessibility</FooterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Reusable Components
function FooterLink({ href, children }) {
  return (
    <Link href={href} className="inline-flex items-center gap-[0.3em] text-inherit font-[inherit] leading-[1.5] whitespace-nowrap relative group p-0.5 sm:p-1">
      <span className="relative flex overflow-hidden">
        <span className="duration-500 group-hover:-translate-y-full">{children}</span>
        <span className="absolute top-0 left-0 translate-y-full transition-transform duration-500 ease group-hover:translate-y-0">{children}</span>
      </span>
    </Link>
  );
}

function ExternalLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-[0.3em] text-inherit font-[inherit] leading-[1.5] whitespace-nowrap relative group p-0.5 sm:p-1 hover:opacity-80 transition-opacity">
      {children}
    </a>
  );
}

function ExternalIconLink({ href, icon }) {
  let svg;
  if (icon === "linkedin") {
    svg = <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>;
  } else if (icon === "youtube") {
    svg = <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>;
  } else if (icon === "location") {
    svg = <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path><path d="M8 12h.01"></path><path d="M12 12h.01"></path><path d="M16 12h.01"></path></svg>;
  }
  return <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">{svg}</a>;
}
