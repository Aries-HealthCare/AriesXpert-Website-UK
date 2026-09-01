import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { UK_CITY_HUBS } from "@/lib/uk-geo";
import { MapPin, ShieldCheck, CheckCircle2, PhoneCall, Clock, Stethoscope, ChevronRight, CalendarPlus } from "lucide-react";
import BookAppointmentButton from "@/components/book-appointment-button";
import GoogleReviews from "@/components/google-reviews";
import LocalizedFaqSection from "@/components/localized-faq-section";

interface CityPageProps {
  params: Promise<{
    province: string;
    city: string;
  }>;
}

export async function generateStaticParams() {
  return UK_CITY_HUBS.map((hub) => {
    const parts = hub.slug.split("/");
    return {
      province: parts[0],
      city: parts[1],
    };
  });
}

export default async function CityLocationPage({ params }: CityPageProps) {
  const { province, city } = await params;
  const targetSlug = `${province}/${city}`;
  const hub = UK_CITY_HUBS.find((h) => h.slug === targetSlug);

  if (!hub) {
    notFound();
  }

  return (
    <div className="space-y-16 pb-20">
      {/* City Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-background via-secondary/20 to-background overflow-hidden border-b border-border/40">
        <div className="container mx-auto px-4 max-w-6xl relative z-10 space-y-8">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-muted-foreground">
            <Link href="/locations" className="hover:text-primary transition-colors">UK Directory</Link>
            <span>/</span>
            <span className="text-foreground capitalize">{hub.nation}</span>
            <span>/</span>
            <span className="text-primary font-bold">{hub.name}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary font-bold uppercase">
                <MapPin className="w-3.5 h-3.5" />
                <span>{hub.nation} Hub • {hub.inHomeLeadTime} Dispatch</span>
              </div>
              <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                {hub.name} <br />
                <span className="premium-gradient-text">Physiotherapy</span>
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed">
                {hub.description}
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2 text-xs text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>HCPC &amp; CSP Registered Chartered Physiotherapists</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Direct Billing: Bupa, AXA Health, Aviva &amp; Vitality</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <BookAppointmentButton size="lg" className="rounded-xl px-8 font-bold">
                  Book In-Home Assessment
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

            <div className="relative h-[380px] rounded-3xl overflow-hidden shadow-2xl border border-border">
              <Image
                src={hub.image}
                alt={hub.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glassmorphic text-white text-xs space-y-1">
                <strong className="block font-headline text-sm font-bold text-white">{hub.headline}</strong>
                <span className="text-white/80">Covering {hub.keyPostcodes.join(", ")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Postcodes & Hubs */}
      <section className="container mx-auto px-4 max-w-6xl space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl premium-card space-y-4">
            <h3 className="font-headline font-bold text-xl text-foreground">Key Coverage Neighbourhoods</h3>
            <div className="flex flex-wrap gap-2">
              {hub.keyHubs.map((h, i) => (
                <span key={i} className="px-3.5 py-1.5 rounded-xl bg-secondary border border-border text-xs font-medium text-foreground">
                  {h}
                </span>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-3xl premium-card space-y-4">
            <h3 className="font-headline font-bold text-xl text-foreground">Served UK Postcode Districts</h3>
            <div className="flex flex-wrap gap-2">
              {hub.keyPostcodes.map((pc, i) => (
                <span key={i} className="px-3.5 py-1.5 rounded-xl bg-primary/10 border border-primary/20 text-xs font-mono font-bold text-primary">
                  {pc}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <GoogleReviews locationName={hub.name} />

      {/* FAQ */}
      <LocalizedFaqSection title={`Frequently Asked Questions in ${hub.name}`} />
    </div>
  );
}
