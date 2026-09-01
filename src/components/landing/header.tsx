'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { 
  Menu, 
  ChevronDown, 
  Plus, 
  Minus, 
  MapPin, 
  Video, 
  Users, 
  Stethoscope, 
  Compass, 
  Activity, 
  ShieldCheck, 
  HeartPulse 
} from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import BookAppointmentButton from "../book-appointment-button";
import { usePathname } from "next/navigation";
import { UK_CITY_HUBS } from "@/lib/uk-geo";
import { Button } from "@/components/ui/button";

const staticServices = [
  { id: "s1", name: "In-Home Chartered Physiotherapy", slug: "in-home-physiotherapy" },
  { id: "s2", name: "Virtual Tele-Physiotherapy", slug: "virtual-physiotherapy" },
  { id: "s3", name: "Post-Op & NHS Step-Down Rehabilitation", slug: "post-surgical-rehabilitation" },
  { id: "s4", name: "Sports Injury & Concussion Management", slug: "sports-rehabilitation" },
  { id: "s5", name: "Neurological & Stroke Recovery", slug: "neurological-rehabilitation" },
  { id: "s6", name: "Elderly Fall Prevention & Mobility", slug: "geriatric-physiotherapy" },
];

function LocationSelector({ current }: { current: string | null }) {
  const [selectedCity, setSelectedCity] = useState(current || "Greater London");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-9 px-3 gap-2 rounded-xl glassmorphic border-border/40 text-xs font-semibold text-foreground hover:text-primary">
          <MapPin className="h-3.5 w-3.5 text-primary" />
          <span>{selectedCity}</span>
          <ChevronDown className="h-3 w-3 opacity-60" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 glassmorphic p-2" align="start">
        <DropdownMenuLabel className="text-[11px] font-mono uppercase text-muted-foreground tracking-wider">
          United Kingdom Hubs
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {UK_CITY_HUBS.map((hub) => (
          <DropdownMenuItem
            key={hub.id}
            onClick={() => setSelectedCity(hub.name)}
            asChild
          >
            <Link href={`/locations/${hub.slug}`} className="flex items-center justify-between py-2 text-xs">
              <span className="font-medium text-foreground">{hub.name}</span>
              <span className="text-[10px] font-mono text-primary font-bold">{hub.nation}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-xl border-b border-border/10 shadow-sm transition-all duration-300">
      <div className="w-full max-w-7xl 2xl:max-w-[1720px] mx-auto flex h-20 md:h-24 items-center px-4 sm:px-6 lg:px-8 relative justify-between">
        
        {/* Mobile Left Corner: Theme Toggle */}
        <div className="xl:hidden flex items-center">
          <ThemeToggle />
        </div>

        {/* Logo Section */}
        <div className="absolute left-1/2 -translate-x-1/2 xl:relative xl:left-0 xl:translate-x-0 flex items-center shrink-0">
          <Link href="/" className="flex items-center group py-1" prefetch={false}>
            <div className="relative h-12 w-40 sm:w-48 md:h-14 md:w-56 xl:h-16 xl:w-60 2xl:w-72 transition-all duration-300 group-hover:opacity-95">
              <Image
                src="/logo-light.png"
                alt="Aries PhysioCare"
                fill
                sizes="(max-width: 640px) 160px, (max-width: 1024px) 224px, 288px"
                className="object-contain block dark:hidden object-center xl:object-left"
                priority
              />
              <Image
                src="/logo-dark.png"
                alt="Aries PhysioCare"
                fill
                sizes="(max-width: 640px) 160px, (max-width: 1024px) 224px, 288px"
                className="object-contain hidden dark:block object-center xl:object-left"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Navigation Menu (Desktop Only) */}
        <nav className="hidden xl:flex items-center gap-x-2 min-[1350px]:gap-x-3 min-[1500px]:gap-x-5 px-2">
          <Link href="/" className="text-[13px] 2xl:text-[14px] font-bold hover:text-primary transition-colors whitespace-nowrap px-1" prefetch={false}>
            Home
          </Link>
          <Link href="/about" className="text-[13px] 2xl:text-[14px] font-bold hover:text-primary transition-colors whitespace-nowrap px-1" prefetch={false}>
            About
          </Link>

          {/* 3D Medical Labs */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-[13px] 2xl:text-[14px] font-bold hover:text-primary transition-colors px-1 focus:outline-none text-foreground whitespace-nowrap">
              <Compass className="h-3.5 w-3.5 text-primary" />
              <span>3D Labs</span>
              <ChevronDown className="h-3 w-3 opacity-60" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 glassmorphic p-2">
              <DropdownMenuLabel className="text-[11px] font-mono uppercase text-muted-foreground tracking-wider">
                Interactive Biomechanics
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/anatomy-lab" className="flex items-center gap-2.5 py-2 text-xs" prefetch={false}>
                  <Compass className="h-4 w-4 text-primary" />
                  <div>
                    <span className="font-bold text-foreground block">3D Anatomy Lab</span>
                    <span className="text-[10px] text-muted-foreground">Spine, Knee &amp; Shoulder Models</span>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/movement-lab" className="flex items-center gap-2.5 py-2 text-xs" prefetch={false}>
                  <Activity className="h-4 w-4 text-accent" />
                  <div>
                    <span className="font-bold text-foreground block">Kinematics Movement Lab</span>
                    <span className="text-[10px] text-muted-foreground">Real-time Kinematics Diagnostics</span>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/surgery-and-rehabilitation" className="flex items-center gap-2.5 py-2 text-xs" prefetch={false}>
                  <HeartPulse className="h-4 w-4 text-rose-500" />
                  <div>
                    <span className="font-bold text-foreground block">Surgery to Movement</span>
                    <span className="text-[10px] text-muted-foreground">Phased Post-Op NHS Pathways</span>
                  </div>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-[13px] 2xl:text-[14px] font-bold hover:text-primary transition-colors px-1 focus:outline-none text-foreground whitespace-nowrap">
              <span>Services</span>
              <ChevronDown className="h-3 w-3 opacity-60" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-72 glassmorphic p-2">
              <DropdownMenuLabel className="text-[11px] font-mono uppercase text-muted-foreground tracking-wider">
                Clinical Care Pathways
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {staticServices.map((service) => (
                <DropdownMenuItem key={service.id} asChild>
                  <Link href={`/services/${service.slug}`} className="py-2 text-xs font-medium" prefetch={false}>
                    {service.name}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/services" className="text-xs font-bold text-primary" prefetch={false}>
                  Explore All Services →
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/conditions" className="text-[13px] 2xl:text-[14px] font-bold hover:text-primary transition-colors whitespace-nowrap px-1" prefetch={false}>
            Conditions
          </Link>
          <Link href="/experts" className="text-[13px] 2xl:text-[14px] font-bold hover:text-primary transition-colors flex items-center gap-1 whitespace-nowrap px-1" prefetch={false}>
            <Users className="h-3.5 w-3.5" /> HCPC Clinicians
          </Link>
          <Link href="/locations" className="text-[13px] 2xl:text-[14px] font-bold hover:text-primary transition-colors whitespace-nowrap px-1" prefetch={false}>
            UK Coverage
          </Link>
          <Link href="/faq" className="hidden 2xl:flex text-[14px] font-bold hover:text-primary transition-colors whitespace-nowrap px-1" prefetch={false}>
            FAQ
          </Link>

          <div className="hidden min-[1600px]:flex items-center gap-2 border-l ml-1 pl-3 border-border/50">
            <Link href="/virtual-physiotherapy" className="text-[13px] 2xl:text-[14px] font-black hover:text-primary transition-colors flex items-center gap-1.5 text-accent whitespace-nowrap" prefetch={false}>
              <Video className="h-4 w-4 animate-pulse" /> Free Consultation
            </Link>
          </div>
        </nav>

        {/* Actions Section */}
        <div className="flex items-center gap-2 sm:gap-2.5 2xl:gap-3 shrink-0">
          <div className="hidden md:block">
            <LocationSelector current="Greater London" />
          </div>
          <div className="flex items-center">
            <ThemeToggle />
          </div>
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 2xl:px-4 2xl:py-2.5 rounded-full border border-primary/30 bg-primary/10 hover:bg-primary/20 text-primary text-xs 2xl:text-[13px] font-bold transition-all hover:scale-105 whitespace-nowrap shrink-0"
            prefetch={false}
          >
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Triage</span>
          </Link>
          <div className="hidden sm:inline-flex shrink-0">
            <BookAppointmentButton className="neon-primary-border bg-primary text-white hover:bg-primary/95 shadow-xl transition-all rounded-full px-4 py-2 2xl:px-6 2xl:py-2.5 text-xs 2xl:text-sm font-black tracking-wide hover:-translate-y-0.5 whitespace-nowrap shrink-0">
              Book Home Assessment
            </BookAppointmentButton>
          </div>
          <div className="xl:hidden flex items-center">
            <MobileMenu currentLocationName="Greater London" />
          </div>
        </div>

      </div>
    </header>
  );
}

function MobileMenu({ currentLocationName }: { currentLocationName: string | null }) {
  const [openCollapsible, setOpenCollapsible] = useState<string | null>(null);

  const handleCollapsibleChange = (name: string) => {
    setOpenCollapsible(prev => (prev === name ? null : name));
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="h-10 w-10">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] bg-background/95 backdrop-blur-md flex flex-col p-0 border-l">
        <SheetHeader className="p-6 pb-4 border-b">
          <SheetTitle>
            <Link href="/" className="flex items-center" prefetch={false}>
              <div className="relative h-12 w-48">
                <Image
                  src="/logo-light.png"
                  alt="Aries PhysioCare"
                  fill
                  className="object-contain block dark:hidden object-left"
                />
                <Image
                  src="/logo-dark.png"
                  alt="Aries PhysioCare"
                  fill
                  className="object-contain hidden dark:block object-left"
                />
              </div>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto">
          <nav className="flex flex-col gap-1 p-4 text-sm font-medium">
            <div className="mb-4">
              <LocationSelector current={currentLocationName} />
            </div>

            <Link href="/" className="py-2.5 px-2 hover:text-primary transition-colors" prefetch={false}>Home</Link>
            <Link href="/about" className="py-2.5 px-2 hover:text-primary transition-colors" prefetch={false}>About Us</Link>

            <Collapsible open={openCollapsible === '3d'} onOpenChange={() => handleCollapsibleChange('3d')}>
              <CollapsibleTrigger className="flex justify-between items-center w-full py-2.5 px-2 hover:text-primary transition-colors">
                <span className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-primary" /> 3D Medical Labs
                </span>
                {openCollapsible === '3d' ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="pl-6 flex flex-col gap-1 border-l ml-4 mt-1">
                  <Link href="/anatomy-lab" className="py-2 text-xs text-muted-foreground hover:text-primary" prefetch={false}>3D Anatomy Lab</Link>
                  <Link href="/movement-lab" className="py-2 text-xs text-muted-foreground hover:text-primary" prefetch={false}>Kinematics Movement Lab</Link>
                  <Link href="/surgery-and-rehabilitation" className="py-2 text-xs text-muted-foreground hover:text-primary" prefetch={false}>Surgery to Movement</Link>
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible open={openCollapsible === 'services'} onOpenChange={() => handleCollapsibleChange('services')}>
              <CollapsibleTrigger className="flex justify-between items-center w-full py-2.5 px-2 hover:text-primary transition-colors">
                <span>Services</span>
                {openCollapsible === 'services' ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="pl-6 flex flex-col gap-1 border-l ml-4 mt-1">
                  {staticServices.map(service => (
                    <Link key={service.id} href={`/services/${service.slug}`} className="py-2 text-xs text-muted-foreground hover:text-primary" prefetch={false}>
                      {service.name}
                    </Link>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Link href="/conditions" className="py-2.5 px-2 hover:text-primary transition-colors" prefetch={false}>Conditions Directory</Link>
            <Link href="/experts" className="py-2.5 px-2 hover:text-primary transition-colors" prefetch={false}>HCPC Registered Clinicians</Link>
            <Link href="/locations" className="py-2.5 px-2 hover:text-primary transition-colors" prefetch={false}>UK Coverage &amp; Postcodes</Link>
            <Link href="/resources" className="py-2.5 px-2 hover:text-primary transition-colors" prefetch={false}>Clinical Evidence Library</Link>
            <Link href="/contact" className="py-2.5 px-2 hover:text-primary transition-colors" prefetch={false}>Contact &amp; Triage</Link>
          </nav>
        </div>
        <div className="p-4 border-t mt-auto">
          <BookAppointmentButton className="w-full neon-accent-border">
            Book In-Home Assessment
          </BookAppointmentButton>
        </div>
      </SheetContent>
    </Sheet>
  );
}
