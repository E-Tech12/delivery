import React from 'react';

export default function DeliveryCardsSection() {
  return (
    <section className="pb-[60px] md:pb-[90px] bg-white">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Card 1: Phone power card */}
          <div className="bg-white rounded p-8 sm:p-10 shadow-[0px_0px_25px_0px_rgba(0,0,0,0.11)] transition-all duration-300 hover:shadow-lg flex flex-col justify-center text-center">
            <p className="text-[15px] sm:text-[16px] text-[#0E0E0E] leading-relaxed font-normal">
              Get the power to stay on top of your deliveries, redirect packages, and create new shipments, all from your phone.
            </p>
          </div>

          {/* Card 2: Small Business Center (gradient card) */}
          <div
            className="rounded p-8 sm:p-10 shadow-[0px_0px_36px_0px_rgba(0,0,0,0.11)] text-white text-center flex flex-col justify-center transition-all duration-500 hover:shadow-xl group"
            style={{
              background: 'radial-gradient(at top center, #6ec1e4 0%, #443b89 100%)',
            }}
          >
            <p className="text-[15px] sm:text-[16px] text-white leading-relaxed font-medium">
              Visit the updated Small Business Center for the latest resources from experts and peers. Find shipping tools to improve deliveries for you and your customers.
            </p>
          </div>

          {/* Card 3: Dashboard management card */}
          <div className="bg-white rounded p-8 sm:p-10 shadow-[0px_0px_25px_0px_rgba(0,0,0,0.11)] transition-all duration-300 hover:shadow-lg flex flex-col justify-center text-center">
            <p className="text-[15px] sm:text-[16px] text-[#212121] leading-relaxed font-normal">
              It’s simple to manage up to 20,000 shipments and run reports in your advanced tracking dashboard. View estimated delivery windows to keep customers informed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
