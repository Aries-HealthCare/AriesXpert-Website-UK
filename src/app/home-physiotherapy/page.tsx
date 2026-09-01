import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, CheckCircle2, Home, Clock, Award, PhoneCall } from "lucide-react";
import BookAppointmentButton from "@/components/book-appointment-button";
import GoogleReviews from "@/components/google-reviews";
import LocalizedFaqSection from "@/components/localized-faq-section";

export const metadata = {
  title: "In-Home Physiotherapy UK | Home Visits by Chartered Physiotherapists",
  description: "Hospital-grade in-home physical therapy across London, Manchester, Birmingham, Edinburgh and the UK. Direct billing to Bupa, AXA Health, Aviva & Vitality.",
};

export default function HomePhysiotherapyPage() {
  return (
    <div className="space-y-16 pb-20">
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-background via-secondary/20 to-background border-b border-border/40">
        <div className="container mx-auto px-4 max-w-6xl space-y-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary font-bold uppercase">
                <Home className="w-3.5 h-3.5" />
                <span>1-on-1 In-Home Physiotherapy</span>
              </div>
              <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-[1.1]">
                Hospital-Grade Care <br />
                <span className="premium-gradient-text">In Your Living Room</span>
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed">
                Skip stressful clinic commutes and long NHS waiting times. Our HCPC Registered Chartered Physiotherapists bring specialized diagnostic equipment, manual mobilization tables, and progressive resistance gear directly to your residence.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2 text-xs text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Immediate dispatch across Greater London, Manchester, Midlands &amp; Scotland</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Direct billing via Healthcode: Bupa, AXA Health, Aviva &amp; Vitality</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <BookAppointmentButton size="lg" className="rounded-xl px-8 font-bold">
                  Book In-Home Assessment (£110)
                </BookAppointmentButton>
                <a
                  href="tel:08002743785"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary hover:bg-muted border border-border text-xs font-bold text-foreground transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-primary" />
                  <span>0800 ARIES UK</span>
                </a>
              </div>
            </div>

            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-border">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000"
                alt="In-Home Physiotherapy UK"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <GoogleReviews locationName="In-Home Care" />
      <LocalizedFaqSection title="In-Home Physiotherapy FAQ" />
    </div>
  );
}
