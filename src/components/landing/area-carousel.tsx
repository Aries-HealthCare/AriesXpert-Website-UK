'use client';

import React from "react";
import Link from "next/link";
import { MapPin, CheckCircle2, ChevronRight } from "lucide-react";

const activeZones = [
  { name: "Central London (Westminster, Mayfair, EC1-EC4)", status: "Active Clinical Coverage", leadTime: "< 45 mins", slug: "england/london" },
  { name: "Kensington & Chelsea (SW1, SW3, SW7, W8)", status: "In-Home PT On-Duty", leadTime: "< 30 mins", slug: "england/london" },
  { name: "Canary Wharf & Docklands (E14, SE16)", status: "Active Dispatch", leadTime: "< 45 mins", slug: "england/london" },
  { name: "Manchester City Centre & Salford Quays (M1-M5, M50)", status: "Active Dispatch", leadTime: "< 45 mins", slug: "england/manchester" },
  { name: "Altrincham, Hale & Wilmslow (WA14, SK9)", status: "Home Visits Open", leadTime: "< 60 mins", slug: "england/manchester" },
  { name: "Birmingham City & Edgbaston (B1, B15, B90)", status: "Active Coverage", leadTime: "< 60 mins", slug: "england/birmingham" },
  { name: "Edinburgh New Town & Stockbridge (EH1-EH4)", status: "Home Visits Open", leadTime: "< 60 mins", slug: "scotland/edinburgh" },
  { name: "Glasgow West End & Southside (G12, G41)", status: "Active Dispatch", leadTime: "< 60 mins", slug: "scotland/glasgow" },
  { name: "Clifton & Central Bristol (BS8, BS1)", status: "In-Home PT On-Duty", leadTime: "< 60 mins", slug: "england/bristol" },
  { name: "Leeds City & Headingley (LS1, LS6)", status: "Active Coverage", leadTime: "< 60 mins", slug: "england/leeds" },
  { name: "Cardiff Bay & Pontcanna (CF10, CF11)", status: "Active Dispatch", leadTime: "< 60 mins", slug: "wales/cardiff" },
  { name: "Belfast City & Malone Road (BT1, BT9)", status: "Home Visits Open", leadTime: "< 60 mins", slug: "northern-ireland/belfast" },
];

export default function AreaCarousel() {
  const displayZones = [...activeZones, ...activeZones];

  return (
    <section className="py-4 bg-muted/40 border-b border-border/40 overflow-hidden relative">
      <div className="flex items-center gap-3 overflow-hidden">
        {/* Left Sticky Badge */}
        <div className="hidden md:flex items-center gap-2 pl-6 pr-4 shrink-0 bg-muted/40 z-20 font-mono text-xs font-bold text-foreground uppercase tracking-wider">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Live UK Service Ticker:</span>
        </div>

        {/* Marquee Ticker */}
        <div className="flex w-max gap-8 animate-ticker hover:[animation-play-state:paused]">
          {displayZones.map((zone, idx) => (
            <Link
              key={`${zone.name}-${idx}`}
              href={`/locations/${zone.slug}`}
              className="inline-flex items-center gap-2.5 text-xs text-muted-foreground hover:text-foreground transition-colors shrink-0"
              prefetch={false}
            >
              <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
              <span className="font-semibold text-foreground">{zone.name}</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 font-bold border border-emerald-500/20">
                {zone.status} • {zone.leadTime}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-ticker {
          animation: ticker 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
