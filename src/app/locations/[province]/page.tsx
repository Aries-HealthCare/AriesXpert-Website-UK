import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { UK_NATIONS, UK_CITY_HUBS } from "@/lib/uk-geo";
import { UKNations } from "@/lib/locations";
import {
  MapPin, ShieldCheck, CheckCircle2, PhoneCall, Clock,
  Stethoscope, ChevronRight, CalendarPlus, Search, Building2,
  Award, HeartPulse, Star, ArrowRight, Globe
} from "lucide-react";
import BookAppointmentButton from "@/components/book-appointment-button";
import GoogleReviews from "@/components/google-reviews";
import LocalizedFaqSection from "@/components/localized-faq-section";
import PricingPackagesSection from "@/components/landing/pricing-packages-section";

interface ProvincePageProps {
  params: Promise<{
    province: string;
  }>;
}

export const dynamicParams = true;
export const revalidate = 86400; // 24-hour ISR cache

export async function generateStaticParams() {
  return [
    { province: "england" },
    { province: "scotland" },
    { province: "wales" },
    { province: "northern-ireland" },
  ];
}

export async function generateMetadata({ params }: ProvincePageProps): Promise<Metadata> {
  const { province } = await params;
  const nation = UK_NATIONS.find((n) => n.slug === province.toLowerCase());

  if (!nation) {
    return { title: "Location Not Found | AriesXpert UK" };
  }

  const title = `In-Home Physiotherapy in ${nation.name} | HCPC & CSP Registered | AriesXpert UK`;
  const description = `Hospital-grade in-home and virtual chartered physiotherapy across ${nation.name}. Regulated by ${nation.regulatoryCollegeName}. Direct billing to Bupa, AXA Health, Aviva & Vitality. Same-day appointments.`;
  const canonicalUrl = `https://www.ariesxpert.co.uk/locations/${nation.slug}`;

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ProvinceLocationPage({ params }: ProvincePageProps) {
  const { province } = await params;
  const nation = UK_NATIONS.find((n) => n.slug === province.toLowerCase());
  const detailedNation = UKNations.find((n) => n.slug === province.toLowerCase());

  if (!nation) {
    notFound();
  }

  // Get all major metropolitan hubs in this nation
  const hubs = UK_CITY_HUBS.filter((h) => h.nation.toLowerCase() === nation.name.toLowerCase());

  // Collect all areas & subareas in this nation
  const allCitiesAndRegions = detailedNation ? detailedNation.cities : [];

  return (
    <div className="space-y-16 pb-20">
      {/* ── HERO SECTION ─────────────────────────────────────────────────── */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-background via-secondary/20 to-background overflow-hidden border-b border-border/40">
        <div className="container mx-auto px-4 max-w-6xl relative z-10 space-y-8">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-primary transition-colors">UK Directory</Link>
            <span>/</span>
            <span className="text-primary font-bold capitalize">{nation.name}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary font-bold uppercase">
                <Globe className="w-3.5 h-3.5" />
                <span>Constituent Country • {nation.code}</span>
              </div>

              <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                Physiotherapy in <br />
                <span className="premium-gradient-text">{nation.name}</span>
              </h1>

              <p className="text-base text-muted-foreground leading-relaxed">
                Hospital-grade chartered physical therapy delivered directly to your doorstep across {nation.name}. 
                Statutory regulated under {nation.regulatoryCollegeName}, providing same-day home visits and rapid private medical insurance clearing.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2 text-xs text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{nation.hpcFrameworkNote}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Direct Billing: Bupa, AXA Health, Aviva, Vitality &amp; WPA</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Freephone Support: 0800 274 3785 • 7 Days a Week</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <BookAppointmentButton size="lg" className="rounded-xl px-8 font-bold">
                  Book In-Home Visit in {nation.name}
                </BookAppointmentButton>
                <a
                  href="tel:08002743785"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary hover:bg-muted border border-border text-xs font-bold text-foreground transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-primary" />
                  <span>Call 0800 274 3785</span>
                </a>
              </div>
            </div>

            {/* Nation Feature Card */}
            <div className="p-8 rounded-3xl premium-card space-y-6 border border-border">
              <div className="flex items-center justify-between pb-4 border-b border-border/40">
                <div>
                  <span className="text-xs font-mono uppercase text-muted-foreground font-bold block">Country Directorate</span>
                  <h3 className="font-headline text-2xl font-bold text-foreground">{nation.name}</h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-xs font-mono text-primary font-bold border border-primary/20">
                  Capital: {nation.capital}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-foreground block">Statutory Registration</span>
                    <p className="text-xs text-muted-foreground">{nation.regulatoryCollegeName}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-foreground block">Rapid Mobile Dispatch</span>
                    <p className="text-xs text-muted-foreground">Same-day clinical appointments across metropolitan hubs</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-foreground block">Clinical Guarantee</span>
                    <p className="text-xs text-muted-foreground">Chartered Society of Physiotherapy (CSP) accredited practitioners</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border/40">
                <Link
                  href={`/physiotherapy-in-${nation.slug}`}
                  className="w-full py-3 rounded-xl bg-primary/10 hover:bg-primary/20 border border-primary/20 text-primary text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Explore {nation.name} Landing Page</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── METROPOLITAN HUBS ─────────────────────────────────────────────── */}
      {hubs.length > 0 && (
        <section className="container mx-auto px-4 max-w-6xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-headline text-3xl font-extrabold text-foreground">
              Primary <span className="premium-gradient-text">{nation.name} Metropolitan Hubs</span>
            </h2>
            <p className="text-sm text-muted-foreground">
              Direct access to mobile home care squads and specialized clinics in key urban centres.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hubs.map((hub) => (
              <div key={hub.id} className="p-6 rounded-3xl premium-card flex flex-col justify-between space-y-6 group hover:border-primary/40 transition-all">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-secondary text-[10px] font-mono text-muted-foreground font-bold">
                      {hub.inHomeLeadTime}
                    </span>
                  </div>

                  <h3 className="font-headline font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                    {hub.name}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                    {hub.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-border/40">
                    <span className="text-[10px] font-mono uppercase text-muted-foreground font-bold block">Key Postcodes:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {hub.keyPostcodes.slice(0, 5).map((pc) => (
                        <span key={pc} className="px-2 py-0.5 rounded-md bg-secondary text-[10px] font-mono text-foreground font-medium">
                          {pc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                  <Link
                    href={`/locations/${hub.slug}`}
                    className="text-xs font-bold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>View Hub Coverage</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── COMPREHENSIVE REGIONAL & BOROUGH DIRECTORY ────────────────────── */}
      <section className="container mx-auto px-4 max-w-6xl space-y-10">
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary border border-border text-xs font-mono text-foreground font-semibold">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            <span>Complete Administrative Coverage</span>
          </div>
          <h2 className="font-headline text-3xl font-extrabold text-foreground">
            All Regions, Boroughs &amp; Council Areas in {nation.name}
          </h2>
          <p className="text-sm text-muted-foreground">
            Explore dedicated home physiotherapy coverage for every borough, authority, and major settlement.
          </p>
        </div>

        <div className="space-y-8">
          {allCitiesAndRegions.map((region) => (
            <div key={region.slug} className="p-6 md:p-8 rounded-3xl premium-card space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border/40">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-headline text-lg md:text-xl font-bold text-foreground">
                      {region.name}
                    </h3>
                    <span className="text-xs font-mono text-muted-foreground">
                      {region.areas.length} Administrative Districts &amp; Hubs
                    </span>
                  </div>
                </div>

                <Link
                  href={`/physiotherapy-in-${region.slug}`}
                  className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                >
                  <span>Regional Page</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Area and Localities Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {region.areas.map((area) => (
                  <div key={area.slug} className="p-3.5 rounded-2xl bg-secondary/50 border border-border/60 hover:border-primary/40 transition-all space-y-2 group">
                    <Link
                      href={`/physiotherapy-in-${area.slug}`}
                      className="text-xs font-bold text-foreground group-hover:text-primary transition-colors block"
                    >
                      {area.name}
                    </Link>

                    {area.subAreas && area.subAreas.length > 0 && (
                      <div className="flex flex-wrap gap-1 pt-1">
                        {area.subAreas.slice(0, 4).map((sub) => (
                          <Link
                            key={sub.slug}
                            href={`/physiotherapy-in-${sub.slug}`}
                            className="px-1.5 py-0.5 rounded bg-background/80 hover:bg-primary/20 text-[10px] text-muted-foreground hover:text-primary transition-colors border border-border/40"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRICING & REVIEWS ─────────────────────────────────────────────── */}
      <PricingPackagesSection />
      <GoogleReviews locationName={nation.name} />

      {/* ── FAQS ──────────────────────────────────────────────────────────── */}
      <LocalizedFaqSection title={`Physiotherapy FAQs in ${nation.name}`} />
    </div>
  );
}
