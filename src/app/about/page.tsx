import React from "react";
import Link from "next/link";
import { ShieldCheck, Award, HeartPulse, Activity, CheckCircle2, Stethoscope, Users } from "lucide-react";
import BookAppointmentButton from "@/components/book-appointment-button";

export const metadata = {
  title: "About Us | Aries PhysioCare UK",
  description: "Bridging the gap between hospital and home across the United Kingdom. Delivering Chartered Physiotherapy with objective 3D telemetry.",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary font-bold uppercase">
          <Award className="w-4 h-4" />
          <span>Our Clinical Mission</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-headline font-black text-foreground tracking-tight">
          BRIDGING HOSPITAL &amp; HOME ACROSS THE UK
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed">
          Aries PhysioCare UK is dedicated to providing hospital-standard physical therapy directly in the patient&apos;s home, removing lengthy NHS outpatient waiting list delays and hospital transport strain.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl premium-card space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="font-headline font-bold text-lg text-foreground">HCPC &amp; CSP Governance</h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Every clinician holds statutory registration with the Health and Care Professions Council (HCPC) and membership with the Chartered Society of Physiotherapy (CSP).
          </p>
        </div>

        <div className="p-6 rounded-3xl premium-card space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
            <Activity className="w-6 h-6" />
          </div>
          <h2 className="font-headline font-bold text-lg text-foreground">3D Movement Intelligence</h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            We integrate objective computer-vision range of motion telemetry and kinematics analysis, bringing hospital biomechanics laboratories into your living room.
          </p>
        </div>

        <div className="p-6 rounded-3xl premium-card space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
            <HeartPulse className="w-6 h-6" />
          </div>
          <h2 className="font-headline font-bold text-lg text-foreground">Direct Insurer Billing</h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Electronic claim submission via Healthcode to Bupa, AXA Health, Aviva, Vitality, and WPA for seamless £0 out-of-pocket patient recovery.
          </p>
        </div>
      </div>

      <div className="p-8 rounded-3xl premium-card text-center space-y-4">
        <h2 className="font-headline font-bold text-2xl text-foreground">Ready to Start Your Recovery?</h2>
        <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto">
          Book an in-home assessment with a Chartered Physiotherapist in London, Manchester, Birmingham, Edinburgh, or surrounding regions today.
        </p>
        <BookAppointmentButton size="lg" className="font-bold px-8">
          Book In-Home Assessment
        </BookAppointmentButton>
      </div>
    </div>
  );
}
