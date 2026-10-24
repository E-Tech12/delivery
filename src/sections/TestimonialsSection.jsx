import React from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Kate Pauline',
      content:
        'Thank you Express Delivery for the fastest delivery i have ever receive all my life since i use a courier service i will recommend you I promise',
      img: '/assets/testimonials/kate-pauline.jpg',
    },
    {
      name: 'Frank Ingen',
      content:
        'FASTES AND REALIBLE AND NOT COST FOR A SHIPPING FEE AND SOMETIMES THEY ALSO GIVE YOU FREE DELIVERY',
      img: '/assets/testimonials/frank-ingen.jpg',
    },
    {
      name: 'Ann & Anny',
      content: 'We thank you so much for the fastest delivery',
      img: '/assets/testimonials/ann-anny.jpg',
    },
  ];

  return (
    <section id="clients" className="py-[60px] md:py-[90px] bg-white">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="font-tahoma text-[30px] sm:text-[39px] font-extralight uppercase text-[#050000] tracking-[-1.4px] leading-[1.1]">
            What Clients Say
          </h2>
        </div>

        {/* 3 Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-100 rounded p-6 sm:p-8 flex flex-col justify-between text-center shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="text-black text-[17px] md:text-[19px] font-medium leading-[1.5] mb-6">
                “{t.content}”
              </div>

              <div className="flex items-center justify-center gap-3 pt-4 border-t border-gray-100">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-[60px] h-[60px] rounded-full object-cover shadow-xs border border-gray-200"
                  loading="lazy"
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-900 text-[16px] md:text-[17px]">
                    {t.name}
                  </div>
                  <div className="text-[10px] uppercase text-gray-400 tracking-[3px]">
                    Client
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
