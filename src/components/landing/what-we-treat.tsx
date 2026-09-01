'use client';

import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowRight, Activity, Sparkles, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

function toSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

const treatmentAreas = [
  {
    title: "Conditions",
    basePath: "/conditions",
    items: [
      { name: "Sciatica & Lumbar Disc Prolapse" },
      { name: "ACL & Meniscus Ligament Trauma" },
      { name: "Rotator Cuff Impingement & Tears" },
      { name: "Knee Osteoarthritis (Grade 1-4)" },
      { name: "Cervical Spondylosis & Whiplash" },
      { name: "Frozen Shoulder (Adhesive Capsulitis)" },
      { name: "Carpal Tunnel Syndrome" },
      { name: "Plantar Fasciitis & Heel Spurs" },
      { name: "Post-Stroke Motor Relearning" },
      { name: "Parkinson's Mobility & Gait Retraining" },
      { name: "Post-Op Total Knee Replacement (TKR)" },
      { name: "Post-Op Total Hip Replacement (THR)" },
      { name: "NHS Step-Down Spinal Rehabilitation" },
      { name: "Concussion Rehabilitation (CCMI)" },
      { name: "Tennis & Golfer's Elbow" },
      { name: "Ankle Inversion Sprains" },
    ].map(item => ({ ...item, slug: toSlug(item.name) }))
  },
  {
    title: "Symptoms",
    basePath: "/conditions",
    items: [
      { name: "Radiating Nerve Pain (Radiculopathy)" },
      { name: "Severe Morning Joint Stiffness" },
      { name: "Acute Muscle Spasms & Tightness" },
      { name: "Joint Crepitus & Catching" },
      { name: "Peripheral Numbness & Tingling" },
      { name: "Loss of Balance & Unsteadiness" },
      { name: "Severe Lower Back Pain" },
      { name: "Knee Pain While Climbing Stairs" },
      { name: "Restricted Shoulder Range of Motion" },
      { name: "Post-Surgical Muscular Atrophy" },
      { name: "Cervicogenic Headaches & Dizziness" },
      { name: "Chronic Inflammation & Swelling" },
      { name: "Foot & Arch Burning Sensation" },
      { name: "Post-Discharge Hospital Fatigue" },
    ].map(item => ({ ...item, slug: toSlug(item.name) }))
  },
  {
    title: "Therapies Offered",
    basePath: "/services",
    items: [
      { name: "Orthopaedic Manual Therapy (Maitland / Mulligan)" },
      { name: "Western Medical Acupuncture / Dry Needling" },
      { name: "3D Kinematic Motion Analysis" },
      { name: "Passive & Active Joint Mobilization" },
      { name: "Supervised Progressive Resistance Loading" },
      { name: "Bobath Neurological Facilitation" },
      { name: "Myofascial Trigger Point Release" },
      { name: "TENS & Electro-Analgesia at Home" },
      { name: "Therapeutic Ultrasound at Home" },
      { name: "Post-Surgical 0-120° ROM Protocols" },
      { name: "Vestibular & Balance Conditioning" },
      { name: "Ergonomic Desk & Posture Retraining" },
      { name: "Pelvic Floor Muscle Training" },
    ].map(item => ({ ...item, slug: toSlug(item.name) }))
  }
];

export default function WhatWeTreat() {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden bg-background">
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.02)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 space-y-16">
        <div className="max-w-4xl mx-auto text-center space-y-6 flex flex-col items-center animate-reveal-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em] shadow-sm">
            <Activity className="w-4 h-4" /> Comprehensive Care Directory
          </div>
          <h2 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            What We <span className="premium-gradient-text">Treat &amp; Rehabilitate</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
            Evidence-informed physical therapy pathways combining hands-on clinical therapy, 3D anatomical biomechanics, and active motor retraining across the United Kingdom.
          </p>
        </div>

        {/* 3 Main Treatment Columns Matching India Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {treatmentAreas.map((area, index) => (
            <Card
              key={`${area.title}-${index}`}
              className={cn(
                "group premium-card transition-all duration-500 flex flex-col relative overflow-hidden h-[420px] rounded-3xl border border-border/60 hover:border-primary/40",
                "animate-reveal-up fill-mode-both"
              )}
            >
              {/* Internal Glow on Hover */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--primary),0.05)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <CardHeader className="text-center relative z-10 pt-10 pb-6">
                <CardTitle className="font-headline text-2xl md:text-3xl font-bold tracking-tight text-primary group-hover:text-primary/80 transition-colors">
                  {area.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-grow relative z-10 px-8 md:px-12 overflow-hidden">
                <ScrollArea className="h-full pr-4 custom-scrollbar">
                  <ul className="space-y-4">
                    {area.items.map((item) => (
                      <li key={`${area.title}-${item.slug}`} className="group/item">
                        <Link
                          href={`${area.basePath}/${item.slug}`}
                          prefetch={false}
                          className="flex items-center gap-4 py-1 transition-all duration-300"
                        >
                          <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 shadow-md group-hover/item:scale-110 transition-transform">
                            <ArrowRight className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-base font-bold text-foreground/80 group-hover/item:text-primary transition-colors leading-tight">
                            {item.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </CardContent>

              <div className="h-10 shrink-0" />
            </Card>
          ))}
        </div>

        {/* Global Registry Summary */}
        <div className="mt-20 text-center animate-reveal-up stagger-3">
          <p className="text-[10px] font-bold text-muted-foreground/80 uppercase tracking-[0.3em] mb-4 drop-shadow-sm">
            A Division of Aries HealthCare International Pvt Ltd
          </p>
          <div className="h-px w-24 bg-primary/20 mx-auto" />
        </div>
      </div>
    </section>
  );
}
