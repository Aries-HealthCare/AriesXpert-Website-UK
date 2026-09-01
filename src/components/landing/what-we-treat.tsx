'use client';

import React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Activity, ChevronRight, Compass } from "lucide-react";

function toSlug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

const treatCategories = [
  {
    title: "Conditions",
    items: [
      "Sciatica & Disc Prolapse", "ACL & Meniscus Trauma", "Rotator Cuff Impingement",
      "Knee Osteoarthritis", "Cervical Spondylosis & Whiplash", "Carpal Tunnel Syndrome",
      "Frozen Shoulder (Adhesive Capsulitis)", "Plantar Fasciitis", "Tennis & Golfer's Elbow", "Post-Stroke Rehabilitation",
      "Parkinson's Mobility", "Post-Op Knee Replacement", "Post-Op Hip Replacement", "Ankle Inversion Sprains"
    ]
  },
  {
    title: "Symptoms",
    items: [
      "Radiating Nerve Pain (Radiculopathy)", "Severe Joint Stiffness", "Loss of Balance & Falls",
      "Acute Muscle Spasms", "Peripheral Numbness & Tingling", "Restricted Range of Motion",
      "Post-Surgical Muscular Atrophy", "Cervicogenic Headaches", "Joint Crepitus & Catching"
    ]
  },
  {
    title: "Therapies Offered",
    items: [
      "Orthopaedic Manual Therapy (Maitland / Mulligan)", "Western Medical Acupuncture / Dry Needling", "Kinematic Movement Retraining",
      "Passive & Active Joint Mobilization", "Supervised Progressive Resistance Loading", "Bobath Neurological Facilitation",
      "Pelvic Floor Muscle Training", "Myofascial Trigger Point Release", "Post-Surgical 0-120° ROM Protocol"
    ]
  },
  {
    title: "Clinical Formats",
    items: [
      "In-Home Mobile Physiotherapy", "Virtual Encrypted Tele-Physiotherapy", "Bupa & AXA Direct Pre-Auth Care",
      "NHS Step-Down Immediate Discharge Rehab", "Post-Surgical Joint Replacement Recovery", "Seniors Home Environmental Safety Audit"
    ]
  }
];

export default function WhatWeTreat() {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.02)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 space-y-12">
        <div className="max-w-4xl mx-auto text-center space-y-6 flex flex-col items-center animate-reveal-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em] shadow-sm">
            <Activity className="w-4 h-4" /> Comprehensive UK Care Directory
          </div>
          <h2 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            What We <span className="premium-gradient-text">Treat &amp; Rehabilitate</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
            Evidence-informed physical therapy pathways combining hands-on clinical therapy, 3D anatomical biomechanics, and active motor retraining.
          </p>
        </div>

        {/* 4 Category Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {treatCategories.map((cat) => (
            <Card key={cat.title} className="premium-card p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-border/40">
                <h3 className="font-headline font-bold text-xl text-foreground">{cat.title}</h3>
                <span className="text-xs font-mono text-primary font-bold">{cat.items.length} Pathways</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <Link
                    key={item}
                    href={`/conditions/${toSlug(item)}`}
                    prefetch={false}
                    className="px-3.5 py-1.5 rounded-xl bg-muted/60 hover:bg-primary/10 border border-border hover:border-primary/40 text-xs font-medium text-foreground hover:text-primary transition-all flex items-center gap-1.5 group"
                  >
                    <span>{item}</span>
                    <ChevronRight className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Launch 3D Lab CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Link
            href="/conditions"
            className="w-full sm:w-auto px-7 py-3 rounded-2xl bg-card hover:bg-muted border border-border text-xs sm:text-sm font-semibold text-foreground transition-all text-center shadow-sm"
            prefetch={false}
          >
            Explore Complete Condition Directory (140+ Topics)
          </Link>
          <Link
            href="/anatomy-lab"
            className="w-full sm:w-auto px-7 py-3 rounded-2xl bg-primary text-primary-foreground text-xs sm:text-sm font-bold tracking-wider uppercase shadow-lg hover:brightness-110 transition-all text-center flex items-center justify-center gap-2"
            prefetch={false}
          >
            <Compass className="w-4 h-4" />
            <span>Launch 3D Anatomy Lab</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
