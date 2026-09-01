'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  ArrowRight, 
  Search, 
  Check, 
  Clock, 
  Calendar,
  Zap,
  Activity,
  Calculator
} from 'lucide-react';
import BookAppointmentButton from '../book-appointment-button';
import { UK_INSURANCE_PROVIDERS } from '@/lib/uk-insurance';

const UK_PACKAGES = [
  {
    id: "initial-assessment",
    title: "Initial Comprehensive Assessment",
    duration: "60 Minutes",
    tagline: "Orthopaedic Diagnostics + Immediate Hands-On Treatment",
    priceGBP: 110,
    unit: "per assessment",
    highlight: false,
    badge: "Recommended First Step",
    features: [
      "1-on-1 diagnostic evaluation with Chartered Physiotherapist",
      "Full joint range of motion (ROM) & strength testing",
      "First hands-on manual therapy & pain-relief session",
      "Ergonomic home & workstation risk review",
      "Personalized digital exercise video prescription",
      "Direct billing to Bupa, AXA Health, Aviva & Vitality"
    ],
  },
  {
    id: "followup-treatment",
    title: "In-Home Follow-Up Rehabilitation",
    duration: "45–60 Minutes",
    tagline: "Hands-On Joint Mobilization & Progressive Loading",
    priceGBP: 85,
    unit: "per session",
    highlight: true,
    badge: "Most Common Recovery Path",
    features: [
      "1-on-1 joint mobilization & soft-tissue release",
      "Supervised progressive resistance loading",
      "Gait & balance rehabilitation training",
      "Pain modulation & modality application",
      "Objective recovery milestone updates",
      "Direct billing supported (Zero paperwork)"
    ],
  },
  {
    id: "virtual-telehealth",
    title: "Virtual Tele-Physiotherapy",
    duration: "45 Minutes",
    tagline: "Encrypted HD Video Care Across All UK Regions",
    priceGBP: 65,
    unit: "per session",
    highlight: false,
    badge: "UK-Wide Access",
    features: [
      "Computer vision movement screen & posture check",
      "Live guided exercise correction & cueing",
      "Self-mobilization & pain neuroscience education",
      "Zero travel or hospital commute time",
      "Official HCPC receipts for insurance reimbursement",
      "Flexible evening & weekend booking slots"
    ],
  },
  {
    id: "insurance-direct",
    title: "Private Medical Insurance Direct",
    duration: "60 Minutes",
    tagline: "Bupa, AXA Health, Aviva, Vitality & WPA Direct Settlement",
    priceGBP: 0,
    customPrice: "£0 Out-of-Pocket",
    unit: "with authorization code",
    highlight: false,
    badge: "100% Direct Insurer Settlement",
    features: [
      "Recognized providers for Bupa, AXA, Aviva, Vitality & WPA",
      "Direct electronic invoicing via Healthcode",
      "We handle all claims and diagnostic paperwork",
      "Treatment for sports injuries, spine disc pain & post-op",
      "NHS step-down rehabilitation without waiting lists",
      "Zero out-of-pocket payment for approved claims"
    ],
  }
];

export default function PricingPackagesSection() {
  const [selectedInsurer, setSelectedInsurer] = useState("bupa");
  const [coveragePercent, setCoveragePercent] = useState(100);
  const sessionCost = 110;

  const coveredAmount = Math.round((sessionCost * coveragePercent) / 100);
  const outOfPocket = sessionCost - coveredAmount;

  return (
    <section className="py-12 md:py-20 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6 flex flex-col items-center animate-reveal-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em] shadow-sm">
            <ShieldCheck className="w-4 h-4" /> Transparent UK Healthcare Pricing
          </div>
          <h2 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Clear Rates. <span className="premium-gradient-text">Direct Billing.</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
            All physiotherapy is delivered by HCPC &amp; CSP Registered Physiotherapists. Most private medical policies cover 100% of treatment costs.
          </p>
        </div>

        {/* Insurer Direct Billing Calculator Strip */}
        <div className="max-w-4xl mx-auto p-6 md:p-8 rounded-3xl premium-card space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-border/40">
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-primary" />
              <h3 className="font-headline font-bold text-lg text-foreground">Interactive UK Insurer Settlement Estimator</h3>
            </div>
            <span className="text-xs font-mono text-muted-foreground">Standard £110 In-Home Assessment</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-foreground">Policy Coverage Ratio:</span>
                  <span className="text-primary font-bold font-mono text-sm">{coveragePercent}%</span>
                </div>
                <input
                  type="range"
                  min={50}
                  max={100}
                  step={5}
                  value={coveragePercent}
                  onChange={(e) => setCoveragePercent(Number(e.target.value))}
                  className="w-full h-2 rounded-lg bg-muted accent-primary cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
                  <span>50%</span>
                  <span>80% (Cash Plans)</span>
                  <span>100% (Bupa / AXA / Aviva)</span>
                </div>
              </div>

              {/* Insurers Quick Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {UK_INSURANCE_PROVIDERS.slice(0, 6).map((ins) => (
                  <button
                    key={ins.code}
                    type="button"
                    onClick={() => {
                      setSelectedInsurer(ins.code);
                      setCoveragePercent(ins.typicalCoveragePercent);
                    }}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                      selectedInsurer === ins.code
                        ? "bg-primary text-primary-foreground font-bold shadow-sm"
                        : "bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {ins.name.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 text-center">
                <span className="text-xs text-muted-foreground block mb-1">Direct Billed to Insurer</span>
                <span className="text-2xl md:text-3xl font-black text-primary font-mono">£{coveredAmount} GBP</span>
              </div>
              <div className="p-4 rounded-2xl bg-card border border-border text-center">
                <span className="text-xs text-muted-foreground block mb-1">Estimated Patient Co-Pay</span>
                <span className="text-2xl md:text-3xl font-black text-foreground font-mono">£{outOfPocket} GBP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {UK_PACKAGES.map((pkg) => (
            <Card
              key={pkg.id}
              className={`premium-card p-7 flex flex-col justify-between relative ${
                pkg.highlight
                  ? "border-primary shadow-2xl shadow-primary/10 ring-2 ring-primary/20"
                  : ""
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-primary text-primary-foreground font-bold text-[10px] tracking-wider uppercase shadow-md">
                  {pkg.badge}
                </div>
              )}

              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold font-headline text-foreground leading-snug">{pkg.title}</h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">{pkg.tagline}</p>
                </div>

                {/* Price */}
                <div className="pt-2 pb-4 border-y border-border/40">
                  <div className="flex items-baseline gap-1">
                    {pkg.customPrice ? (
                      <span className="text-2xl font-black text-emerald-500 font-mono">{pkg.customPrice}</span>
                    ) : (
                      <>
                        <span className="text-3xl font-black text-foreground font-mono">£{pkg.priceGBP}</span>
                        <span className="text-xs text-muted-foreground font-mono">GBP</span>
                      </>
                    )}
                  </div>
                  <span className="text-[11px] text-muted-foreground font-mono block mt-0.5">{pkg.unit}</span>
                </div>

                {/* Feature List */}
                <ul className="space-y-2.5">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                      <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <span className="leading-relaxed text-foreground/90">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-border/40">
                <BookAppointmentButton className="w-full" size="default">
                  Book Assessment
                </BookAppointmentButton>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
