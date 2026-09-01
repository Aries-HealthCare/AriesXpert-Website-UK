"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TREATMENTS_UNIVERSE } from "@/lib/canadian-data";
import { Zap, ChevronRight, CheckCircle2, Calendar } from "lucide-react";
import { BookingModal } from '@/components/booking-modal';

export default function TreatmentsPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-clinical-cyan">
          <Zap className="w-4 h-4" />
          <span className="uppercase font-bold tracking-wider">Treatments & Modalities</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
          THE INTERVENTION UNIVERSE
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          From hands-on orthopaedic joint mobilization and dry needling to progressive exercise mechanotransduction and computerized spinal decompression.
        </p>
      </div>

      {/* Treatments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {TREATMENTS_UNIVERSE.map((treatment) => (
          <div
            key={treatment.id}
            className="p-8 rounded-3xl bg-midnight-900/80 border border-slate-800 hover:border-clinical-cyan/60 transition-all flex flex-col justify-between space-y-6 shadow-glass group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-clinical-cyan font-bold tracking-wider">
                  {treatment.category.replace("-", " ")}
                </span>
                {treatment.cadPricingEstimate && (
                  <span className="text-[11px] font-mono text-slate-400">
                    Direct Billed in Canada
                  </span>
                )}
              </div>

              <h2 className="text-2xl font-display font-bold text-white group-hover:text-clinical-cyan transition-colors">
                {treatment.name}
              </h2>

              <p className="text-xs text-slate-300 leading-relaxed">
                {treatment.shortDescription}
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <span className="text-[11px] font-mono uppercase text-slate-400 block font-bold">
                  Who Benefits Most:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {treatment.whoItHelps.slice(0, 3).map((who) => (
                    <li key={who} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-recovery-mint shrink-0 mt-0.5" />
                      <span>{who}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <Link
                href={`/treatments/${treatment.slug}`}
                className="text-xs font-bold text-clinical-cyan hover:underline flex items-center gap-1"
              >
                <span>Read Clinical Mechanics</span>
                <ChevronRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => setBookingModalOpen(true)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-clinical-cyan hover:text-slate-950 text-xs font-bold text-slate-200 transition-colors"
              >
                Book Assessment
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
