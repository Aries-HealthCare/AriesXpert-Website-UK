import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  MapPin,
  Phone,
  MessageCircle,
  Star,
  Shield,
  Award,
  HeartPulse,
  Clock,
  CheckCircle2,
  Building2,
  Zap,
  Users,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import BookAppointmentButton from '@/components/book-appointment-button';
import { citySeoPages } from '@/lib/city-seo-data';
import PricingPackagesSection from '@/components/landing/pricing-packages-section';
import GoogleReviews from '@/components/google-reviews';

export const metadata: Metadata = {
  title: 'Best In-Home Physiotherapy Services in the UK | Aries PhysioCare UK',
  description:
    'Aries PhysioCare provides hospital-grade in-home and virtual chartered physiotherapy across London, Manchester, Birmingham, Edinburgh, Leeds & Glasgow. Registered with HCPC and CSP. Direct billing to Bupa, AXA Health, Aviva & Vitality.',
  keywords: [
    'physiotherapy in uk',
    'in-home physiotherapy uk',
    'chartered physiotherapist uk',
    'hcpc registered physiotherapist',
    'aries physiocare uk',
    'private health insurance physiotherapy',
    'physiotherapy london',
    'physiotherapy manchester',
    'physiotherapy birmingham',
  ],
  alternates: {
    canonical: 'https://uk.ariesphysiocare.com/physiotherapy-in-uk',
  },
};

const NATIONAL_STATS = [
  { label: 'Chartered Clinicians', value: '180+' },
  { label: 'UK Metro Hubs', value: '15+' },
  { label: 'Patient Satisfaction', value: '99.1%' },
  { label: 'Private Insurer Recognition', value: '100%' },
];

const UK_REGULATORY_BODIES = [
  { region: 'UK Nationwide', body: 'Health and Care Professions Council (HCPC)', hub: 'Statutory Regulator for all UK Physiotherapists' },
  { region: 'Professional Body', body: 'Chartered Society of Physiotherapy (CSP)', hub: 'Member of the Chartered Society of Physiotherapy' },
  { region: 'Scotland', body: 'NHS Scotland & CSP Scottish Board', hub: 'Edinburgh, Glasgow, Lothians & Strathclyde' },
  { region: 'England & Wales', body: 'CSP Regional Networks & Private Practice (Physio First)', hub: 'London, Manchester, Birmingham, Leeds, Bristol, Cardiff' },
];

export default function PhysiotherapyInUKPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_0%,transparent_70%)]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest">
              <Shield className="w-3.5 h-3.5 text-accent" /> Nationwide UK Clinical Network
            </div>
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Chartered In-Home <br className="hidden sm:inline" />
              <span className="text-accent">Physiotherapy Across the UK</span>
            </h1>
            <p className="text-white/85 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light">
              Hospital-grade chartered physical therapy delivered directly to your doorstep or virtually. HCPC &amp; CSP registered practitioners with instant direct billing to Bupa, AXA Health, Aviva, and Vitality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <BookAppointmentButton
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl text-base px-8 h-14 rounded-2xl font-bold"
              >
                Book In-Home Assessment
              </BookAppointmentButton>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary text-base px-8 h-14 rounded-2xl font-bold backdrop-blur-sm"
                asChild
              >
                <Link href="#cities">Explore UK Hubs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────────────────── */}
      <section className="py-8 bg-card border-b border-border/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {NATIONAL_STATS.map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="font-headline text-3xl md:text-4xl font-extrabold text-primary">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CITIES DIRECTORY ──────────────────────────────────────────────── */}
      <section id="cities" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-foreground">
              Our Primary <span className="premium-gradient-text">Metro Coverage Hubs</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Select your UK city to view local chartered clinical teams, same-day visit availability, and private insurance recognition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {citySeoPages.map((city) => (
              <Card key={city.citySlug} className="premium-card p-6 flex flex-col justify-between space-y-6 hover:border-primary/40 transition-all group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <Badge variant="outline" className="text-primary border-primary/20 text-[10px] font-bold uppercase">
                      {city.stateName}
                    </Badge>
                  </div>
                  <h3 className="font-headline font-bold text-2xl text-foreground group-hover:text-primary transition-colors">
                    {city.cityName}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                    {city.heroSubheading}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                  <Link href={`/${city.citySlug}`} className="text-xs font-bold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>View City Services</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── REGULATORY TRUST ──────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-muted/30 border-y border-border/40">
        <div className="container mx-auto px-4 md:px-6 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-foreground">
              HCPC &amp; CSP Regulated Chartered Clinicians
            </h2>
            <p className="text-muted-foreground text-base">
              Every practitioner in the Aries PhysioCare UK network is registered with the Health and Care Professions Council.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {UK_REGULATORY_BODIES.map((reg, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-card border border-border/50 space-y-2">
                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                  <Award className="w-4 h-4" />
                  <span>{reg.region}</span>
                </div>
                <h4 className="font-headline font-bold text-base text-foreground">{reg.body}</h4>
                <p className="text-xs text-muted-foreground">Scope: {reg.hub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING & REVIEWS ─────────────────────────────────────────────── */}
      <PricingPackagesSection />
      <GoogleReviews />
    </div>
  );
}
