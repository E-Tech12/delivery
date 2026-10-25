import React, { useState, useEffect } from 'react';

export default function HeroSection() {
  const fullText = "EXPRESS DELVERY SERVICE";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    if (!isDeleting && displayText.length < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 150);
    } else if (!isDeleting && displayText.length === fullText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length - 1));
      }, 80);
    } else if (isDeleting && displayText.length === 0) {
      timeout = setTimeout(() => setIsDeleting(false), 500);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  return (
    <section
      id="home"
      className="relative bg-[#111111] bg-cover bg-center bg-no-repeat pt-[160px] md:pt-[180px] pb-[100px] md:pb-[120px] min-h-[50vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/assets/hero-bg.jpg')",
      }}
    >
      {/* 13% dark overlay as configured in Elementor post-31.css */}
      <div className="absolute inset-0 bg-black opacity-[0.13] pointer-events-none" />

      {/* Opacity fan SVG shape divider matching original */}
      <div className="elementor-shape elementor-shape-top pointer-events-none z-10" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 19.6" preserveAspectRatio="none" className="h-[60px] md:h-[84px]">
          <path className="elementor-shape-fill" style={{ opacity: 0.33 }} d="M0 0L0 18.8 141.8 4.1 283.5 18.8 283.5 0z" />
          <path className="elementor-shape-fill" style={{ opacity: 0.33 }} d="M0 0L0 12.6 141.8 4 283.5 12.6 283.5 0z" />
          <path className="elementor-shape-fill" style={{ opacity: 0.33 }} d="M0 0L0 6.4 141.8 4 283.5 6.4 283.5 0z" />
          <path className="elementor-shape-fill" d="M0 0L0 1.2 141.8 4 283.5 1.2 283.5 0z" />
        </svg>
      </div>

      <div className="relative z-20 max-w-[1140px] mx-auto px-4 text-center">
        {/* Main animated typewriter headline */}
        <div className="mb-6 px-4 md:px-[90px]">
          <h3 className="font-tahoma font-semibold text-white uppercase text-[32px] sm:text-[45px] md:text-[68px] leading-[1.2] md:leading-[40px] tracking-[1px] md:tracking-[3.4px] min-h-[80px] md:min-h-[90px] flex items-center justify-center">
            <span>{displayText}</span>
            <span className="typed-cursor text-white font-normal ml-1">|</span>
          </h3>
        </div>

        {/* Supporting paragraph text block with enhanced high-contrast readability */}
        <div className="max-w-[580px] mx-auto px-4 text-center">
          <div className="bg-black/45 backdrop-blur-[2px] rounded-xl p-4 sm:p-5 border border-white/15 shadow-xl">
            <p
              className="font-tahoma text-[18px] sm:text-[20px] md:text-[21px] text-white font-bold sm:font-extrabold leading-[1.6] m-0"
              style={{
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.95), 0 4px 12px rgba(0, 0, 0, 0.85)',
              }}
            >
              Let us come to your home or business to pick up<br className="hidden sm:inline" />
              {' '}your package. It’s easy to schedule a one-time<br className="hidden sm:inline" />
              {' '}pickup online. If you have recurring delivery needs,<br className="hidden sm:inline" />
              {' '}plan ahead with regular pickups.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
