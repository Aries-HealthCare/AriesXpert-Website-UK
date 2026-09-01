'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { MapPin, Globe, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { UK_CITY_HUBS } from "@/lib/uk-geo";

export default function Locations() {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.02)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 space-y-12">
        <div className="max-w-4xl mx-auto text-center space-y-6 flex flex-col items-center animate-reveal-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em] shadow-sm">
            <Globe className="w-4 h-4" /> Nationwide United Kingdom Network
          </div>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Our Service <span className="premium-gradient-text">Locations</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
            Standardized clinical excellence delivered directly to your home, flat, or virtually across England, Scotland, Wales, and Northern Ireland.
          </p>
        </div>

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
            {UK_CITY_HUBS.map((loc) => (
              <CarouselItem key={loc.id} className="sm:basis-1/2 lg:basis-1/4 pl-4">
                <Link href={`/locations/${loc.slug}`} prefetch={false} className="block h-full">
                  <Card className="premium-card h-full flex flex-col justify-between group overflow-hidden">
                    <div className="space-y-4">
                      {/* Photo */}
                      <div className="relative h-48 w-full overflow-hidden bg-muted">
                        <Image
                          src={loc.image}
                          alt={loc.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 25vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        
                        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full glassmorphic text-white text-xs font-bold">
                          <MapPin className="w-3.5 h-3.5 text-primary" />
                          <span>{loc.name}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 pt-0 space-y-3">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary">
                          {loc.nation} • {loc.inHomeLeadTime}
                        </span>
                        <h3 className="font-headline font-bold text-base text-foreground group-hover:text-primary transition-colors">
                          {loc.headline}
                        </h3>

                        <div className="space-y-1 pt-2 border-t border-border/40">
                          <span className="text-[10px] font-mono text-muted-foreground uppercase">Key Coverage Hubs:</span>
                          <div className="flex flex-wrap gap-1">
                            {loc.keyHubs.slice(0, 3).map((h, i) => (
                              <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted text-foreground/80">
                                {h}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 pt-0">
                      <div className="flex items-center justify-between text-xs font-bold text-primary">
                        <span>Explore Hub &amp; Postcodes</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* View All Locations */}
        <div className="text-center pt-4">
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-card hover:bg-muted border border-border text-xs sm:text-sm font-semibold text-foreground transition-all shadow-sm"
            prefetch={false}
          >
            <span>Explore All UK Nations &amp; Regional Postcodes</span>
            <ChevronRight className="w-4 h-4 text-primary" />
          </Link>
        </div>

      </div>
    </section>
  );
}
