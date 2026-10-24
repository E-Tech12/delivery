import React from 'react';

export default function ParallaxDividerSection() {
  return (
    <section
      className="relative bg-white bg-center bg-no-repeat bg-cover py-[80px] md:py-[120px] min-h-[214px] md:min-h-[300px] flex items-center justify-center overflow-hidden lg:bg-fixed"
      style={{
        backgroundImage: "url('/assets/fulfillment-bg.gif')",
      }}
    >
      {/* 13% dark overlay */}
      <div className="absolute inset-0 bg-black opacity-[0.13] pointer-events-none" />
      <div className="relative z-10 w-full" />
    </section>
  );
}
