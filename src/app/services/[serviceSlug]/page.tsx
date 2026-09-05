"use client";

import React, { useState, use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getServiceBySlug } from "@/lib/uk-data";
import { BookingModal } from '@/components/booking-modal';
import { Activity, CheckCircle2, Calendar, ShieldCheck, Home, Video, Building2, ChevronRight } from "lucide-react";

interface ServicePageProps {
  params: Promise<{
    serviceSlug: string;
  }>;
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const { serviceSlug } = use(params);
  const service = getServiceBySlug(serviceSlug);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  if (!service) {
    return notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Breadcrumb & Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link href="/services" className="hover:text-clinical-cyan transition-colors">Services</Link>
          <span>/</span>
          <span className="text-clinical-cyan font-bold">{service.title}</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-2 max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
              {service.title}
            </h1>
            <p className="text-sm sm:text-base text-clinical-teal font-medium">
              {service.tagline}
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

      {/* Clinical Overview & Objectives */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 space-y-6 p-8 rounded-3xl bg-midnight-900/80 border border-slate-800 shadow-glass">
          <h2 className="text-2xl font-display font-bold text-white">Clinical Approach & Methodology</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            {service.longDescription}
          </p>

          <div className="space-y-3 pt-4 border-t border-slate-800">
            <h3 className="text-xs font-mono uppercase text-clinical-cyan font-bold tracking-wider">
              Key Clinical Objectives
            </h3>
            <div className="space-y-2">
              {service.clinicalObjectives.map((obj) => (
                <div key={obj} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-recovery-mint shrink-0 mt-0.5" />
                  <span>{obj}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar: Target Conditions & Care Formats */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-midnight-900/80 border border-slate-800 space-y-4 shadow-glass">
            <h3 className="text-sm font-mono uppercase text-slate-400 font-bold">Frequently Treated Conditions</h3>
            <div className="flex flex-wrap gap-2">
              {service.targetConditions.map((cond) => (
                <span key={cond} className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300">
                  {cond}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-midnight-900/80 border border-slate-800 space-y-4 shadow-glass">
            <h3 className="text-sm font-mono uppercase text-slate-400 font-bold">Available Care Delivery Models</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
                <Home className="w-4 h-4 text-recovery-mint" />
                <span>In-Home Physiotherapy Visits across Major Metros</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
                <Video className="w-4 h-4 text-clinical-cyan" />
                <span>Secure UK Telehealth Video Consultations</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
                <Building2 className="w-4 h-4 text-clinical-teal" />
                <span>Partner Clinical Hub Facilities</span>
              </div>
            </div>
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
