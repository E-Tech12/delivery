import React, { useState } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const popularPosts = [
    {
      title: 'Nam sed tellus id magna elementum tincidunt',
      date: 'October 23, 2018',
      img: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=160&h=120&fit=crop',
    },
    {
      title: 'Cum sociis natoque penatibus et magnis',
      date: 'October 23, 2018',
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=120&fit=crop',
    },
    {
      title: 'Praesent id justo in neque elementum',
      date: 'October 23, 2018',
      img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=160&h=120&fit=crop',
    },
    {
      title: 'Etiam bibendum elit eget erat',
      date: 'October 23, 2018',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=120&fit=crop',
    },
    {
      title: 'Donec iaculis gravida nulla',
      date: 'October 23, 2018',
      img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=160&h=120&fit=crop',
    },
  ];

  return (
    <>
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40 transition-all duration-300">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[85px]">
            {/* Brand Logo & Title */}
            <div className="flex flex-col justify-center">
              <h1 className="m-0 p-0 text-[26px] md:text-[28px] font-bold text-black tracking-[-0.02em] leading-[32px]">
                <a href="#home" className="hover:text-[#dd3333] transition-colors">
                  EXPRESS DELIVERY
                </a>
              </h1>
              <p className="m-0 text-[14px] md:text-[15px] text-[#515151] leading-[20px]">
                Worldwide Shipping
              </p>
            </div>

            {/* Right side navigation / Menu Toggle */}
            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex items-center space-x-6 text-[14px] font-medium text-gray-700">
                <a href="#home" className="hover:text-[#dd3333] transition-colors py-2 text-[#dd3333] border-b-2 border-[#dd3333]">HOME</a>
                <a href="#about" className="hover:text-[#dd3333] transition-colors py-2">ABOUT</a>
                <a href="#features" className="hover:text-[#dd3333] transition-colors py-2">FEATURES</a>
                <a href="#pricing" className="hover:text-[#dd3333] transition-colors py-2">TRACKING</a>
                <a href="#clients" className="hover:text-[#dd3333] transition-colors py-2">CLIENTS</a>
                <a href="#contact" className="hover:text-[#dd3333] transition-colors py-2">CONTACT</a>
              </nav>

              <button
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 text-gray-700 hover:text-[#dd3333] focus:outline-none transition-colors"
                aria-label="Open offcanvas menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Off-canvas Sidebar Drawer */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      <aside
        className={`fixed top-0 right-0 h-full w-[320px] max-w-[85vw] bg-white z-50 shadow-2xl p-6 overflow-y-auto transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
          <span className="font-semibold text-gray-800 text-sm tracking-wider uppercase">Menu</span>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-1 text-gray-500 hover:text-black focus:outline-none transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="mt-6 space-y-8">
          <div>
            <h3 className="text-[17px] font-bold text-gray-900 mb-3 pb-2 border-b border-gray-100">
              Custom menu section
            </h3>
            <p className="text-[13px] text-gray-600 leading-relaxed">
              This is off canvas menu widget area. To enable it add some widgets into{' '}
              <strong>Appearance – Widgets – Menu Section</strong>, and go to{' '}
              <strong>Customizer – Main menu</strong> to set the icon position.
            </p>
          </div>

          <div>
            <h3 className="text-[17px] font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
              Popular posts
            </h3>
            <div className="space-y-4">
              {popularPosts.map((post, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-16 h-12 object-cover rounded shadow-xs"
                    loading="lazy"
                  />
                  <div className="flex-1">
                    <h4 className="text-[13px] font-medium text-gray-800 hover:text-[#dd3333] transition-colors leading-snug cursor-pointer line-clamp-2">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1 text-[11px] text-gray-400">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-3 h-3" /> 0
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
