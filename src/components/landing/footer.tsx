'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  PhoneCall, 
  Mail,
  MapPin,
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Youtube
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/20 text-muted-foreground pt-16 pb-28 lg:pb-12 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-border/20">
          
          {/* Brand Vision */}
          <div className="lg:col-span-4 space-y-6 flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-3 group w-full" prefetch={false}>
              <div className="relative h-14 w-52 sm:h-16 sm:w-64 md:h-16 md:w-72 transition-all duration-300 group-hover:opacity-95">
                {/* Light Mode Logo */}
                <Image
                  src="/logo-light.png"
                  alt="Aries PhysioCare"
                  fill
                  sizes="(max-width: 640px) 208px, 288px"
                  className="object-contain block dark:hidden object-center md:object-left"
                />
                {/* Dark Mode Logo */}
                <Image
                  src="/logo-dark.png"
                  alt="Aries PhysioCare"
                  fill
                  sizes="(max-width: 640px) 208px, 288px"
                  className="object-contain hidden dark:block object-center md:object-left"
                />
              </div>
            </Link>

            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Bridging the gap between hospital and home across the United Kingdom. We deliver Chartered Physiotherapy, 3D kinematic biomechanical analysis, and direct private medical insurance settlement.
            </p>

            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "https://facebook.com/ariesxpertuk", label: "Facebook" },
                { icon: Twitter, href: "https://twitter.com/ariesxpertuk", label: "Twitter" },
                { icon: Instagram, href: "https://instagram.com/ariesxpertuk", label: "Instagram" },
                { icon: Linkedin, href: "https://linkedin.com/company/ariesxpert-uk", label: "LinkedIn" },
                { icon: Youtube, href: "https://youtube.com/@ariesphysiocare", label: "YouTube" },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-secondary/30 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all duration-300 shadow-sm"
                  aria-label={social.label}
                  prefetch={false}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] bg-secondary border border-border text-foreground">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                <span>HCPC &amp; CSP Registered</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] bg-secondary border border-border text-foreground">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Healthcode Direct Settlement</span>
              </span>
            </div>
          </div>

          {/* 3D Labs & Services */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="font-headline font-bold text-xs text-primary uppercase tracking-[0.2em]">3D Labs &amp; Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/anatomy-lab" className="text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200" prefetch={false}>3D Anatomy Lab</Link></li>
              <li><Link href="/movement-lab" className="text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200" prefetch={false}>Kinematics Movement Lab</Link></li>
              <li><Link href="/surgery-and-rehabilitation" className="text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200" prefetch={false}>Surgery to Movement</Link></li>
              <li><Link href="/services/in-home-physiotherapy" className="text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200" prefetch={false}>In-Home Physiotherapy</Link></li>
              <li><Link href="/services/virtual-physiotherapy" className="text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200" prefetch={false}>Virtual Tele-Physio</Link></li>
              <li><Link href="/services/post-surgical-rehabilitation" className="text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200" prefetch={false}>Post-Op &amp; NHS Step-Down</Link></li>
              <li><Link href="/services/sports-rehabilitation" className="text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200" prefetch={false}>Sports &amp; Concussion</Link></li>
            </ul>
          </div>

          {/* Coverage & Direct Billing */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="font-headline font-bold text-xs text-primary uppercase tracking-[0.2em]">Coverage &amp; Insurers</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/locations/england/london" className="text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200" prefetch={false}>Greater London</Link></li>
              <li><Link href="/locations/england/manchester" className="text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200" prefetch={false}>Manchester &amp; North West</Link></li>
              <li><Link href="/locations/england/birmingham" className="text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200" prefetch={false}>Birmingham &amp; Midlands</Link></li>
              <li><Link href="/locations/scotland/edinburgh" className="text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200" prefetch={false}>Edinburgh &amp; Scotland</Link></li>
              <li><Link href="/locations" className="text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200" prefetch={false}>All UK Service Hubs</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200" prefetch={false}>Bupa / AXA Direct Billing</Link></li>
              <li><Link href="/conditions" className="text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200" prefetch={false}>Clinical Conditions</Link></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="font-headline font-bold text-xs text-primary uppercase tracking-[0.2em]">Clinical Coordination</h3>
            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-secondary/40 border border-border">
                <PhoneCall className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground block text-sm">UK Freephone Helpline:</strong>
                  <a href="tel:+448002743785" className="hover:text-primary transition-colors font-bold text-foreground">
                    0800-ARIES-UK (0800 274 3785)
                  </a>
                  <p className="text-[10px] text-muted-foreground mt-0.5">Mon–Sat: 7:00 AM – 9:00 PM GMT</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-secondary/40 border border-border">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:care.uk@ariesxpert.com" className="hover:text-primary transition-colors font-medium text-foreground">
                  care.uk@ariesxpert.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory Statement & Insurer Badges */}
        <div className="space-y-4 text-xs text-muted-foreground font-light leading-relaxed">
          <p>
            <strong className="text-foreground font-medium">UK Regulatory Compliance:</strong> AriesXpert connects patients with Chartered Physiotherapists registered with the Health and Care Professions Council (HCPC) and members of the Chartered Society of Physiotherapy (CSP). Direct insurer billing supported via Healthcode clearing.
          </p>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-border/20 text-[11px] font-mono">
            <span>&copy; {new Date().getFullYear()} Aries HealthCare UK Directorate. All Rights Reserved.</span>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="hover:text-primary transition-colors" prefetch={false}>Privacy Policy (GDPR)</Link>
              <span>•</span>
              <Link href="/terms-of-service" className="hover:text-primary transition-colors" prefetch={false}>Terms of Service</Link>
              <span>•</span>
              <Link href="/accessibility" className="hover:text-primary transition-colors" prefetch={false}>Accessibility Standards</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
