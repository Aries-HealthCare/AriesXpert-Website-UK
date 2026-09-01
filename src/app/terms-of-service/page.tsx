import React from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Aries PhysioCare UK",
  description: "Terms and conditions for in-home and virtual physiotherapy services delivered by Aries HealthCare UK Ltd.",
};

export default function TermsOfServicePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-8">
      <div className="space-y-2">
        <h1 className="font-headline text-3xl sm:text-4xl font-bold text-foreground">Terms of Service</h1>
        <p className="text-xs text-muted-foreground font-mono">Last updated: August 2026 • Aries HealthCare UK Ltd</p>
      </div>

      <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
        <p>
          By booking an assessment or using the Aries PhysioCare platform, you agree to these Terms of Service. All physiotherapy is provided by independent, fully qualified Chartered Physiotherapists registered with the Health and Care Professions Council (HCPC).
        </p>

        <h2 className="font-headline text-lg font-bold text-foreground pt-4 border-t border-border">1. Clinical Care &amp; Consent</h2>
        <p>
          Before commencing physical assessment or manual treatment, your physiotherapist will explain the clinical findings, proposed interventions, and potential risks. You retain the right to withdraw consent at any time.
        </p>

        <h2 className="font-headline text-lg font-bold text-foreground pt-4 border-t border-border">2. Payment &amp; Private Insurance</h2>
        <p>
          Self-pay fees must be settled prior to or on the day of the appointment. For insurance direct billing (Bupa, AXA, Aviva, Vitality, WPA), you remain responsible for any unpaid balances resulting from policy excess, shortfalls, or expired authorization codes.
        </p>

        <h2 className="font-headline text-lg font-bold text-foreground pt-4 border-t border-border">3. Cancellation Policy</h2>
        <p>
          We request at least 24 hours&apos; notice for in-home appointment rescheduling or cancellations to enable our clinicians to reassign their travel routes.
        </p>
      </div>
    </div>
  );
}
