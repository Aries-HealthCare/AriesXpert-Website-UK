"use client";

import React, { useState } from "react";
import { Compass, Activity, Calendar } from "lucide-react";
import { KinematicsMovement3D } from "@/components/3d/KinematicsMovement3D";
import { BookingModal } from '@/components/booking-modal';

export default function MovementLabPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-recovery-mint">
          <Compass className="w-4 h-4" />
          <span className="uppercase font-bold tracking-wider">AriesXpert Biomechanics</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
          THE KINEMATICS & MOVEMENT LAB
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Inspect walking gait mechanics, squat joint angles, and kinetic force distribution in 3D. Learn how neuromuscular compensations cause wear-and-tear and how clinical movement analysis protects your longevity.
        </p>
      </div>

      <KinematicsMovement3D onOpenBooking={() => setBookingModalOpen(true)} />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}
