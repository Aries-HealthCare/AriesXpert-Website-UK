"use client";

import React, { useState, use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getConditionBySlug, CONDITIONS_LIBRARY } from "@/lib/canadian-data";
import { HumanBodyScene } from "@/components/3d/HumanBodyScene";
import { SceneContainer } from "@/components/3d/SceneContainer";
import { BookingModal } from '@/components/booking-modal';
import { 
  Activity, 
  Sparkles, 
  AlertCircle, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  HelpCircle, 
  ShieldAlert, 
  ArrowRight, 
  Layers 
} from "lucide-react";

interface ConditionPageProps {
  params: Promise<{
    conditionSlug: string;
  }>;
}

export default function ConditionDetailPage({ params }: ConditionPageProps) {
  const { conditionSlug } = use(params);
  const condition = getConditionBySlug(conditionSlug);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  if (!condition) {
    // Default fallback to first condition if slug not matched or notFound
    return notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* 01: Hero & Breadcrumb */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link href="/conditions" className="hover:text-clinical-cyan transition-colors">Conditions</Link>
          <span>/</span>
          <span className="text-slate-200 capitalize">{condition.category}</span>
          <span>/</span>
          <span className="text-clinical-cyan font-bold">{condition.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-2 max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
              {condition.name}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {condition.shortDescription}
            </p>
          </div>

          <button
            onClick={() => setBookingModalOpen(true)}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-clinical-cyan to-clinical-teal text-slate-950 font-bold text-xs tracking-wide uppercase shadow-clinical-glow hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 shrink-0"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Assessment for {condition.name.split(" ")[0]}</span>
          </button>
        </div>
      </div>

      {/* 02: What Is It? & 3D Anatomy Model Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: 01 What is it? */}
        <div className="lg:col-span-6 space-y-6 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-midnight-900/80 border border-slate-800 shadow-glass">
          <div className="space-y-4">
            <div>
              <span className="text-xs font-mono uppercase text-clinical-cyan font-bold">01 — What is it?</span>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">Clinical Definition</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {condition.whatIsIt}
            </p>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-clinical-cyan" /> 02 — Anatomical Breakdown
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {condition.anatomyOverview}
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-recovery-mint/10 border border-recovery-mint/30 text-xs text-slate-200">
            <strong>Canadian Health Note:</strong> Covered under extended health benefits and direct billed by AriesXpert physiotherapists across Ontario, BC, and Alberta.
          </div>
        </div>

        {/* Right: 02 3D Interactive Anatomy Viewer */}
        <div className="lg:col-span-6 h-[440px] rounded-2xl bg-midnight-950/90 border border-slate-800/90 overflow-hidden relative">
          <SceneContainer selectedRegion={condition.bodyRegion}>
            <HumanBodyScene
              selectedRegion={condition.bodyRegion}
              className="w-full h-full min-h-[440px]"
            />
          </SceneContainer>
        </div>
      </div>

      {/* 03: Symptoms & 04: Movement Impact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-midnight-900/80 border border-slate-800 space-y-4 shadow-glass">
          <span className="text-xs font-mono uppercase text-pain-crimson font-bold">03 — What Can It Feel Like?</span>
          <h3 className="text-xl font-display font-bold text-white">Common Symptoms</h3>
          <div className="space-y-2.5">
            {condition.symptoms.map((symp) => (
              <div key={symp} className="flex items-start gap-2.5 text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-pain-crimson mt-1 shrink-0" />
                <span>{symp}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-midnight-900/80 border border-slate-800 space-y-4 shadow-glass">
          <span className="text-xs font-mono uppercase text-clinical-teal font-bold">04 — Movement Consequences</span>
          <h3 className="text-xl font-display font-bold text-white">How It Affects Daily Function</h3>
          <div className="space-y-2.5">
            {condition.movementImpact.map((imp) => (
              <div key={imp} className="flex items-start gap-2.5 text-xs text-slate-300">
                <Activity className="w-4 h-4 text-clinical-teal shrink-0 mt-0.5" />
                <span>{imp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 05: Clinical Assessment & 06: Evidence-Based Treatment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-midnight-900/80 border border-slate-800 space-y-4 shadow-glass">
          <span className="text-xs font-mono uppercase text-clinical-cyan font-bold">05 — Clinical Assessment</span>
          <h3 className="text-xl font-display font-bold text-white">What Your Physiotherapist Evaluates</h3>
          <div className="space-y-2.5">
            {condition.assessmentProtocol.map((test) => (
              <div key={test} className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-clinical-cyan shrink-0 mt-0.5" />
                <span>{test}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-midnight-900/80 border border-slate-800 space-y-4 shadow-glass">
          <span className="text-xs font-mono uppercase text-recovery-mint font-bold">06 — Treatment Options</span>
          <h3 className="text-xl font-display font-bold text-white">Evidence-Informed Rehabilitation</h3>
          <div className="space-y-2.5">
            {condition.evidenceBasedTreatments.map((tx) => (
              <div key={tx} className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-recovery-mint shrink-0 mt-0.5" />
                <span>{tx}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 07: Rehabilitation Timeline */}
      <div className="p-6 sm:p-8 rounded-2xl bg-midnight-900/80 border border-slate-800 space-y-6 shadow-glass">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs font-mono uppercase text-clinical-cyan font-bold">07 — Rehabilitation Journey</span>
            <h3 className="text-2xl font-display font-bold text-white mt-1">Phased Recovery Pathway</h3>
          </div>
          <span className="text-xs text-slate-400 font-mono">*Timelines vary based on tissue biology</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {condition.rehabilitationTimeline.map((phase, idx) => (
            <div key={phase.phase} className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-clinical-cyan">STAGE 0{idx + 1}</span>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-300">
                  {phase.duration}
                </span>
              </div>
              <h4 className="text-sm font-bold text-white">{phase.phase}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{phase.goal}</p>
              <div className="pt-2 border-t border-slate-850 text-[11px] text-slate-400">
                <strong className="text-slate-300">Focus:</strong> {phase.focus}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 08: Home Care & 09: Red Flags Safety Alert */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 08 Home support */}
        <div className="p-6 sm:p-8 rounded-2xl bg-midnight-900/80 border border-slate-800 space-y-4 shadow-glass">
          <span className="text-xs font-mono uppercase text-recovery-mint font-bold">08 — Home Support & Education</span>
          <h3 className="text-xl font-display font-bold text-white">Daily Self-Management</h3>
          <div className="space-y-2">
            {condition.homeCareEducation.map((edu) => (
              <div key={edu} className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-recovery-mint shrink-0 mt-0.5" />
                <span>{edu}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 09 Red flags */}
        <div className="p-6 sm:p-8 rounded-2xl bg-pain-crimson/10 border border-pain-crimson/30 space-y-4 shadow-glass">
          <span className="text-xs font-mono uppercase text-pain-crimson font-bold">09 — Urgent Safety Guidance</span>
          <h3 className="text-xl font-display font-bold text-white">When to Seek Immediate Medical Attention</h3>
          <div className="space-y-2">
            {condition.redFlagsUrgentCare.map((flag) => (
              <div key={flag} className="flex items-start gap-2.5 text-xs text-slate-200">
                <ShieldAlert className="w-4 h-4 text-pain-crimson shrink-0 mt-0.5" />
                <span>{flag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 10: FAQs */}
      {condition.faqs.length > 0 && (
        <div className="p-6 sm:p-8 rounded-2xl bg-midnight-900/80 border border-slate-800 space-y-6 shadow-glass">
          <div>
            <span className="text-xs font-mono uppercase text-clinical-cyan font-bold">10 — Clinical Questions</span>
            <h3 className="text-2xl font-display font-bold text-white mt-1">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-4">
            {condition.faqs.map((faq) => (
              <div key={faq.question} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                <h4 className="text-sm font-bold text-white flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-clinical-cyan shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 11 & 12: Related & Final Booking CTA */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-midnight-900 to-midnight-950 border border-slate-700 text-center space-y-6 shadow-2xl">
        <span className="text-xs font-mono uppercase text-clinical-cyan font-bold">12 — Take the Next Step</span>
        <h3 className="text-3xl sm:text-4xl font-display font-bold text-white">
          Reclaim Your Movement from {condition.name}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
          Connect with a Canadian Registered Physiotherapist licensed in your province for clinic, in-home, or virtual assessment.
        </p>

        <button
          onClick={() => setBookingModalOpen(true)}
          className="px-8 py-4 rounded-2xl bg-gradient-to-r from-clinical-cyan via-clinical-teal to-recovery-mint text-slate-950 font-black text-sm uppercase tracking-wider shadow-clinical-glow hover:brightness-110 active:scale-95 transition-all inline-flex items-center gap-2"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Movement Assessment</span>
        </button>
      </div>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialRegion={condition.bodyRegion}
      />
    </div>
  );
}
