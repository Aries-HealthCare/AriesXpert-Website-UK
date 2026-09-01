'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  CheckCircle2, Sparkles, ShieldCheck, MapPin, Phone,
  ArrowRight, Search, LocateFixed, Loader2, CalendarCheck,
  Zap, Activity, HeartPulse,
} from 'lucide-react';
import { UK_CITY_HUBS } from '@/lib/uk-geo';
import { cn } from '@/lib/utils';

interface PricingPackage {
  key: string; title: string; days: number; badge: string;
  badgeClass: string; description: string; popular: boolean; features: string[];
}
interface PricingTier {
  label: string; basePriceGBP: number; cities: string[]; packages: PricingPackage[];
}

const PACKAGES: PricingPackage[] = [
  {
    key:'6-day', title:'6-Session Starter Plan', days:6, badge:'Foundation',
    badgeClass:'text-blue-500 border-blue-500/30 bg-blue-500/10', popular:false,
    description:'Ideal for acute injuries and post-surgical day-1 mobilization.',
    features:['6 × 45-min in-home visits','Initial comprehensive movement screen','Personalised HEP portal access','Direct billing to Bupa / AXA','WhatsApp clinical check-ins'],
  },
  {
    key:'12-day', title:'12-Session Recovery Pack', days:12, badge:'Recommended',
    badgeClass:'text-primary border-primary/30 bg-primary/10', popular:true,
    description:'Standard post-operative and musculoskeletal rehabilitation pathway.',
    features:['12 × 45-min in-home visits','Full orthopaedic & functional assessment','Manual therapy & dry needling','Progressive loading programme','Direct billing + monthly progress report','Unlimited clinician messaging'],
  },
  {
    key:'20-day', title:'20-Session Rehab Course', days:20, badge:'Comprehensive',
    badgeClass:'text-amber-500 border-amber-500/30 bg-amber-500/10', popular:false,
    description:'Complete recovery for complex orthopaedic or chronic pain conditions.',
    features:['20 × 45-min in-home visits','Detailed baseline-to-outcome tracking','Sports & movement performance testing','TENS/Ultrasound at home','Bi-weekly clinical reviews','Insurance advocacy support'],
  },
  {
    key:'30-day', title:'30-Session Total Recovery', days:30, badge:'Total Care',
    badgeClass:'text-emerald-500 border-emerald-500/30 bg-emerald-500/10', popular:false,
    description:'Maximum care for neurological, oncology, or elite sports recovery.',
    features:['30 × 45-min in-home visits','Dedicated HCPC-chartered physiotherapist','Gait, balance & kinematic analysis','Coordination with consultant / GP / OT','Outcome report for insurer / ACAS','Priority same-day availability'],
  },
];

const PRICING_TIERS: Record<string, PricingTier> = {
  london: { label:'London & Greater London', basePriceGBP:130, packages:PACKAGES,
    cities:['london','chelsea','kensington','mayfair','canary-wharf','richmond','wimbledon','hammersmith','islington','shoreditch','hackney','brixton'] },
  metro: { label:'Major Cities (Manchester / Birmingham / Edinburgh)', basePriceGBP:100, packages:PACKAGES,
    cities:['manchester','birmingham','edinburgh','glasgow','bristol','leeds','sheffield','liverpool','cardiff','belfast','bath','newcastle'] },
  regional: { label:'Regional UK (South / Midlands / North)', basePriceGBP:85, packages:PACKAGES,
    cities:['reading','oxford','cambridge','norwich','exeter','plymouth','york','durham','brighton','bournemouth','southampton','coventry'] },
};

function detectTier(city: string) {
  const c = city.toLowerCase().replace(/\s+/g,'-');
  for (const [key,tier] of Object.entries(PRICING_TIERS)) {
    if (tier.cities.some(tc => c.includes(tc)||tc.includes(c))) return key;
  }
  return 'metro';
}

