"use client";

import React, { useState } from "react";
import Link from "next/link";
import { UK_NATIONS, UK_CITY_HUBS } from "@/lib/uk-geo";
import { MapPin, ChevronRight, Globe, ShieldCheck } from "lucide-react";
import BookingModal from "@/components/booking-modal";

export default function LocationsPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary font-bold uppercase tracking-wider">
          <Globe className="w-4 h-4" />
          <span>United Kingdom Coverage Directory</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-headline font-black text-foreground tracking-tight">
          FIND CHARTERED PHYSIOTHERAPY NEAR YOU
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Select your UK nation and regional city to explore in-home mobile coverage zones, postcode dispatch times, and virtual tele-rehabilitation availability.
        </p>
      </div>

      {/* Nations & Cities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {UK_NATIONS.map((nation) => (
          <div
            key={nation.code}
            className="p-6 rounded-3xl premium-card space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-border/40">
                <h2 className="text-xl font-headline font-bold text-foreground">{nation.name}</h2>
                <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-[10px] font-mono text-primary font-bold border border-primary/20">
                  {nation.code}
                </span>
              </div>

              <p className="text-[11px] font-mono text-muted-foreground">
                {nation.regulatoryCollegeName}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-mono uppercase text-muted-foreground font-bold block">
                  Metropolitan Service Hubs:
                </span>
                <div className="space-y-2">
                  {nation.majorHubs.map((hub) => (
                    <Link
                      key={hub.slug}
                      href={`/locations/${hub.slug}`}
                      className="p-3 rounded-xl bg-muted/60 hover:bg-primary/10 border border-border hover:border-primary/40 transition-all flex items-center justify-between text-xs font-semibold text-foreground group"
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{hub.name}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border/40">
              <button
                onClick={() => setBookingModalOpen(true)}
                className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground hover:brightness-110 text-xs font-bold transition-all shadow-sm"
              >
                Book Care in {nation.name}
              </button>
            </div>
          </div>
        ))}
      </div>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}
