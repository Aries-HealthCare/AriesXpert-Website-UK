'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Video, ShieldCheck, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface FreeConsultationBlockProps {
  title?: React.ReactNode;
  className?: string;
}

export default function FreeConsultationBlock({ title, className = "" }: FreeConsultationBlockProps) {
  return (
    <section className={`py-12 md:py-16 bg-background relative overflow-hidden ${className}`}>
      <div className="container mx-auto px-4">
        <Card className="premium-card overflow-hidden shadow-2xl rounded-[2.5rem] border-0">
          <div className="grid md:grid-cols-2 gap-0 items-stretch bg-gradient-to-br from-background to-primary/5 dark:from-card dark:to-primary/10">
            <div className="p-10 md:p-16 space-y-6 flex flex-col justify-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em] shadow-sm">
                  🇬🇧 UK Tele-Rehab Intake
                </div>
              </div>
              <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-foreground">
                {title || <>Free 15-Minute <br /> <span className="premium-gradient-text">Virtual Tele-Assessment</span></>}
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-light">
                Connect directly with a Chartered Physiotherapist (HCPC &amp; MCSP registered). Review your symptoms, verify your private health insurance pre-authorization (Bupa, AXA, Aviva), and plan your recovery.
              </p>
              
              <div className="space-y-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Direct triage with senior UK Chartered Physiotherapists</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Instant insurance direct billing check (Bupa, AXA, Aviva, Vitality &amp; WPA)</span>
                </div>
              </div>

              <div className="pt-4">
                <Button size="lg" className="h-16 px-10 text-lg font-semibold bg-primary text-primary-foreground hover:brightness-110 hover:-translate-y-1 w-full sm:w-auto rounded-xl shadow-xl healthcare-motion" asChild>
                  <Link href="/virtual-physiotherapy" prefetch={false}>
                    <Video className="mr-3 w-5 h-5" /> Claim Free Tele-Assessment
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block min-h-[450px]">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000"
                alt="UK Telehealth Physiotherapy Consultation"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent dark:from-card" />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
