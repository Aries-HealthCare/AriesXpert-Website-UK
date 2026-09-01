'use client';

import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, PhoneCall } from "lucide-react";
import SchemaMarkup from "./seo/SchemaMarkup";

interface Faq {
  id: string;
  question: string;
  answer: string;
}

const UK_DEFAULT_FAQS: Faq[] = [
  {
    id: "f1",
    question: "Do I need a GP referral to see a private physiotherapist in the UK?",
    answer: "No. Physiotherapists in the UK are recognized first-contact autonomous healthcare practitioners with Direct Access. You do not legally require a GP referral to book an in-home or virtual assessment. However, some specific private health insurance policies (like certain corporate Bupa or AXA schemes) may ask for a quick GP open referral code before authorizing claim payment."
  },
  {
    id: "f2",
    question: "How does direct billing to Bupa, AXA Health, Aviva & Vitality work?",
    answer: "We are recognized private healthcare providers registered on Healthcode. When booking, provide your Insurer Name, Membership/Policy Number, and Pre-Authorization Code. We invoice your insurance company directly for every session, requiring £0 out-of-pocket payment from you (subject to any policy excess)."
  },
  {
    id: "f3",
    question: "Is home visit physiotherapy covered by private medical insurance?",
    answer: "Yes. Home visits conducted by our HCPC & CSP registered clinicians are billed under standard private physical therapy codes. All invoices contain your treating clinician's official HCPC registration number and CSP membership for full insurance compliance."
  },
  {
    id: "f4",
    question: "Are your physiotherapists HCPC registered and CSP chartered?",
    answer: "100% yes. Every physiotherapist in our UK network is registered with the Health and Care Professions Council (HCPC)—the statutory regulator for health professionals in the UK—and holds active membership with the Chartered Society of Physiotherapy (MCSP)."
  },
  {
    id: "f5",
    question: "What equipment do your physiotherapists bring for in-home sessions?",
    answer: "Our clinicians arrive equipped with portable diagnostic tools, goniometers for precise range of motion measurement, therapeutic resistance bands, mobi-cushions, manual therapy mobilization equipment, and gait-assistance belts."
  },
  {
    id: "f6",
    question: "How does post-op NHS step-down rehabilitation work?",
    answer: "If you have recently undergone joint replacement (TKR/THR) or spinal surgery at an NHS or private hospital and face long waiting times for outpatient physiotherapy, our clinicians can begin in-home rehabilitation within 24 to 48 hours of your hospital discharge."
  }
];

interface LocalizedFaqSectionProps {
  className?: string;
  title?: string;
  description?: string;
  faqs?: Faq[];
}

export default function LocalizedFaqSection({
  className = "",
  title = "Frequently Asked Questions",
  description = "Learn more about how Aries PhysioCare delivers Chartered Physiotherapy to your doorstep across the United Kingdom.",
  faqs = UK_DEFAULT_FAQS
}: LocalizedFaqSectionProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className={`py-12 md:py-20 bg-secondary/30 relative overflow-hidden ${className}`}>
      <SchemaMarkup data={faqSchema} />
      
      <div className="container mx-auto px-4 max-w-4xl space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em]">
            <HelpCircle className="w-4 h-4" /> UK Patient Knowledge
          </div>
          <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
            {title}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.id || index}
              value={`item-${index}`}
              className="premium-card border border-border/40 px-6 py-1 rounded-2xl overflow-hidden"
            >
              <AccordionTrigger className="text-left font-headline font-bold text-base md:text-lg text-foreground hover:text-primary hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5 pt-1">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Direct Helpline */}
        <div className="p-6 rounded-3xl premium-card text-center space-y-3">
          <p className="text-xs sm:text-sm text-foreground">
            Have a specific question about your private medical policy or NHS discharge plan?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold">
            <a
              href="tel:08002743785"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground hover:brightness-110 transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Toll-Free: 0800 ARIES UK (0800 274 3785)</span>
            </a>
            <a
              href="mailto:care.uk@ariesxpert.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-card border border-border text-foreground hover:bg-muted transition-all"
            >
              <span>Email: care.uk@ariesxpert.com</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