const POPULAR = [
  {label:'Central London (W1 / SW1)',query:'london'},{label:'Manchester (Deansgate)',query:'manchester'},
  {label:'Birmingham (Edgbaston)',query:'birmingham'},{label:'Edinburgh (New Town)',query:'edinburgh'},
  {label:'Glasgow (West End)',query:'glasgow'},{label:'Bristol (Clifton)',query:'bristol'},
  {label:'Leeds (Headingley)',query:'leeds'},{label:'Cardiff (Pontcanna)',query:'cardiff'},
];

const ALL_LOCALITIES = UK_CITY_HUBS.map(h => ({
  label: h.name, query: h.id.replace('hub-',''), nation: h.nation
}));

export default function PricingPackagesSection({ initialLocationName, className }: { initialLocationName?: string; className?: string }) {
  const [tierKey, setTierKey] = useState(() => initialLocationName ? detectTier(initialLocationName) : 'metro');
  const [locationLabel, setLocationLabel] = useState(initialLocationName || 'UK Standard Rates (select city)');
  const [search, setSearch] = useState('');
  const [detecting, setDetecting] = useState(false);
  const [source, setSource] = useState<'default'|'ip'|'gps'|'search'>('default');

  const tier = PRICING_TIERS[tierKey] || PRICING_TIERS.metro;

  useEffect(() => {
    if (initialLocationName) { setTierKey(detectTier(initialLocationName)); setLocationLabel(initialLocationName); return; }
    try {
      const s = localStorage.getItem('user_city');
      if (s) { setTierKey(detectTier(s)); setLocationLabel(s); return; }
    } catch {}
    let cancelled = false;
    (async () => {
      try {
        const r = await fetch('https://ipapi.co/json/');
        if (!r.ok||cancelled) return;
        const d = await r.json();
        const city = d?.city||d?.region;
        if (city&&!cancelled) {
          setTierKey(detectTier(city)); setLocationLabel(`${city}, UK`); setSource('ip');
          try { localStorage.setItem('user_city', city); } catch {}
        }
      } catch {}
    })();
    return () => { cancelled = true; };
  }, [initialLocationName]);

  const handleGPS = useCallback(() => {
    if (!navigator.geolocation) return;
    setDetecting(true);
    navigator.geolocation.getCurrentPosition(async pos => {
      try {
        const r = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&format=json`);
        const d = await r.json();
        const city = d?.address?.city||d?.address?.town||'United Kingdom';
        const label = `${city}, UK`;
        setTierKey(detectTier(city)); setLocationLabel(label); setSource('gps');
        try { localStorage.setItem('user_city', city); } catch {}
      } catch {} finally { setDetecting(false); }
    }, () => setDetecting(false));
  }, []);

  const results = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (q.length < 2) return [];
    return ALL_LOCALITIES.filter(l => l.label.toLowerCase().includes(q)||l.nation.toLowerCase().includes(q)).slice(0,8);
  }, [search]);

  const cards = useMemo(() => {
    const base = tier.basePriceGBP;
    const discounts: Record<string,number> = {'6-day':0,'12-day':0.06,'20-day':0.10,'30-day':0.14};
    return tier.packages.map(pkg => {
      const rate = Math.round(base*(1-(discounts[pkg.key]||0)));
      const total = rate*pkg.days;
      const savings = base*pkg.days - total;
      return {...pkg, rate, total, savings};
    });
  }, [tier]);

  const selectLocality = (query: string, label: string) => {
    setTierKey(detectTier(query)); setLocationLabel(label); setSource('search'); setSearch('');
    try { localStorage.setItem('user_city', label); } catch {}
  };

  return (
    <section className={cn('py-16 md:py-24 relative overflow-hidden bg-background', className)}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(var(--primary),0.04)_0%,transparent_60%)] pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10 space-y-12">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-reveal-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em] shadow-sm">
            <Sparkles className="w-4 h-4" /> HCPC Chartered Physiotherapy Pricing
          </div>
          <h2 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Transparent <span className="premium-gradient-text">Recovery Plans</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
            Multi-session in-home physiotherapy packages with direct billing to Bupa, AXA Health, Aviva &amp; Vitality. Pricing adapts by UK region.
          </p>
        </div>

        {/* Location Detector */}
        <div className="max-w-3xl mx-auto p-5 md:p-6 rounded-3xl bg-card/60 border border-border shadow-2xl backdrop-blur-xl space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <MapPin className="w-4 h-4 text-primary" /> Location-Based Pricing
            </div>
            <Button variant="outline" size="sm" className="h-9 px-4 rounded-xl gap-2 text-xs font-bold border-primary/30 hover:bg-primary/10 text-primary" onClick={handleGPS} disabled={detecting}>
              {detecting ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <LocateFixed className="w-3.5 h-3.5" />}
              {detecting ? 'Detecting…' : 'Use My Location'}
            </Button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input type="text" placeholder="Search your city or postcode…" value={search} onChange={e => setSearch(e.target.value)}
              className="w-full h-11 pl-10 pr-4 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none text-sm text-foreground placeholder:text-muted-foreground" />
            {results.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 rounded-xl bg-card/95 border border-border shadow-2xl z-50 overflow-hidden">
                {results.map(r => (
                  <button key={r.query} className="w-full px-4 py-2.5 text-left text-xs hover:bg-primary/10 text-foreground flex items-center justify-between transition-colors"
                    onClick={() => selectLocality(r.query, r.label)}>
                    <span className="font-medium">{r.label}</span>
                    <span className="text-muted-foreground text-[10px]">{r.nation}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {POPULAR.map(loc => (
              <button key={loc.query} onClick={() => selectLocality(loc.query, loc.label)}
                className={cn('text-[11px] font-bold px-3 py-1.5 rounded-full border transition-all duration-200 cursor-pointer',
                  locationLabel === loc.label ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-secondary/50 text-muted-foreground border-border/50 hover:border-primary/40 hover:text-primary')}>
                {loc.label}
              </button>
            ))}
          </div>
        </div>

        {/* Active Tier Banner */}
        <div className="max-w-3xl mx-auto p-5 md:p-6 rounded-3xl bg-gradient-to-r from-primary/5 via-primary/10 to-rose-500/5 border border-primary/20 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
              <ShieldCheck className="w-4 h-4" />
              {source==='gps'?'GPS Verified Location:':source==='ip'?'Auto-Detected City:':'Active Location Rates:'}
            </div>
            <Badge className="bg-primary/10 text-primary border-primary/20 text-xs font-bold">{locationLabel}</Badge>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-lg">
              Includes HCPC-chartered physiotherapist in-home visit, comprehensive orthopaedic assessment, personalised rehabilitation programme, and clinical-grade equipment (TENS/Ultrasound/Dry Needling) at your home. Direct billing included.
            </p>
          </div>
          <div className="p-4 md:p-5 rounded-2xl bg-background/80 border border-primary/20 shrink-0 text-center w-full md:w-auto shadow-xl">
            <div className="text-[11px] font-black uppercase tracking-wider text-muted-foreground">Single Session Rate</div>
            <div className="text-3xl md:text-4xl font-black font-mono text-emerald-500 mt-0.5">
              £{tier.basePriceGBP}<span className="text-xs text-muted-foreground font-sans font-normal ml-1">/ session</span>
            </div>
            <div className="text-[10px] text-muted-foreground mt-1">No upfront registration fees</div>
          </div>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {cards.map(pkg => (
            <Card key={pkg.key} className={cn('relative flex flex-col justify-between overflow-hidden rounded-3xl border transition-all duration-300 group hover:-translate-y-2',
              pkg.popular ? 'bg-card border-primary shadow-2xl shadow-primary/10 ring-2 ring-primary/30'
              : 'bg-card/70 hover:bg-card border-border/80 hover:border-primary/40 shadow-xl')}>
              {pkg.popular && (
                <div className="w-full bg-gradient-to-r from-primary via-rose-500 to-pink-500 py-1.5 text-center text-[11px] font-black uppercase tracking-widest text-white shadow-md">
                  ★ Most Popular · Maximum Recovery
                </div>
              )}
              <CardContent className="p-6 md:p-7 flex flex-col justify-between h-full space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className={cn('text-[11px] font-black uppercase tracking-wider px-2.5 py-1', pkg.badgeClass)}>{pkg.badge}</Badge>
                    <Badge variant="outline" className="text-[10px] border-emerald-500/30 text-emerald-500 font-bold bg-emerald-500/10">Save £{pkg.savings.toLocaleString()}</Badge>
                  </div>
                  <div>
                    <h3 className="font-headline text-lg font-bold text-foreground group-hover:text-primary transition-colors">{pkg.title}</h3>
                    <p className="text-muted-foreground text-xs mt-1 leading-relaxed">{pkg.description}</p>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-secondary/40 border border-border/50 space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-muted-foreground">Rate / Session</span>
                    <div className="text-right">
                      <span className="text-2xl font-black font-mono text-foreground">£{pkg.rate}</span>
                      <span className="text-xs text-muted-foreground font-sans ml-1">/ session</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-border/40 text-xs">
                    <span className="text-muted-foreground">Total ({pkg.days} Sessions)</span>
                    <span className="text-base font-black text-emerald-500 font-mono">£{pkg.total.toLocaleString()}</span>
                  </div>
                </div>
                <div className="space-y-2.5 text-xs text-foreground/80">
                  {pkg.features.map((feat,i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
                <Button asChild className={cn('w-full h-12 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-300',
                  pkg.popular ? 'bg-gradient-to-r from-primary to-rose-600 hover:from-primary/90 hover:to-rose-500 text-white shadow-lg shadow-primary/25'
                  : 'bg-primary/10 hover:bg-primary text-primary hover:text-white border border-primary/20 hover:border-primary')}>
                  <Link href={`/book-assessment?location=${encodeURIComponent(locationLabel)}&sessions=${pkg.days}`}>
                    Book {pkg.days}-Session Plan <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto p-6 md:p-8 rounded-3xl bg-card/60 border border-border shadow-2xl backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-primary font-bold text-xs uppercase tracking-wider">
              <CalendarCheck className="w-4 h-4" /> Free Clinical Consultation
            </div>
            <h4 className="font-headline text-xl font-black text-foreground">Not Sure Which Plan Is Right for You?</h4>
            <p className="text-xs text-muted-foreground max-w-md">
              Speak with our HCPC-chartered Physiotherapists for a free tele-consultation and personalised recovery assessment. Direct billing to your insurer handled for you.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Button asChild variant="outline" className="h-12 px-6 border-border hover:bg-secondary text-foreground font-bold text-xs uppercase tracking-wider rounded-xl">
              <a href="tel:+448002743785" className="flex items-center gap-2"><Phone className="w-4 h-4 text-emerald-500" /> Call 0800 274 3785</a>
            </Button>
            <Button asChild className="h-12 px-8 bg-gradient-to-r from-primary to-rose-600 hover:from-primary/90 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-primary/20">
              <Link href={`/book-assessment?location=${encodeURIComponent(locationLabel)}`}>Book Free Assessment</Link>
            </Button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          {[{icon:ShieldCheck,label:'HCPC & CSP Chartered Physiotherapists'},
            {icon:Activity,label:'Direct Billing — Bupa, AXA, Aviva & Vitality'},
            {icon:Zap,label:'Same-Day Availability'},
            {icon:HeartPulse,label:'Evidence-Based Clinical Protocols'}].map(({icon:Icon,label}) => (
            <div key={label} className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary/60 border border-border/50 text-xs font-semibold text-muted-foreground">
              <Icon className="w-3.5 h-3.5 text-primary" /> {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
