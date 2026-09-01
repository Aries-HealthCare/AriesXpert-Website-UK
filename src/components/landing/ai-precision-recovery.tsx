'use client';

import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Activity, Target, ArrowUpCircle, Sparkles, ChevronRight, Zap, Microscope, Compass } from 'lucide-react';

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
    <section className="py-12 md:py-24 relative overflow-hidden bg-background">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 space-y-16">
        <div className="max-w-4xl mx-auto text-center space-y-6 flex flex-col items-center animate-reveal-up">
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
              <Card key={stage.title} className="premium-card p-6 flex flex-col justify-between space-y-4 hover:border-primary/30 transition-all duration-300">
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

        {/* Highlighted 3D Medical Lab Insight Block Matching India */}
        <div className="max-w-5xl mx-auto animate-reveal-up fill-mode-both transition-all duration-1000 delay-500">
          <Card className="premium-card p-10 md:p-16 border-primary/20 bg-gradient-to-br from-white to-primary/5 dark:from-card dark:to-primary/10 rounded-[2.5rem] relative overflow-hidden group/insight shadow-2xl">
            <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none group-hover/insight:opacity-[0.06] transition-opacity duration-700">
              <Zap className="w-80 h-80 text-primary" />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-[0.2em] shadow-sm">
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" /> Interactive 3D Anatomy &amp; Kinematics
                  </span>
                </div>
                <div className="space-y-4">
                  <h3 className="font-headline text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-foreground">
                    Experience Your <br />
                    <span className="premium-gradient-text">3D Body-Map Insight</span>
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                    Go beyond general symptom tracking. Our 3D Anatomy &amp; Kinematics Lab creates an interactive visualization of your joints, muscles, and NHS/private surgical recovery pathways across the UK.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/60">
                  <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary" /> 3D Joint Visualization</span>
                  <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary" /> Evidence-Based Protocol Summary</span>
                </div>
              </div>

              <div className="shrink-0">
                <Button asChild size="lg" className="h-16 px-10 text-lg font-semibold rounded-2xl neon-primary-border bg-primary text-white hover:bg-primary/90 shadow-2xl healthcare-motion transform hover:-translate-y-1">
                  <Link href="/anatomy-lab" className="flex items-center" prefetch={false}>
                    <Compass className="mr-3 w-5 h-5" /> Launch 3D Lab <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>

      </div>
    </section>
  );
}
