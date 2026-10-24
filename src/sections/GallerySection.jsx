import React, { useState } from 'react';
import LightboxModal from '../components/LightboxModal';

export default function GallerySection() {
  const [activeImage, setActiveImage] = useState(null);

  const galleryItems = [
    { src: '/assets/gallery/ravengeoimg01.jpg', title: 'ravengeoimg01' },
    { src: '/assets/gallery/business-and-customer-satisfaction-main.png', title: 'business-and-customer-satisfaction-main' },
    { src: '/assets/gallery/Air-Freight.jpg', title: 'Air-Freight' },
    { src: '/assets/gallery/image_2023-03-16_034728191.png', title: 'image_2023-03-16_034728191' },
    { src: '/assets/gallery/shipping-department.jpg', title: 'shipping-department' },
    { src: '/assets/gallery/images.jpg', title: 'images' },
  ];

  return (
    <section className="py-[60px] md:py-[100px] bg-[#f4f4f4]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="font-tahoma text-[32px] sm:text-[45px] md:text-[60px] font-extralight uppercase text-[#030000] tracking-[-1.4px] leading-[1.1]">
            Take more control of 2023 deliveries
          </h2>
        </div>

        {/* 3x2 Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-[1080px] mx-auto">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="cursor-pointer overflow-hidden border-2 border-[#cfcfcf] bg-white group hover:shadow-md transition-all duration-300 flex items-center justify-center aspect-[3/2]"
              onClick={() => setActiveImage(item)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <LightboxModal
          image={activeImage}
          onClose={() => setActiveImage(null)}
        />
      )}
    </section>
  );
}
