'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import CountrySelector from "@/components/country-selector";
import BookAppointmentButton from "../book-appointment-button";
import { useRequestCallback } from "@/components/request-callback-provider";
import {
  Activity,
  MapPin,
  ChevronDown,
  ShieldCheck,
  Stethoscope,
  Compass,
  PhoneCall,
  Menu,
  X,
  Sparkles,
  ArrowRight
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { UK_CITY_HUBS, UK_NATIONS } from "@/lib/uk-geo";

export default function Header() {
  const pathname = usePathname();
  const { openModal } = useRequestCallback();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedHub, setSelectedHub] = useState<string>("Greater London");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "glassmorphic border-b border-border/60 shadow-md py-2.5"
          : "bg-background/80 backdrop-blur-md border-b border-border/30 py-3.5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Region Indicator */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-3 group" prefetch={false}>
            <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:scale-105 group-hover:bg-primary/20 transition-all shadow-sm">
              <Activity className="w-5 h-5 text-primary" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-headline font-black text-xl tracking-tight text-foreground">
                  ARIES<span className="premium-gradient-text">XPERT</span>
                </span>
                <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-500">
                  🇬🇧 UK
                </span>
              </div>
              <span className="text-[10px] font-medium tracking-wide text-muted-foreground -mt-0.5">
                HCPC Chartered Physical Rehabilitation
              </span>
            </div>
          </Link>

          {/* UK City Hub Selector */}
          <div className="hidden xl:flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-secondary/80 hover:bg-secondary border border-border text-xs font-semibold text-foreground transition-all cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="truncate max-w-[130px]">{selectedHub}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="premium-card p-2 w-72">
                <DropdownMenuLabel className="text-[11px] font-mono uppercase text-muted-foreground tracking-wider px-2 py-1">
                  Select UK Service Hub
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {UK_CITY_HUBS.map((hub) => (
                  <DropdownMenuItem
                    key={hub.id}
                    onClick={() => setSelectedHub(hub.name)}
                    asChild
                  >
                    <Link
                      href={`/locations/${hub.slug}`}
                      className="flex items-center justify-between px-2.5 py-2 text-xs rounded-lg cursor-pointer hover:bg-muted"
                      prefetch={false}
                    >
                      <div className="flex flex-col">
                        <span className="font-bold text-foreground">{hub.name}</span>
                        <span className="text-[10px] text-muted-foreground">{hub.nation} • {hub.inHomeLeadTime}</span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-primary">Explore</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold">
          {/* 3D Medical Labs Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex items-center gap-1.5 text-foreground/80 hover:text-primary transition-colors py-1 cursor-pointer"
              >
                <Compass className="w-3.5 h-3.5 text-primary" />
                <span>3D Medical Labs</span>
                <ChevronDown className="w-3 h-3 text-muted-foreground" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="premium-card p-2 w-64 space-y-1">
              <DropdownMenuItem asChild>
                <Link href="/anatomy-lab" className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-muted cursor-pointer" prefetch={false}>
                  <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-foreground block text-xs">3D Anatomy Lab</span>
                    <span className="text-[10px] text-muted-foreground">Interactive spine, knee, &amp; joint models</span>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/movement-lab" className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-muted cursor-pointer" prefetch={false}>
                  <div className="p-1.5 rounded-lg bg-accent/10 text-accent">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-foreground block text-xs">Kinematics Movement Lab</span>
                    <span className="text-[10px] text-muted-foreground">ROM angle telemetry simulator</span>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/surgery-and-rehabilitation" className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-muted cursor-pointer" prefetch={false}>
                  <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-foreground block text-xs">Surgery to Movement</span>
                    <span className="text-[10px] text-muted-foreground">Phased post-op recovery pathways</span>
                  </div>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex items-center gap-1.5 text-foreground/80 hover:text-primary transition-colors py-1 cursor-pointer"
              >
                <span>Services</span>
                <ChevronDown className="w-3 h-3 text-muted-foreground" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="premium-card p-2 w-64 space-y-1">
              <DropdownMenuItem asChild>
                <Link href="/services/in-home-physiotherapy" className="p-2 rounded-xl hover:bg-muted cursor-pointer block" prefetch={false}>
                  <span className="font-bold text-foreground block text-xs">🏡 In-Home Physiotherapy</span>
                  <span className="text-[10px] text-muted-foreground">1-on-1 Chartered PT at your home</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/virtual-physiotherapy" className="p-2 rounded-xl hover:bg-muted cursor-pointer block" prefetch={false}>
                  <span className="font-bold text-foreground block text-xs">💻 Virtual Tele-Physiotherapy</span>
                  <span className="text-[10px] text-muted-foreground">Encrypted HD video care nationwide</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/post-surgical-rehabilitation" className="p-2 rounded-xl hover:bg-muted cursor-pointer block" prefetch={false}>
                  <span className="font-bold text-foreground block text-xs">🏥 Post-Op &amp; NHS Step-Down</span>
                  <span className="text-[10px] text-muted-foreground">TKR, THR, and spinal recovery</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/sports-rehabilitation" className="p-2 rounded-xl hover:bg-muted cursor-pointer block" prefetch={false}>
                  <span className="font-bold text-foreground block text-xs">⚡ Sports &amp; Concussion</span>
                  <span className="text-[10px] text-muted-foreground">High-performance return-to-sport</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/conditions" className="text-foreground/80 hover:text-primary transition-colors" prefetch={false}>
            Conditions
          </Link>
          <Link href="/experts" className="text-foreground/80 hover:text-primary transition-colors" prefetch={false}>
            HCPC Clinicians
          </Link>
          <Link href="/locations" className="text-foreground/80 hover:text-primary transition-colors" prefetch={false}>
            UK Coverage
          </Link>
          <Link href="/resources" className="text-foreground/80 hover:text-primary transition-colors" prefetch={false}>
            Clinical Evidence
          </Link>
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2.5">
          {/* Direct Billing Badge */}
          <div className="hidden 2xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[11px] font-mono text-primary">
            <ShieldCheck className="w-3.5 h-3.5 text-primary" />
            <span>Bupa &amp; AXA Direct Billing</span>
          </div>

          <CountrySelector />
          <ThemeToggle />

          {/* Book Assessment Button */}
          <BookAppointmentButton size="sm" className="hidden sm:inline-flex text-xs font-bold px-4 py-2 rounded-xl shadow-md">
            Book Assessment
          </BookAppointmentButton>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-xl bg-secondary text-foreground hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Modal */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-background/95 backdrop-blur-2xl border-b border-border p-6 shadow-2xl space-y-5 animate-reveal-up">
          <div className="grid grid-cols-2 gap-2 text-xs font-bold">
            <Link
              href="/anatomy-lab"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-secondary border border-border flex items-center gap-2"
              prefetch={false}
            >
              <Compass className="w-4 h-4 text-primary" />
              <span>3D Anatomy Lab</span>
            </Link>
            <Link
              href="/movement-lab"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-secondary border border-border flex items-center gap-2"
              prefetch={false}
            >
              <Activity className="w-4 h-4 text-accent" />
              <span>Movement Lab</span>
            </Link>
          </div>

          <nav className="flex flex-col space-y-3 text-sm font-semibold pt-2 border-t border-border/40">
            <Link href="/services/in-home-physiotherapy" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors" prefetch={false}>
              🏡 In-Home Physiotherapy
            </Link>
            <Link href="/services/virtual-physiotherapy" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors" prefetch={false}>
              💻 Virtual Tele-Physiotherapy
            </Link>
            <Link href="/services/post-surgical-rehabilitation" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors" prefetch={false}>
              🏥 Post-Op &amp; NHS Step-Down
            </Link>
            <Link href="/conditions" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors" prefetch={false}>
              Conditions Directory
            </Link>
            <Link href="/experts" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors" prefetch={false}>
              HCPC Registered Clinicians
            </Link>
            <Link href="/locations" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors" prefetch={false}>
              UK Coverage &amp; Postcodes
            </Link>
            <Link href="/resources" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors" prefetch={false}>
              Clinical Evidence Library
            </Link>
          </nav>

          <div className="pt-4 border-t border-border/40 space-y-2">
            <BookAppointmentButton className="w-full text-xs font-bold py-3">
              Book In-Home Assessment
            </BookAppointmentButton>
            <Button
              variant="outline"
              onClick={() => {
                setMobileMenuOpen(false);
                openModal();
              }}
              className="w-full text-xs font-bold py-3 border-border"
            >
              Request Free 15-Min Callback
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
