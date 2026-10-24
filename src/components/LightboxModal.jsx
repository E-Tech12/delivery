import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function LightboxModal({ image, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-gray-300 p-2 z-50 focus:outline-none"
        aria-label="Close lightbox"
      >
        <X className="w-8 h-8" />
      </button>

      <div
        className="relative max-w-4xl max-h-[85vh] bg-transparent flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.title}
          className="max-w-full max-h-[75vh] object-contain rounded shadow-2xl"
        />
        <div className="mt-3 text-center text-white/80 text-sm font-medium">
          {image.title}
        </div>
      </div>
    </div>
  );
}
