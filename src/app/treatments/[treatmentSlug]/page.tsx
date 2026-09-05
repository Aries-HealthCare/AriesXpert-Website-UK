"use client";

import React, { useState, use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getTreatmentBySlug } from "@/lib/uk-data";
import { BookingModal } from '@/components/booking-modal';
import { Zap, CheckCircle2, Calendar, ShieldCheck, Clock, Layers } from "lucide-react";

interface TreatmentPageProps {
  params: Promise<{
    treatmentSlug: string;
  }>;
}

export default function TreatmentDetailPage({ params }: TreatmentPageProps) {
  const { treatmentSlug } = use(params);
  const treatment = getTreatmentBySlug(treatmentSlug);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  if (!treatment) {
    return notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Breadcrumb & Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link href="/treatments" className="hover:text-clinical-cyan transition-colors">Treatments</Link>
          <span>/</span>
          <span className="text-clinical-cyan font-bold">{treatment.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono uppercase text-clinical-cyan font-bold tracking-wider">
              {treatment.category.replace("-", " ")}
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
              {treatment.name}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {treatment.shortDescription}
            </p>
          </div>

          <button
            onClick={() => setBookingModalOpen(true)}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-clinical-cyan to-clinical-teal text-slate-950 font-bold text-xs uppercase shadow-clinical-glow hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 shrink-0"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Assessment</span>
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 space-y-6">
          <div className="p-8 rounded-3xl bg-midnight-900/80 border border-slate-800 shadow-glass space-y-4">
            <h2 className="text-2xl font-display font-bold text-white">What is {treatment.name}?</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {treatment.whatItIs}
            </p>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-clinical-cyan" /> Physiological Mechanism:
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {treatment.howItWorks}
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-midnight-900/80 border border-slate-800 shadow-glass space-y-4">
            <h3 className="text-lg font-display font-bold text-white">What to Expect During a Session</h3>
            <div className="space-y-2">
              {treatment.sessionExpectations.map((exp) => (
                <div key={exp} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <Clock className="w-4 h-4 text-clinical-cyan shrink-0 mt-0.5" />
                  <span>{exp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-midnight-900/80 border border-slate-800 space-y-4 shadow-glass">
            <h3 className="text-sm font-mono uppercase text-slate-400 font-bold">Target Patient Populations</h3>
            <div className="space-y-2">
              {treatment.whoItHelps.map((who) => (
                <div key={who} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-recovery-mint shrink-0 mt-0.5" />
                  <span>{who}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-midnight-900/80 border border-slate-800 space-y-3 shadow-glass">
            <h3 className="text-sm font-mono uppercase text-slate-400 font-bold">Evidence Summary</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {treatment.evidenceSummary}
            </p>
            {(treatment.gbpPricingEstimate || treatment.cadPricingEstimate) && (
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-850 text-xs text-clinical-cyan">
                <strong>Pricing & Insurance:</strong> {treatment.gbpPricingEstimate || treatment.cadPricingEstimate}
              </div>
            )}
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}
