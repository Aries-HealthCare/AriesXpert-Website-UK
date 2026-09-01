import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Video, ShieldCheck, CheckCircle2, Clock, Award, PhoneCall } from "lucide-react";
import BookAppointmentButton from "@/components/book-appointment-button";
import GoogleReviews from "@/components/google-reviews";
import LocalizedFaqSection from "@/components/localized-faq-section";

export const metadata = {
  title: "Virtual Tele-Physiotherapy UK | Encrypted Online Physical Therapy",
  description: "Connect with a Chartered Physiotherapist from anywhere in the UK via secure HD video. Objective computer vision movement screens and exercise prescription.",
};

export default function VirtualPhysiotherapyPage() {
  return (
    <div className="space-y-16 pb-20">
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-background via-secondary/20 to-background border-b border-border/40">
        <div className="container mx-auto px-4 max-w-6xl space-y-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary font-bold uppercase">
                <Video className="w-3.5 h-3.5" />
                <span>UK-Wide Virtual Tele-Rehab</span>
              </div>
              <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-[1.1]">
                Specialist Tele-Physio <br />
                <span className="premium-gradient-text">Wherever You Are</span>
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed">
                Connect 1-on-1 with a Chartered Physiotherapist over our encrypted, UK-GDPR compliant HD telehealth platform. Experience live kinematics movement analysis, posture correction, and progressive exercise prescription.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2 text-xs text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Available across England, Scotland, Wales &amp; Northern Ireland</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Eligible for private health insurance reimbursement (£65 / session)</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <BookAppointmentButton size="lg" className="rounded-xl px-8 font-bold">
                  Book Virtual Session (£65)
                </BookAppointmentButton>
              </div>
            </div>

            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-border">
              <Image
                src="https://images.unsplash.com/photo-1594824813501-4835691c28c8?auto=format&fit=crop&q=80&w=1000"
                alt="Virtual Tele-Physiotherapy UK"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <GoogleReviews locationName="Virtual Care" />
      <LocalizedFaqSection title="Virtual Tele-Physiotherapy FAQ" />
    </div>
  );
}
