'use client';

import React from "react";
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Activity, Target, ArrowUpCircle, Microscope, Compass, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const recoveryStages = [
  {
    title: 'Assess',
    subtitle: '3D Biomechanical Screening',
    description: 'Proprietary computer vision algorithms analyze joint angles, kinetic load distribution, and spinal alignment to isolate pain origins.',
    icon: ShieldCheck,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    title: 'Plan',
    subtitle: 'Customized Recovery Roadmaps',
    description: 'NICE and CSP evidence-based rehabilitation protocols tailored to your specific pathology, work demands, and sport goals.',
    icon: Target,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
  {
    title: 'Track',
    subtitle: 'Real-time ROM Telemetry',
    description: 'Continuous objective tracking of range of motion milestones (0° extension in TKR, 120° shoulder abduction) at every clinical visit.',
    icon: Activity,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    title: 'Advance',
    subtitle: 'Functional Return to Sport',
    description: 'Structured progressive loading, eccentric tendon conditioning, and neuromuscular retraining to prevent reinjury.',
    icon: ArrowUpCircle,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
];

export default function AiPrecisionRecovery() {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6 flex flex-col items-center animate-reveal-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em] shadow-sm">
            <Microscope className="w-4 h-4" /> Aries AI™ Directorate UK
          </div>
          <h2 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Precision <span className="premium-gradient-text">Recovery</span> Engine
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
            Our clinical movement intelligence platform powers every stage of your rehabilitation journey, delivering objective biomechanical data for hospital-grade functional restoration.
          </p>
        </div>

        {/* 4 Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recoveryStages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <Card key={stage.title} className="premium-card p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl ${stage.bgColor} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${stage.color}`} />
                    </div>
                    <span className="text-xs font-mono font-bold text-muted-foreground">0{idx + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-headline text-foreground">{stage.title}</h3>
                    <p className="text-xs font-semibold text-primary">{stage.subtitle}</p>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* 3D Lab CTA Link */}
        <div className="text-center pt-10">
          <Link
            href="/movement-lab"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-card hover:bg-muted border border-border text-xs sm:text-sm font-semibold text-foreground transition-all shadow-sm"
            prefetch={false}
          >
            <Compass className="w-4 h-4 text-primary" />
            <span>Launch Interactive Kinematics &amp; Movement Lab</span>
            <ChevronRight className="w-4 h-4 text-primary" />
          </Link>
        </div>

      </div>
    </section>
  );
}
