import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import SmallBusinessSection from './sections/SmallBusinessSection';
import GallerySection from './sections/GallerySection';
import ManageShipmentsSection from './sections/ManageShipmentsSection';
import StatsCounterSection from './sections/StatsCounterSection';
import ParallaxDividerSection from './sections/ParallaxDividerSection';
import TrackingSection from './sections/TrackingSection';
import DeliveryCardsSection from './sections/DeliveryCardsSection';
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#515151] flex flex-col font-roboto antialiased">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <SmallBusinessSection />
        <GallerySection />
        <ManageShipmentsSection />
        <StatsCounterSection />
        <ParallaxDividerSection />
        <TrackingSection />
        <DeliveryCardsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />

      {/* Floating Utilities */}
      <LanguageSwitcher />
    </div>
  );
}
