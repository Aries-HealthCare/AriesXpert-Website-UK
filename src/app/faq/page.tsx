import React from "react";
import LocalizedFaqSection from "@/components/localized-faq-section";

export const metadata = {
  title: "UK Physiotherapy & Insurance FAQ | Aries PhysioCare UK",
  description: "Frequently asked questions about private physiotherapy in the UK, Bupa & AXA direct billing, HCPC registration, and in-home recovery.",
};

export default function FaqPage() {
  return (
    <div className="py-8">
      <LocalizedFaqSection
        title="UK Healthcare & Direct Billing FAQ"
        description="Comprehensive answers regarding private health insurance claims, direct access rules, and in-home Chartered Physiotherapy logistics."
      />
    </div>
  );
}
