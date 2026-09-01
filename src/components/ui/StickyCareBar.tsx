"use client";

import React from "react";
import Link from "next/link";
import { PhoneCall, Calendar, ShieldCheck, Zap } from "lucide-react";

interface StickyCareBarProps {
  onOpenBooking?: () => void;
}

export const StickyCareBar: React.FC<StickyCareBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-midnight-950/95 backdrop-blur-2xl border-t border-slate-800/90 px-4 py-3 shadow-2xl">
      <div className="max-w-md mx-auto flex items-center gap-3">
        {/* Call Helpline */}
        <a
          href="tel:+18002743722"
          className="flex-1 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          <PhoneCall className="w-3.5 h-3.5 text-clinical-cyan" />
          <span>Call 1-800-ARIES</span>
        </a>

        {/* Book Assessment Button */}
        <Link
          href="/book-assessment"
          className="flex-1 py-3 rounded-xl bg-gradient-to-r from-clinical-cyan via-clinical-teal to-recovery-mint text-slate-950 font-black text-xs uppercase tracking-wider shadow-clinical-glow flex items-center justify-center gap-2 active:scale-95 transition-transform text-center"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book In-Home PT</span>
        </Link>
      </div>
    </div>
  );
};

export default StickyCareBar;
