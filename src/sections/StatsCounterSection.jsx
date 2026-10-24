import React, { useState, useEffect, useRef } from 'react';

function useCounter(target, duration = 2000, trigger = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const end = parseInt(target, 10);
    if (start === end) return;

    const totalSteps = 50;
    const stepTime = duration / totalSteps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / totalSteps;
      const easeProgress = 1 - Math.pow(1 - progress, 3); // cubic ease-out
      const current = Math.round(start + (end - start) * easeProgress);

      if (currentStep >= totalSteps) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, duration, trigger]);

  return count;
}

export default function StatsCounterSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const activeInstalls = useCounter(10000, 2000, isVisible);
  const emailReplies = useCounter(963, 2000, isVisible);
  const happyClients = useCounter(9999, 2000, isVisible);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#111111] bg-cover bg-center py-[80px] min-h-[400px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/assets/diplodocus-bg.gif')",
      }}
    >
      {/* Elementor gradient overlay matching linear-gradient(140deg, #722D2D00 0%, #F2295B00 100%) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-85"
        style={{
          background: 'linear-gradient(140deg, rgba(114, 45, 45, 0.4) 0%, rgba(242, 41, 91, 0.4) 100%)',
        }}
      />

      <div className="relative z-10 max-w-[1273px] mx-auto px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Counter 1: Active installs */}
          <div className="flex flex-col items-center">
            <div className="text-[12px] font-normal uppercase tracking-[2px] text-white/40 mb-2 leading-[2em]">
              Active installs
            </div>
            <div className="text-white text-[45px] sm:text-[55px] md:text-[60px] font-bold leading-none tracking-tight">
              {activeInstalls.toLocaleString()}
              <span className="text-[35px] font-normal ml-0.5">+</span>
            </div>
          </div>

          {/* Counter 2: email replies */}
          <div className="flex flex-col items-center">
            <div className="text-[12px] font-normal uppercase tracking-[2px] text-white/40 mb-2 leading-[2em]">
              email replies
            </div>
            <div className="text-white text-[45px] sm:text-[55px] md:text-[60px] font-bold leading-none tracking-tight">
              {emailReplies.toLocaleString()}
              <span className="text-[35px] font-normal ml-0.5">+</span>
            </div>
          </div>

          {/* Counter 3: Happy Clients */}
          <div className="flex flex-col items-center">
            <div className="text-[12px] font-normal uppercase tracking-[2px] text-white/40 mb-2 leading-[2em]">
              Happy Clients
            </div>
            <div className="text-white text-[45px] sm:text-[55px] md:text-[60px] font-bold leading-none tracking-tight">
              {happyClients.toLocaleString()}
              <span className="text-[35px] font-normal ml-0.5">+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
