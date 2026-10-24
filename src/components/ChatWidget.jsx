import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="bg-[#111111] text-white p-4 flex justify-between items-center">
            <div>
              <h4 className="font-semibold text-sm">Customer Support</h4>
              <p className="text-xs text-white/70">Online • Typically replies instantly</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 h-52 bg-gray-50 overflow-y-auto space-y-3 text-xs">
            <div className="bg-white p-3 rounded-lg shadow-2xs border border-gray-100 max-w-[85%] text-gray-800">
              Hello! 👋 Welcome to Express Delivery. How can we help you with your shipment today?
            </div>
          </div>

          <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 border border-gray-200 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:border-[#dd3333]"
            />
            <button className="bg-[#dd3333] text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-[#8c1c1c] transition-colors">
              Send
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#dd3333] hover:bg-[#8c1c1c] text-white shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer"
        aria-label="Open support chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}
