import React from "react";
import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Accessibility Statement | Aries PhysioCare UK",
  description: "Accessibility commitment under the Equality Act 2010 and WCAG 2.1 AA standards for Aries HealthCare UK Ltd.",
};

export default function AccessibilityPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-8">
      <div className="space-y-2">
        <h1 className="font-headline text-3xl sm:text-4xl font-bold text-foreground">Accessibility Statement</h1>
        <p className="text-xs text-muted-foreground font-mono">Equality Act 2010 &amp; WCAG 2.1 AA Compliance</p>
      </div>

      <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
        <p>
          Aries HealthCare UK Ltd is committed to ensuring digital accessibility for all users, including individuals with visual, motor, auditory, and cognitive disabilities. Our digital platform is designed in accordance with Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
        </p>
        <p>
          For assistance with telephone booking or tailored accessibility support, please call our UK toll-free line at <strong className="text-foreground">0800 ARIES UK (0800 274 3785)</strong> or email <strong className="text-foreground">care.uk@ariesxpert.com</strong>.
        </p>
      </div>
    </div>
  );
}
