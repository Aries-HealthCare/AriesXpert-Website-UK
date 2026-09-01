"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SERVICE_CATEGORIES } from "@/lib/canadian-data";
import { Activity, ChevronRight, CheckCircle2, Home, Video, Building2, Calendar } from "lucide-react";
import { BookingModal } from '@/components/booking-modal';

export default function ServicesPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-clinical-cyan">
          <Activity className="w-4 h-4" />
          <span className="uppercase font-bold tracking-wider">Clinical Services Directory</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
          EVIDENCE-BASED REHABILITATION SERVICES
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          From acute sports injury recovery and spinal disc rehabilitation to complex neurological motor retraining and in-home geriatric mobility across Canada.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICE_CATEGORIES.map((service) => (
          <div
            key={service.id}
            className="p-8 rounded-3xl bg-midnight-900/80 border border-slate-800 hover:border-clinical-cyan/60 transition-all flex flex-col justify-between space-y-6 shadow-glass group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-clinical-cyan font-bold tracking-wider">
                  Specialized Service
                </span>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  {service.careFormats.map((f) => (
                    <span key={f} className="px-2 py-0.5 rounded bg-slate-950 capitalize border border-slate-800">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <h2 className="text-2xl font-display font-bold text-white group-hover:text-clinical-cyan transition-colors">
                {service.title}
              </h2>

              <p className="text-xs text-clinical-teal font-medium">
                {service.tagline}
              </p>

              <p className="text-xs text-slate-300 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <span className="text-[11px] font-mono uppercase text-slate-400 block font-bold">
                  Core Clinical Objectives:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {service.clinicalObjectives.slice(0, 3).map((obj) => (
                    <li key={obj} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-recovery-mint shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <Link
                href={`/services/${service.slug}`}
                className="text-xs font-bold text-clinical-cyan hover:underline flex items-center gap-1"
              >
                <span>Full Service Protocols</span>
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
