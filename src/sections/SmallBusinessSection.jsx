import React from 'react';

export default function SmallBusinessSection() {
  return (
    <section id="about" className="py-[60px] md:py-[100px] bg-white">
      <div className="max-w-[1140px] mx-auto px-4">
        {/* Main Title */}
        <div className="max-w-[773px] mx-auto text-center mb-12">
          <h2 className="font-tahoma text-[32px] sm:text-[45px] md:text-[60px] font-extralight uppercase text-black tracking-[-1.4px] leading-[1.1]">
            We’re behind your small business
          </h2>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Item 1: Redirect a package */}
          <div className="text-center px-6 py-5">
            <div className="flex justify-center mb-5 text-gray-800">
              {/* Shipping Fast Icon SVG */}
              <svg aria-hidden="true" className="w-12 h-12 fill-current" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"/>
              </svg>
            </div>
            <h3 className="text-[18px] font-bold text-[#BA2727] uppercase tracking-[0.5px] mb-3">
              REDIRECT A PACKAGE
            </h3>
            <p className="text-[14px] md:text-[15px] font-medium text-[#070000] leading-relaxed">
              Whether you need to sign for your package or just want a little extra security, it’s easy to request to hold a package for pickup at a convenient location near you. See the three easy steps below for more information.
            </p>
          </div>

          {/* Item 2: Store hours and services */}
          <div className="text-center px-6 py-5">
            <div className="flex justify-center mb-5 text-gray-800">
              {/* Store Icon SVG */}
              <svg aria-hidden="true" className="w-12 h-12 fill-current" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M320 384H128V224H64v256c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V224h-64v160zm314.6-241.8l-85.3-128c-6-8.9-16-14.2-26.7-14.2H117.4c-10.7 0-20.7 5.3-26.6 14.2l-85.3 128c-14.2 21.3 1 49.8 26.6 49.8H608c25.5 0 40.7-28.5 26.6-49.8zM512 496c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V224h-64v272z"/>
              </svg>
            </div>
            <h3 className="text-[18px] font-bold text-[#C83B3B] uppercase tracking-[0.5px] mb-3">
              STORE HOURS AND SERVICES
            </h3>
            <p className="text-[14px] md:text-[15px] font-medium text-[#000000] leading-relaxed">
              In a few simple steps, you can request to redirect an incoming package to a safe and convenient location near you.
            </p>
          </div>

          {/* Item 3: Service alerts */}
          <div className="text-center px-6 py-5">
            <div className="flex justify-center mb-5 text-gray-800">
              {/* Broadcast Tower Icon SVG */}
              <svg aria-hidden="true" className="w-12 h-12 fill-current" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M150.94 192h33.73c11.01 0 18.61-10.83 14.86-21.18-4.93-13.58-7.55-27.98-7.55-42.82s2.62-29.24 7.55-42.82C203.29 74.83 195.68 64 184.67 64h-33.73c-7.01 0-13.46 4.49-15.41 11.23C130.64 92.21 128 109.88 128 128c0 18.12 2.64 35.79 7.54 52.76 1.94 6.74 8.39 11.24 15.4 11.24zM89.92 23.34C95.56 12.72 87.97 0 75.96 0H40.63c-6.27 0-12.14 3.59-14.74 9.31C9.4 45.54 0 85.65 0 128c0 24.75 3.12 68.33 26.69 118.86 2.62 5.63 8.42 9.14 14.61 9.14h34.84c12.02 0 19.61-12.74 13.95-23.37-49.78-93.32-16.71-178.15-.17-209.29zM614.06 9.29C611.46 3.58 605.6 0 599.33 0h-35.42c-11.98 0-19.66 12.66-14.02 23.25 18.27 34.29 48.42 119.42.28 209.23-5.72 10.68 1.8 23.52 13.91 23.52h35.23c6.27 0 12.13-3.58 14.73-9.29C630.57 210.48 640 170.36 640 128s-9.42-82.48-25.94-118.71zM489.06 64h-33.73c-11.01 0-18.61 10.83-14.86 21.18 4.93 13.58 7.55 27.98 7.55 42.82s-2.62 29.24-7.55 42.82c-3.76 10.35 3.85 21.18 14.86 21.18h33.73c7.02 0 13.46-4.49 15.41-11.24 4.9-16.97 7.53-34.64 7.53-52.76 0-18.12-2.64-35.79-7.54-52.76-1.94-6.75-8.39-11.24-15.4-11.24zm-116.3 100.12c7.05-10.29 11.2-22.71 11.2-36.12 0-35.35-28.63-64-63.96-64-35.32 0-63.96 28.65-63.96 64 0 13.41 4.15 25.83 11.2 36.12l-130.5 313.41c-3.4 8.15.46 17.52 8.61 20.92l29.51 12.31c8.15 3.4 17.52-.46 20.91-8.61L244.96 384h150.07l49.2 118.15c3.4 8.16 12.76 12.01 20.91 8.61l29.51-12.31c8.15-3.4 12-12.77 8.61-20.92l-130.5-313.41zM271.62 320L320 203.81 368.38 320h-96.76z"/>
              </svg>
            </div>
            <h3 className="text-[18px] font-bold text-[#C83B3B] uppercase tracking-[0.5px] mb-3">
              SERVICE ALERTS
            </h3>
            <p className="text-[14px] md:text-[15px] font-medium text-[#030000] leading-relaxed">
              In a few simple steps, you can request to redirect an incoming package to a safe and convenient location near you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
