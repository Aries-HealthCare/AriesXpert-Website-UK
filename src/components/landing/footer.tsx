import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  PhoneCall
} from "lucide-react";
import { services } from "@/lib/placeholder-data";

export default function Footer() {
  return (
    <footer className="relative bg-background border-t border-border/10 pt-16 pb-28 md:pb-12 overflow-hidden mt-16 text-muted-foreground">
      {/* Subtle Background Glow for Elegance */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-8 flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-3 group w-full" prefetch={false}>
              <div className="relative h-14 w-52 sm:h-16 sm:w-64 md:h-16 md:w-72 transition-all duration-300 group-hover:opacity-95">
                {/* Light Mode Logo */}
                <Image
                  src="/logo-light.png"
                  alt="AriesXpert UK"
                  fill
                  sizes="(max-width: 640px) 208px, 288px"
                  className="object-contain block dark:hidden object-center md:object-left"
                />
                {/* Dark Mode Logo */}
                <Image
                  src="/logo-dark.png"
                  alt="AriesXpert UK"
                  fill
                  sizes="(max-width: 640px) 208px, 288px"
                  className="object-contain hidden dark:block object-center md:object-left"
                />
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Bridging the gap between hospital and home across the United Kingdom. We deliver hospital-grade clinical excellence, evidence-based chartered physiotherapy, and advanced recovery protocols in the comfort of your home.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "https://facebook.com/ariesxpertuk", label: "Facebook" },
                { icon: Twitter, href: "https://twitter.com/ariesxpertuk", label: "Twitter" },
                { icon: Instagram, href: "https://instagram.com/ariesxpertuk", label: "Instagram" },
                { icon: Linkedin, href: "https://linkedin.com/company/ariesxpert-uk", label: "LinkedIn" },
                { icon: Youtube, href: "https://youtube.com/@ariesxpertuk", label: "YouTube" },
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

          {/* Services Section */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="font-headline font-bold text-xs text-primary uppercase tracking-[0.2em]">Our Services</h3>
            <ul className="space-y-3.5">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200"
                    prefetch={false}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/virtual-physiotherapy"
                  className="text-sm text-accent font-medium hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200"
                  prefetch={false}
                >
                  Virtual Tele-Physio
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm font-semibold text-primary hover:underline inline-block hover:translate-x-1 duration-200"
                  prefetch={false}
                >
                  All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="font-headline font-bold text-xs text-primary uppercase tracking-[0.2em]">Quick Links</h3>
            <ul className="space-y-3.5">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200" prefetch={false}>About AriesXpert UK</Link></li>
              <li><Link href="/therapist" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200" prefetch={false}>Our HCPC Therapists</Link></li>
              <li><Link href="/clinic" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200 font-semibold text-primary" prefetch={false}>Flagship Clinics (Canary Wharf)</Link></li>
              <li><Link href="/anatomy-lab" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200" prefetch={false}>3D Anatomy &amp; Movement Labs</Link></li>
              <li><Link href="/blogs" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200" prefetch={false}>Health Insights Blog</Link></li>
              <li><Link href="/work-with-us" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200" prefetch={false}>Work With Us</Link></li>
              <li><Link href="/portal" className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors inline-block hover:translate-x-1 duration-200" prefetch={false}>AriesXpert Provider Login</Link></li>
              <li><Link href="/work-with-us/for-physiotherapists" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200" prefetch={false}>Join as Physiotherapist</Link></li>
              <li><Link href="/free-tele-consultation" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200" prefetch={false}>Free Consultation</Link></li>
            </ul>
          </div>

          {/* Clinics & Support Section */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="font-headline font-bold text-xs text-primary uppercase tracking-[0.2em]">Hubs &amp; Support</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3.5 group">
                <div className="p-2.5 rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <span className="font-bold text-foreground block text-sm mb-0.5">London Flagship Hub</span>
                  Level 32, 1 Canada Square, Canary Wharf, London E14 5AA
                </p>
              </div>

              <div className="flex items-start gap-3.5 group">
                <div className="p-2.5 rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <span className="font-bold text-foreground block text-sm mb-0.5">Manchester Flagship Hub</span>
                  1 Hardman Square, Spinningfields, Manchester M3 3EB
                </p>
              </div>

              <div className="flex items-center gap-3.5 group">
                <div className="p-2.5 rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="text-xs text-muted-foreground flex flex-col font-medium">
                  <a href="tel:08002743785" className="hover:text-primary transition-colors font-bold text-sm text-foreground">
                    0800 274 3785 (Freephone)
                  </a>
                  <a href="https://wa.me/448002743785" className="hover:text-primary transition-colors text-xs text-emerald-500 font-bold">
                    WhatsApp: +44 800 274 3785
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 group">
                <div className="p-2.5 rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <a href="mailto:care.uk@ariesxpert.com" className="text-xs text-muted-foreground hover:text-primary transition-colors font-medium">
                  care.uk@ariesxpert.com
                </a>
              </div>

              <div className="pt-2 border-t border-border/20 text-[11px] text-muted-foreground">
                <strong className="text-foreground block mb-1">Direct Insurer Clearing:</strong>
                <span>Bupa • AXA Health • Aviva • Vitality • WPA (via Healthcode)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-border/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-[11px] text-muted-foreground font-medium text-center md:text-left leading-relaxed">
                AriesXpert is a registered healthcare trading brand of <span className="text-foreground font-bold">Aries HealthCare (UK) Ltd</span>. Regulated by HCPC and CSP clinical standards. Direct private medical insurer billing via Healthcode clearing.
              </p>
              <p className="text-[10px] text-muted-foreground/60 uppercase tracking-[0.2em] font-bold">
                &copy; {new Date().getFullYear()} Aries HealthCare (UK) Ltd. All Rights Reserved.
              </p>
            </div>

            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 shrink-0">
              <Link href="/privacy-policy" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Privacy Policy (GDPR)</Link>
              <Link href="/terms-of-service" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Terms of Service</Link>
              <Link href="/accessibility" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Accessibility</Link>
              <Link href="/sitemap.xml" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Sitemap</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
