import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Aries PhysioCare UK",
  description: "UK-GDPR and Data Protection Act 2018 compliance policy for Aries HealthCare UK Ltd.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-8">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary font-bold">
          <Lock className="w-3.5 h-3.5" />
          <span>UK-GDPR &amp; DPA 2018 Standards</span>
        </div>
        <h1 className="font-headline text-3xl sm:text-4xl font-bold text-foreground">Privacy Policy</h1>
        <p className="text-xs text-muted-foreground font-mono">Last updated: August 2026 • Aries HealthCare UK Ltd</p>
      </div>

      <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
        <p>
          Aries HealthCare UK Ltd (&ldquo;Aries PhysioCare&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) is committed to protecting and respecting your personal and health data in compliance with the UK General Data Protection Regulation (UK-GDPR), the Data Protection Act 2018, and the Information Commissioner&apos;s Office (ICO) guidelines.
        </p>

        <h2 className="font-headline text-lg font-bold text-foreground pt-4 border-t border-border">1. Data We Collect</h2>
        <p>
          When you book an in-home or virtual physiotherapy session, we collect demographic information (name, contact phone, residential address, postcode) and special category health data (medical history, current pathology, range of motion measurements, treating physician notes, private health insurance policy numbers).
        </p>

        <h2 className="font-headline text-lg font-bold text-foreground pt-4 border-t border-border">2. Clinical &amp; Direct Billing Use</h2>
        <p>
          Your clinical health records are retained strictly to deliver professional physiotherapy care under the HCPC and CSP Standards of Conduct, Performance and Ethics. When authorized by you, diagnostic details are transmitted securely via Healthcode to your insurer (Bupa, AXA Health, Aviva, Vitality, WPA) for direct billing settlement.
        </p>

        <h2 className="font-headline text-lg font-bold text-foreground pt-4 border-t border-border">3. Data Security &amp; Retention</h2>
        <p>
          All electronic health records (EHR) and video telehealth streams are encrypted end-to-end using 256-bit AES encryption and hosted within secure UK data centres. In accordance with CSP guidelines, adult clinical records are securely retained for 8 years from the date of the last treatment.
        </p>
      </div>
    </div>
  );
}
