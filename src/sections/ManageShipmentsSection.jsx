import React from 'react';

export default function ManageShipmentsSection() {
  return (
    <section id="features" className="py-[60px] md:py-[110px] bg-white">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        {/* Underlined Heading */}
        <div className="max-w-[867px] mx-auto text-center mb-12">
          <h2 className="font-tahoma text-[32px] sm:text-[45px] md:text-[62px] font-extralight uppercase text-[#090202] tracking-[-1.4px] leading-[1.1]">
            <span className="underline decoration-2 underline-offset-8">
              Manage your shipments and returns
            </span>
          </h2>
        </div>

        {/* 3-Column Content Layout (Left features, Center Muuve Rider, Right features) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-[1050px] mx-auto">
          {/* Left Column (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-8 text-left">
            <div className="pb-4">
              <h3 className="text-[14px] font-bold text-[#CE0707] uppercase tracking-[1px] mb-3">
                Get timely and cost-effective international shipping
              </h3>
              <p className="text-[14px] text-black leading-relaxed font-normal">
                Grow your business globally with reliable ExDs® International Connect Plus. Offer the delivery times your customers want at prices that give you an edge.
              </p>
            </div>

            <div className="pb-4">
              <h3 className="text-[14px] font-bold text-[#CE0707] uppercase tracking-[1px] mb-3">
                Thousands of packages at a glance
              </h3>
              <p className="text-[14px] text-black leading-relaxed font-normal">
                It’s simple to manage up to 20,000 shipments and run reports in your advanced tracking dashboard. View estimated delivery windows to keep customers informed.
              </p>
            </div>
          </div>

          {/* Center Column with Muuve Rider GIF (lg:col-span-4) */}
          <div className="lg:col-span-4 flex justify-center items-center py-4">
            <img
              src="/assets/muuve-rider.gif"
              alt="Muuve delivery rider"
              className="w-[220px] h-[220px] object-contain"
              loading="lazy"
            />
          </div>

          {/* Right Column (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-8 text-left">
            <div className="pb-4">
              <h3 className="text-[14px] font-bold text-[#CE0707] uppercase tracking-[1px] mb-3">
                The tax filing deadline is approaching fast
              </h3>
              <p className="text-[14px] text-black leading-relaxed font-normal">
                Have you done your 2022 taxes yet? The IRS accepts several ExDs ® services for sending tax returns. Choose from ExDs First Overnight®,ExDs Priority Overnight®, or ExDs Standard Overnight® shipping.
              </p>
            </div>

            <div className="pb-4">
              <h3 className="text-[15px] font-bold text-[#CE0707] uppercase tracking-[1px] mb-3">
                Get rewarded for small business shipping
              </h3>
              <p className="text-[14px] text-black leading-relaxed font-normal">
                Earn gift cards for the shipping you already do. You’ll get a new member offer and opportunities to earn rewards every month with My ExDs Rewards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
