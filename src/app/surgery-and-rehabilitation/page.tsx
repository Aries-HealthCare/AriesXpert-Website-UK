"use client";

import React, { useState } from "react";
import { ShieldCheck, Calendar, CheckCircle2 } from "lucide-react";
import { SurgeryTimeline3D } from "@/components/3d/SurgeryTimeline3D";
import { BookingModal } from '@/components/booking-modal';

export default function SurgeryAndRehabilitationPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-aries-coral">
          <ShieldCheck className="w-4 h-4" />
          <span className="uppercase font-bold tracking-wider">Orthopaedic Surgery & Rehabilitation</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
          FROM SURGERY TO RECOVERY
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Your surgical team performs the critical procedure. Your AriesXpert physiotherapy team guides your daily recovery from day one to unrestricted active living across Canada.
        </p>
      </div>

      <SurgeryTimeline3D onOpenBooking={() => setBookingModalOpen(true)} />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}
