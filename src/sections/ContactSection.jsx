import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-[100px] md:py-[160px] bg-[#0f0f0f] text-white">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        <div className="max-w-2xl text-left">
          {/* Main heading */}
          <h2 className="font-tahoma text-[40px] sm:text-[50px] md:text-[61px] font-extralight text-white tracking-[-1.4px] leading-[1.1] mb-6">
            Contact Us
          </h2>

          <div className="space-y-4">
            <span className="inline-block text-[14px] font-semibold uppercase tracking-[3px] text-[#fcfcfc]">
              Headquarter
            </span>

            <div className="text-[17px] font-light text-white leading-relaxed">
              <p className="font-medium text-white mb-2">LOS ANGELES</p>
              <p className="text-white/90">
                <a
                  href="mailto:customercare@exxpressdeliveryservice.com"
                  className="underline hover:text-[#dd3333] transition-colors"
                >
                  Email: customercare@exxpressdeliveryservice.com
                </a>
                <br />
                Tel: +1 (918) 650-6194
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
