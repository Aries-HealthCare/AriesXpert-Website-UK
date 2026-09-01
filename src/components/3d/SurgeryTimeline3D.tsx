"use client";

import React, { useState } from "react";
import { SURGICAL_REHAB_TIMELINES } from "@/lib/canadian-data";
import { ShieldCheck, Calendar, ArrowRight, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import Link from "next/link";

interface SurgeryTimeline3DProps {
  onOpenBooking?: () => void;
}

export const SurgeryTimeline3D: React.FC<SurgeryTimeline3DProps> = ({ onOpenBooking }) => {
  const [selectedProcedureId, setSelectedProcedureId] = useState("tkr-rehab");
  const [activePhaseIndex, setActivePhaseIndex] = useState(1); // Default to Day 1

  const currentTimeline = SURGICAL_REHAB_TIMELINES.find(t => t.id === selectedProcedureId) || SURGICAL_REHAB_TIMELINES[0];
  const currentPhase = currentTimeline.phases[activePhaseIndex] || currentTimeline.phases[0];

  return (
    <div className="w-full rounded-3xl bg-midnight-900/80 border border-slate-800 p-6 lg:p-10 space-y-8">
      {/* Header & Surgical Distinction Disclaimer */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-aries-coral text-xs font-mono border border-slate-700">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Phased Orthopaedic Rehabilitation</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            From Surgery to Movement
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
            {currentTimeline.surgicalDistinction}
          </p>
        </div>

        {/* Procedure Selector Tabs */}
        <div className="flex flex-wrap gap-2">
          {SURGICAL_REHAB_TIMELINES.map((proc) => (
            <button
              key={proc.id}
              onClick={() => {
                setSelectedProcedureId(proc.id);
                setActivePhaseIndex(1);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                selectedProcedureId === proc.id
                  ? "bg-gradient-to-r from-clinical-cyan to-clinical-teal text-slate-950 shadow-clinical-glow scale-105"
                  : "bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white"
              }`}
            >
              {proc.procedureName.split("(")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Timeline Scrubber */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
          <span>REHABILITATION PHASES (SCRUB TIMELINE)</span>
          <span className="text-clinical-cyan font-bold">{currentPhase.timelineLabel}</span>
        </div>

        {/* Phase Buttons Progression */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {currentTimeline.phases.map((phase, idx) => (
            <button
              key={phase.phaseId}
              onClick={() => setActivePhaseIndex(idx)}
              className={`p-3 rounded-xl border text-left transition-all ${
                activePhaseIndex === idx
                  ? "bg-slate-800 border-clinical-cyan text-white shadow-clinical-glow ring-1 ring-clinical-cyan"
                  : idx < activePhaseIndex
                  ? "bg-slate-900/90 border-slate-800 text-slate-300 hover:border-slate-700"
                  : "bg-slate-950/60 border-slate-900 text-slate-500 hover:text-slate-400"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono font-bold text-slate-400">PHASE 0{idx + 1}</span>
                {idx < activePhaseIndex ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-recovery-mint" />
                ) : (
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                )}
              </div>
              <p className="text-xs font-bold text-slate-200 line-clamp-1">{phase.title}</p>
              <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">{phase.timelineLabel}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Phase Deep-Dive Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 lg:p-8 rounded-2xl bg-midnight-950/90 border border-slate-800/90 items-center">
        {/* Left Phase Visual Graphic / Status */}
        <div className="lg:col-span-5 p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-clinical-cyan animate-pulse" />
            <span className="text-xs font-mono uppercase text-clinical-cyan font-bold">
              {currentPhase.timelineLabel}
            </span>
          </div>

          <h3 className="text-2xl font-display font-bold text-white">
            {currentPhase.title}
          </h3>

          <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800/80 text-xs text-slate-300">
            <strong className="text-white block mb-1">Anatomical & Surgical State:</strong>
            {currentPhase.anatomicalState}
          </div>

          <div className="p-3.5 rounded-lg bg-recovery-mint/10 border border-recovery-mint/30 text-xs text-slate-200">
            <strong className="text-recovery-mint block mb-1">Phase Movement Target:</strong>
            {currentPhase.movementGoal}
          </div>
        </div>

        {/* Right Rehabilitation Interventions & Precautions */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 mb-3">
              Physiotherapy Focus & Protocols
            </h4>
            <div className="space-y-2">
              {currentPhase.rehabFocus.map((focus) => (
                <div key={focus} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-clinical-cyan shrink-0 mt-0.5" />
                  <span>{focus}</span>
                </div>
              ))}
            </div>
          </div>

          {currentPhase.precautions.length > 0 && (
            <div className="p-4 rounded-xl bg-pain-crimson/10 border border-pain-crimson/30 text-xs space-y-2">
              <span className="font-bold text-pain-crimson flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" /> Clinical Precautions during this phase:
              </span>
              <ul className="space-y-1 text-slate-300 list-disc list-inside">
                {currentPhase.precautions.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            {onOpenBooking ? (
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-clinical-cyan to-clinical-teal text-slate-950 font-bold text-xs shadow-clinical-glow hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Post-Op Assessment</span>
              </button>
            ) : (
              <Link
                href="/book-assessment"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-clinical-cyan to-clinical-teal text-slate-950 font-bold text-xs shadow-clinical-glow hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Post-Op Assessment</span>
              </Link>
            )}

            <p className="text-[11px] text-slate-400">
              *Recovery timelines vary by surgeon protocol, individual tissue rate, and consistent physical rehabilitation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
