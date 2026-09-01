'use client';

import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useRequestCallback } from '@/components/request-callback-provider';
import BookAppointmentButton from "../book-appointment-button";
import { ShieldCheck, Sparkles, MapPin, ArrowRight } from "lucide-react";

const heroImages = PlaceHolderImages.filter(p => p.id.startsWith('hero-'));

export default function Hero() {
  const { openModal } = useRequestCallback();

  return (
    <section className="relative w-full h-[85vh] md:h-[95vh] min-h-[700px] overflow-hidden bg-black">
      {/* Background Slider */}
      <Carousel 
        className="w-full h-full" 
        opts={{ loop: true }}
      >
        <CarouselContent className="h-full">
          {heroImages.map((image, index) => (
            <CarouselItem key={image.id} className="h-full relative px-0">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  sizes="100vw"
                  quality={85}
                  className="object-cover object-center transition-transform duration-1000 scale-110"
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Main Content Overlay */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl text-left">
            {/* Professional Badges */}
            <div className="flex flex-wrap gap-3 mb-8 animate-in fade-in slide-in-from-left-8 duration-700 delay-100 fill-mode-both">
              <div className="glassmorphic py-1.5 px-4 rounded-full border border-white/20 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-white">
                  🇬🇧 HCPC &amp; CSP Registered Physiotherapy
                </span>
              </div>
              <div className="glassmorphic py-1.5 px-4 rounded-full border border-white/20 flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-primary-foreground" />
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-primary-foreground">
                  Direct Billing (Bupa, AXA Health, Aviva &amp; Vitality)
                </span>
              </div>
            </div>

            {/* Impressive Typography */}
            <h1 className="font-headline text-5xl sm:text-6xl md:text-8xl font-black text-white tracking-tight leading-[0.95] animate-in slide-in-from-left-12 duration-1000 delay-200 fill-mode-both drop-shadow-2xl">
              Advanced Recovery <br />
              <span className="premium-gradient-text">At Your Home.</span>
            </h1>
            
            <p className="mt-8 text-lg sm:text-xl md:text-2xl text-white/80 font-medium max-w-2xl leading-relaxed animate-in slide-in-from-left-8 duration-1000 delay-400 fill-mode-both drop-shadow">
              Request in-home registered physiotherapy and specialized tele-rehabilitation from the Aries clinical network across London, Manchester, Birmingham, Edinburgh, Bristol &amp; Belfast.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-5 animate-in slide-in-from-left-4 duration-1000 delay-600 fill-mode-both">
              <BookAppointmentButton size="lg" className="h-16 px-10 text-base font-black rounded-2xl premium-gradient text-white shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-none group">
                Book In-Home Assessment
                <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
              </BookAppointmentButton>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="h-16 px-10 text-base font-bold rounded-2xl bg-white/5 text-white border-white/20 hover:bg-white hover:text-black hover:border-white backdrop-blur-xl transition-all duration-300"
                onClick={() => openModal()}
              >
                Request Free 15-Min Call
              </Button>
            </div>

            {/* Key Trust Stats */}
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-8 md:gap-16 animate-in fade-in duration-1000 delay-800 fill-mode-both">
              <div>
                <p className="text-3xl md:text-4xl font-black text-white">50+</p>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/50">HCPC / CSP PTs</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-black text-white">15,000+</p>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/50">UK Patients</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-black text-white">&lt; 60 Mins</p>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/50">In-Home Arrival</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-black text-emerald-400">100%</p>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/50">Direct Access (No GP Referral)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
