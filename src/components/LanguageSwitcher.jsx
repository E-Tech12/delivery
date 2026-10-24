import React, { useState } from 'react';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState('English');

  const languages = ['English', 'Español', 'Français', 'Deutsch', 'Italiano', '中文', 'العربية'];

  return (
    <div className="fixed bottom-5 left-5 z-40">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-white/95 backdrop-blur-xs text-gray-800 px-3 py-2 rounded-full shadow-lg border border-gray-200 text-xs font-medium hover:bg-white transition-all cursor-pointer"
          aria-label="Select language"
        >
          <span className="text-base leading-none">🇺🇸</span>
          <span>{lang}</span>
          <Globe className="w-3.5 h-3.5 text-gray-400" />
        </button>

        {isOpen && (
          <div className="absolute bottom-12 left-0 w-36 bg-white rounded-lg shadow-xl border border-gray-100 py-1 overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200">
            {languages.map((l) => (
              <button
                key={l}
                onClick={() => {
                  setLang(l);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-1.5 text-xs transition-colors ${
                  lang === l ? 'bg-red-50 text-[#dd3333] font-semibold' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
