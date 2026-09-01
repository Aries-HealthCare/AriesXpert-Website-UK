"use client";

import React, { useState } from "react";
import { Sparkles, ShieldCheck, Activity, Cpu, Globe, CheckCircle2, AlertCircle } from "lucide-react";
import { BookingModal } from '@/components/booking-modal';

export default function TechnologyPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-clinical-cyan">
          <Cpu className="w-4 h-4" />
          <span className="uppercase font-bold tracking-wider">AriesXpert Intelligence</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
          TECHNOLOGY THAT SUPPORTS HUMAN CARE
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          How 3D WebGL rendering, biomechanical kinematics, and intelligent administrative telemetry empower Canadian clinicians and patients.
        </p>
      </div>

      {/* Ethical AI Boundary Statement */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-clinical-cyan/30 flex items-start gap-4 shadow-clinical-glow">
        <ShieldCheck className="w-8 h-8 text-clinical-cyan shrink-0 mt-1" />
        <div className="space-y-2">
          <h2 className="text-lg font-display font-bold text-white">Our Responsible Technology Charter</h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            At AriesXpert, artificial intelligence and 3D visual engines are strictly designed to <strong className="text-white">support clinicians and educate patients</strong>—never to replace qualified medical judgment. All clinical diagnoses, exercise prescriptions, and manual therapies are formulated and overseen by licensed Canadian Registered Physiotherapists.
          </p>
        </div>
      </div>

      {/* Technology Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-3xl bg-midnight-900/80 border border-slate-800 space-y-4 shadow-glass">
          <Sparkles className="w-8 h-8 text-clinical-cyan" />
          <h3 className="text-xl font-display font-bold text-white">3D Anatomical Telemetry</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            WebGL-powered interactive 3D visualizations allow patients to see their exact spinal level, ligament injury, or prosthetic joint implant, demystifying physical healing.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-midnight-900/80 border border-slate-800 space-y-4 shadow-glass">
          <Activity className="w-8 h-8 text-recovery-mint" />
          <h3 className="text-xl font-display font-bold text-white">Kinematic Guidance</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Joint angle calculators and real-time exercise adherence reminders ensure that home rehabilitation protocols are executed with correct posture and velocity.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-midnight-900/80 border border-slate-800 space-y-4 shadow-glass">
          <Globe className="w-8 h-8 text-clinical-teal" />
          <h3 className="text-xl font-display font-bold text-white">Direct Billing Automation</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Instant electronic claim submission to major Canadian insurance providers (Sun Life, Manulife, Canada Life, Green Shield) for effortless care access.
          </p>
        </div>
      </div>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}
