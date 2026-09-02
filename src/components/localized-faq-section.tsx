'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getLocalizedFaqs } from "@/lib/placeholder-data";
import { GeoPath } from "@/lib/types";
import { useMemo } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import SchemaMarkup from "./seo/schema-markup";

export interface FaqItem {
  id?: string;
  question: string;
  answer: string;
}

export interface LocalizedFaqSectionProps {
  geo?: GeoPath | null;
  className?: string;
  title?: string;
  description?: string;
  faqs?: FaqItem[];
}

export default function LocalizedFaqSection({ geo = null, className, title, description, faqs: propFaqs }: LocalizedFaqSectionProps) {
  const faqs = useMemo(() => propFaqs || getLocalizedFaqs(geo), [geo, propFaqs]);

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
    <section className={cn("py-12 md:py-20 bg-background relative overflow-hidden", className)}>
      <SchemaMarkup data={faqSchema} />
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.02)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl space-y-12">
        <div className="text-center space-y-4 animate-reveal-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em]">
            <HelpCircle className="w-4 h-4" /> Clear Clinical Answers
          </div>
          <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
            {title || <>Frequently Asked <span className="premium-gradient-text">Questions</span></>}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            {description || "Have questions about our in-home physical therapy protocols, private insurance direct billing, or treatment sessions? Here are helpful answers."}
          </p>
        </div>

        <div className="glassmorphic rounded-3xl p-6 md:p-10 border border-border/60">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.id || `faq-${index}`}
                value={faq.id || `faq-${index}`}
                className="border border-border/40 rounded-2xl px-6 py-2 data-[state=open]:bg-primary/[0.03] transition-colors"
              >
                <AccordionTrigger className="text-left font-headline font-bold text-base md:text-lg text-foreground hover:text-primary transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
