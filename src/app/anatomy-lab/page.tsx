"use client";

import React, { useState } from "react";
import { Sparkles, Layers, Activity, Calendar, ShieldAlert, RotateCw } from "lucide-react";
import { MasterCinematicCanvas } from "@/components/3d/MasterCinematicCanvas";
import { SpineViewer3D } from "@/components/3d/SpineViewer3D";
import { KneeViewer3D } from "@/components/3d/KneeViewer3D";
import { BookingModal } from '@/components/booking-modal';
import { BodyRegion, AnatomicalLayer } from "@/lib/types";

export default function AnatomyLabPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<BodyRegion | "">("spine");
  const [activeLayer, setActiveLayer] = useState<AnatomicalLayer>("skeletal");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-20">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-clinical-cyan">
          <Sparkles className="w-4 h-4" />
          <span className="uppercase font-bold tracking-wider">AriesXpert Anatomy Lab</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-display font-black text-white tracking-tight">
          THE DIGITAL MEDICAL MUSEUM
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Inspect human anatomy in interactive 3D WebGL. Peel back skeletal, muscular, articular, and nervous layers to understand the mechanical basis of pain.
        </p>
      </div>

      {/* Main Full-Body 3D Canvas */}
      <div className="w-full h-[640px] rounded-3xl bg-midnight-950 border border-slate-800 overflow-hidden shadow-2xl">
        <MasterCinematicCanvas
          selectedRegion={selectedRegion}
          onSelectRegion={(reg) => setSelectedRegion(reg)}
          activeLayer={activeLayer}
          className="w-full h-full"
        />
      </div>

      {/* Signature 3D Spine Experience */}
      <div id="spine" className="scroll-mt-28 space-y-4">
        <SpineViewer3D />
      </div>

      {/* Signature 3D Knee Experience */}
      <div id="knee" className="scroll-mt-28 space-y-4">
        <KneeViewer3D />
      </div>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialRegion={selectedRegion}
      />
    </div>
  );
}
