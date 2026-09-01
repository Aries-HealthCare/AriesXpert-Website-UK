'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BookAppointmentButton from '../book-appointment-button';
import { UK_EXPERTS } from "@/lib/uk-experts";
import {
  Award,
  Star,
  MapPin,
  ShieldCheck,
  ArrowRight,
  Stethoscope
} from "lucide-react";

export default function VettedExperts() {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.02)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 space-y-12">
        <div className="max-w-4xl mx-auto text-center space-y-6 flex flex-col items-center animate-reveal-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em] shadow-sm">
            <Award className="w-4 h-4" /> Top 1% UK Clinical Talent
          </div>
          <h2 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Vetted <span className="premium-gradient-text">Chartered Physiotherapists</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
            Every clinician in our UK network is registered with the Health and Care Professions Council (HCPC) and the Chartered Society of Physiotherapy (CSP).
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <div className="flex items-center justify-end gap-2 mb-4">
            <CarouselPrevious className="static translate-y-0 h-10 w-10 border-border" />
            <CarouselNext className="static translate-y-0 h-10 w-10 border-border" />
          </div>

          <CarouselContent className="-ml-4">
            {UK_EXPERTS.map((expert) => (
              <CarouselItem key={expert.id} className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4">
                <Card className="premium-card h-full flex flex-col justify-between overflow-hidden group">
                  <div className="space-y-4">
                    {/* Image */}
                    <div className="relative h-60 w-full overflow-hidden bg-muted">
                      <Image
                        src={expert.imageUrl}
                        alt={expert.fullName}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      
                      <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full glassmorphic text-[10px] font-mono text-white">
                        {expert.experienceYears}+ Yrs NHS &amp; Private
                      </div>

                      <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full glassmorphic text-[10px] font-bold text-amber-400">
                        <Star className="w-3 h-3 fill-amber-400" />
                        <span>5.0</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 pt-0 space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-headline font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                          {expert.fullName}
                        </h3>
                        <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                      </div>
                      
                      <p className="text-xs font-mono font-bold text-primary">
                        {expert.credentials}
                      </p>
                      <p className="text-[11px] text-muted-foreground leading-tight">
                        {expert.hcpcNumber} • {expert.cspNumber}
                      </p>

                      <div className="flex flex-wrap gap-1 pt-1">
                        {expert.specialties.slice(0, 2).map((spec, i) => (
                          <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted text-foreground/80">
                            {spec}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground pt-2 border-t border-border/40">
                        <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="truncate">{expert.citiesServed.slice(0, 3).join(", ")}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <BookAppointmentButton className="w-full text-xs">
                      Book with {expert.fullName.split(" ")[0]}
                    </BookAppointmentButton>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Explore All Link */}
        <div className="text-center pt-4">
          <Link
            href="/experts"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-card hover:bg-muted border border-border text-xs sm:text-sm font-semibold text-foreground transition-all shadow-sm"
            prefetch={false}
          >
            <span>Meet All Verified HCPC Chartered Physiotherapists</span>
            <ArrowRight className="w-4 h-4 text-primary" />
          </Link>
        </div>

      </div>
    </section>
  );
}
