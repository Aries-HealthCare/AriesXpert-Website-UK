'use client';

import React from 'react';
import { PhoneCall } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:block">
      <a
        href="tel:08002743785"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-primary text-primary-foreground shadow-2xl hover:scale-105 active:scale-95 transition-all group font-mono text-xs font-bold"
        aria-label="Call UK Toll-Free Hotline"
      >
        <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
          <PhoneCall className="w-4 h-4 text-white" />
        </div>
        <div className="text-left">
          <span className="block text-[10px] uppercase font-bold text-white/80">UK Toll-Free</span>
          <span className="text-xs font-black text-white">0800 ARIES UK</span>
        </div>
      </a>
    </div>
  );
}
