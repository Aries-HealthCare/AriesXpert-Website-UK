import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UK_EXPERTS } from "@/lib/uk-experts";
import { Card } from "@/components/ui/card";
import { ShieldCheck, Star, MapPin, Award, Stethoscope, ArrowRight } from "lucide-react";
import BookAppointmentButton from "@/components/book-appointment-button";

export const metadata = {
  title: "HCPC & CSP Registered Physiotherapists | Aries PhysioCare UK",
  description: "Meet our senior Chartered Physiotherapists across London, Manchester, Birmingham, and Edinburgh. Fully vetted with statutory HCPC registrations.",
};

export default function ExpertsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary font-bold uppercase tracking-wider">
          <Award className="w-4 h-4" />
          <span>Statutory UK Registry</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-headline font-black text-foreground tracking-tight">
          OUR CHARTERED PHYSIOTHERAPISTS
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Every clinician in our network is registered with the Health and Care Professions Council (HCPC) and holds postgraduate clinical specializations in spinal, orthopaedic, and neurological rehabilitation.
        </p>
      </div>

      {/* Clinicians Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {UK_EXPERTS.map((expert) => (
          <Card key={expert.id} className="premium-card flex flex-col justify-between overflow-hidden group">
            <div className="space-y-4">
              <div className="relative h-64 w-full overflow-hidden bg-muted">
                <Image
                  src={expert.imageUrl}
                  alt={expert.fullName}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full glassmorphic text-[10px] font-mono text-white">
                  {expert.experienceYears}+ Yrs Clinical Exp
                </div>

                <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full glassmorphic text-[10px] font-bold text-amber-400">
                  <Star className="w-3 h-3 fill-amber-400" />
                  <span>5.0</span>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-3">
                <div className="flex items-center justify-between">
                  <h2 className="font-headline font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                    {expert.fullName}
                  </h2>
                  <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                </div>

                <p className="text-xs font-mono font-bold text-primary">
                  {expert.credentials}
                </p>
                <p className="text-[11px] text-muted-foreground font-mono">
                  {expert.hcpcNumber} • {expert.cspNumber}
                </p>

                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 pt-1">
                  {expert.bio}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-border/40">
                  <span className="text-[10px] font-mono uppercase text-muted-foreground font-bold">Clinical Focus:</span>
                  <div className="flex flex-wrap gap-1">
                    {expert.clinicalFocus.map((focus, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted text-foreground">
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-muted-foreground pt-2">
                  <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Hub: {expert.primaryHub}</span>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 space-y-2">
              <BookAppointmentButton className="w-full text-xs font-bold">
                Book Assessment with {expert.fullName.split(" ")[0]}
              </BookAppointmentButton>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
