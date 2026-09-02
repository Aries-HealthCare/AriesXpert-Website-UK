"use client";

import React, { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getConditionBySlug, CONDITIONS_LIBRARY } from "@/lib/uk-data";
import { HumanBodyScene } from "@/components/3d/HumanBodyScene";
import { SceneContainer } from "@/components/3d/SceneContainer";
import BookAppointmentButton from "@/components/book-appointment-button";
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

  if (!condition) {
    return notFound();
  }

  const symptoms = condition.symptoms || [];
  const movementImpact = condition.movementImpact || [];
  const assessmentProtocol = condition.assessmentProtocol || [];
  const evidenceBasedTreatments = condition.evidenceBasedTreatments || [];
  const rehabilitationTimeline = condition.rehabilitationTimeline || [];
  const homeCareEducation = condition.homeCareEducation || [];
  const redFlagsUrgentCare = condition.redFlagsUrgentCare || [];
  const faqs = condition.faqs || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Top Breadcrumb & Metadata */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link href="/" className="hover:text-clinical-cyan">Home</Link>
          <span>/</span>
          <Link href="/conditions" className="hover:text-clinical-cyan">Conditions</Link>
          <span>/</span>
          <span className="text-white capitalize">{condition.bodyRegion || "General"}</span>
          <span>/</span>
          <span className="text-clinical-cyan font-bold">{condition.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-900 border border-slate-700 text-clinical-cyan">
            {condition.category || "Clinical Care"}
          </span>
        </div>
      </div>

      {/* 01: Condition Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-clinical-teal">
            <Sparkles className="w-3.5 h-3.5" />
            <span>UK Evidence-Informed Protocol</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight leading-tight">
            {condition.name}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            {condition.shortDescription || condition.description || condition.whatIsIt}
          </p>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 space-y-1">
            <strong className="text-slate-200">Clinical Overview:</strong>
            <p>{condition.whatIsIt || condition.description}</p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <BookAppointmentButton
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-clinical-cyan to-clinical-teal text-slate-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-clinical-glow flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book In-Home Assessment</span>
            </BookAppointmentButton>
            <Link
              href="/anatomy-lab"
              className="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-medium text-xs hover:bg-slate-800 transition-all flex items-center gap-2"
            >
              <Layers className="w-4 h-4 text-clinical-cyan" />
              <span>Interactive Anatomy Lab</span>
            </Link>
          </div>
        </div>

        {/* 02: Interactive 3D Anatomy Visualizer */}
        <div className="lg:col-span-5 h-[380px] sm:h-[460px] rounded-3xl overflow-hidden border border-slate-800 bg-midnight-950 relative shadow-glass">
          <SceneContainer
            selectedRegion={condition.bodyRegion || "spine"}
          >
            <HumanBodyScene
              selectedRegion={condition.bodyRegion || "spine"}
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
            {symptoms.map((symp) => (
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
            {movementImpact.map((imp) => (
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
            {assessmentProtocol.map((test) => (
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
            {evidenceBasedTreatments.map((tx) => (
              <div key={tx} className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-recovery-mint shrink-0 mt-0.5" />
                <span>{tx}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 07: Rehabilitation Timeline */}
      {rehabilitationTimeline.length > 0 && (
        <div className="p-6 sm:p-8 rounded-2xl bg-midnight-900/80 border border-slate-800 space-y-6 shadow-glass">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono uppercase text-clinical-cyan font-bold">07 — Rehabilitation Journey</span>
              <h3 className="text-2xl font-display font-bold text-white mt-1">Phased Recovery Pathway</h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">*Timelines vary based on tissue biology</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {rehabilitationTimeline.map((phase, idx) => (
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
      )}

      {/* 08: Home Care & 09: Red Flags Safety Alert */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-midnight-900/80 border border-slate-800 space-y-4 shadow-glass">
          <span className="text-xs font-mono uppercase text-recovery-mint font-bold">08 — Home Support & Education</span>
          <h3 className="text-xl font-display font-bold text-white">Daily Self-Management</h3>
          <div className="space-y-2">
            {homeCareEducation.map((edu) => (
              <div key={edu} className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-recovery-mint shrink-0 mt-0.5" />
                <span>{edu}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-pain-crimson/10 border border-pain-crimson/30 space-y-4 shadow-glass">
          <span className="text-xs font-mono uppercase text-pain-crimson font-bold">09 — Urgent Safety Guidance</span>
          <h3 className="text-xl font-display font-bold text-white">When to Seek Immediate Medical Attention</h3>
          <div className="space-y-2">
            {redFlagsUrgentCare.map((flag) => (
              <div key={flag} className="flex items-start gap-2.5 text-xs text-slate-200">
                <ShieldAlert className="w-4 h-4 text-pain-crimson shrink-0 mt-0.5" />
                <span>{flag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 10: FAQs */}
      {faqs.length > 0 && (
        <div className="p-6 sm:p-8 rounded-2xl bg-midnight-900/80 border border-slate-800 space-y-6 shadow-glass">
          <div>
            <span className="text-xs font-mono uppercase text-clinical-cyan font-bold">10 — Clinical Questions</span>
            <h3 className="text-2xl font-display font-bold text-white mt-1">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
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
    </div>
  );
}
