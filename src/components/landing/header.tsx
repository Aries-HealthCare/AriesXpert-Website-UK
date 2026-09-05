'use client';

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
  Loader2,
  MapPin,
  Globe,
  LocateFixed,
  Video,
  Users,
  Building2,
  Stethoscope,
  Compass,
  Activity,
  Sparkles,
  ShieldCheck
} from "lucide-react";
import { useState, useMemo } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import BookAppointmentButton from "../book-appointment-button";
import { usePathname, useRouter } from "next/navigation";
import { UKNations } from "@/lib/locations";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { services as staticServices } from "@/lib/placeholder-data";

const workWithUsLinks = [
  { href: "/work-with-us/for-physiotherapists", label: "For Physiotherapists" },
  { href: "/work-with-us/for-corporates", label: "For Corporates" },
  { href: "/work-with-us/for-investors", label: "For Investors" },
];

function capitalize(str: string) {
  if (!str) return '';
  return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export default function Header() {
  const pathname = usePathname();

  const currentLocationName = useMemo(() => {
    const parts = (pathname || '').split('/').filter(Boolean);
    if (parts[0] !== 'services' || parts.length < 3) return null;

    const ignoreKeywords = ['conditions', 'symptoms', 'therapies-offered', 'services-offered', 'services'];
    const geoSegments = [];

    for (let i = 2; i < parts.length; i++) {
      if (ignoreKeywords.includes(parts[i])) break;
      geoSegments.push(parts[i]);
    }

    if (geoSegments.length === 0) return null;
    const lastSeg = geoSegments[geoSegments.length - 1];
    return capitalize(lastSeg);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full max-w-full overflow-x-clip bg-background/95 backdrop-blur-xl border-b border-border/10 shadow-sm transition-all duration-300">
      <div className="w-full max-w-7xl 2xl:max-w-[1720px] mx-auto flex h-20 md:h-24 items-center px-4 sm:px-6 lg:px-8 justify-between gap-2">
        
        {/* Brand Logo & UK Directorate Badge */}
        <div className="flex items-center gap-3 shrink-0">
          <Link href="/" className="flex items-center group py-1" prefetch={false}>
            <div className="relative h-10 w-36 sm:h-12 sm:w-44 md:h-14 md:w-52 xl:h-16 xl:w-56 2xl:w-64 transition-all duration-300 group-hover:opacity-95">
              <Image
                src="/logo-light.png"
                alt="AriesXpert UK"
                fill
                sizes="(max-width: 640px) 144px, (max-width: 1024px) 208px, 256px"
                className="object-contain block dark:hidden object-left"
                priority
              />
              <Image
                src="/logo-dark.png"
                alt="AriesXpert UK"
                fill
                sizes="(max-width: 640px) 144px, (max-width: 1024px) 208px, 256px"
                className="object-contain hidden dark:block object-left"
                priority
              />
            </div>
          </Link>
          <div className="hidden min-[1500px]:flex items-center">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400">
              🇬🇧 UK
            </span>
          </div>
        </div>

        {/* Navigation Menu (Desktop Only with Progressive Disclosure to prevent horizontal overflow) */}
        <nav className="hidden xl:flex items-center gap-x-1.5 min-[1350px]:gap-x-2.5 min-[1500px]:gap-x-4 px-1">
          <Link href="/" className="text-[13px] 2xl:text-[14px] font-bold hover:text-primary transition-colors whitespace-nowrap px-1" prefetch={false}>
            Home
          </Link>
          <Link href="/about" className="text-[13px] 2xl:text-[14px] font-bold hover:text-primary transition-colors whitespace-nowrap px-1" prefetch={false}>
            About
          </Link>
          <ServicesDropdown />
          <Link href="/therapist" className="text-[13px] 2xl:text-[14px] font-bold hover:text-primary transition-colors flex items-center gap-1 whitespace-nowrap px-1" prefetch={false}>
            <Users className="h-3.5 w-3.5" /> Therapists
          </Link>
          <Link href="/clinic" className="text-[13px] 2xl:text-[14px] font-bold hover:text-primary transition-colors flex items-center gap-1 whitespace-nowrap px-1" prefetch={false}>
            <Building2 className="h-3.5 w-3.5" /> Clinic
          </Link>
          <div className="hidden min-[1380px]:block">
            <LabsDropdown />
          </div>
          <Link href="/blogs" className="hidden 2xl:flex text-[14px] font-bold hover:text-primary transition-colors whitespace-nowrap px-1" prefetch={false}>
            Blog
          </Link>
          <div className="hidden 2xl:block">
            <WorkWithUsDropdown />
          </div>

          <div className="hidden min-[1600px]:flex items-center gap-2 border-l ml-1 pl-3 border-border/50">
            <Link href="/free-tele-consultation" className="text-[13px] 2xl:text-[14px] font-black hover:text-primary transition-colors flex items-center gap-1.5 text-accent whitespace-nowrap" prefetch={false}>
              <Video className="h-4 w-4 animate-pulse" /> Free Consultation
            </Link>
          </div>
        </nav>

        {/* Actions Section */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 2xl:gap-3 shrink-0">
          <div className="hidden md:block">
            <LocationSelector current={currentLocationName} />
          </div>
          <div className="flex items-center">
            <ThemeToggle />
          </div>
          <Link
            href="/portal"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 2xl:px-4 2xl:py-2 rounded-full border border-primary/30 bg-primary/10 hover:bg-primary/20 text-primary text-xs 2xl:text-[13px] font-bold transition-all hover:scale-105 whitespace-nowrap shrink-0"
            prefetch={false}
          >
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Login</span>
          </Link>
          <div className="hidden sm:inline-flex shrink-0">
            <BookAppointmentButton className="neon-primary-border bg-primary text-white hover:bg-primary/95 shadow-xl transition-all rounded-full px-3.5 py-1.5 2xl:px-5 2xl:py-2 text-xs 2xl:text-sm font-black tracking-wide hover:-translate-y-0.5 whitespace-nowrap shrink-0">
              Book Home Visit
            </BookAppointmentButton>
          </div>
          <div className="xl:hidden flex items-center">
            <MobileMenu currentLocationName={currentLocationName} />
          </div>
        </div>
      </div>
    </header>
  );
}

function LocationSelector({ current }: { current: string | null }) {
  const pathname = usePathname();
  const router = useRouter();
  const { toast } = useToast();
  const [isDetecting, setIsDetecting] = useState(false);
  const serviceSlug = (pathname || '').split('/')[2] || 'physiotherapy';

  const handleCitySelect = (cityName: string, url: string) => {
    localStorage.setItem("user_city", cityName);
    window.dispatchEvent(new Event('storage'));
    router.push(url);
  };

  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      toast({ variant: "destructive", title: "Geolocation Not Supported", description: "Your browser does not support location services." });
      return;
    }

    setIsDetecting(true);
    navigator.geolocation.getCurrentPosition(
      () => {
        setTimeout(() => {
          setIsDetecting(false);
          localStorage.setItem("user_city", "London");
          window.dispatchEvent(new Event('storage'));
          toast({ title: "Location Detected", description: "Showing services for Greater London." });
          router.push(`/services/${serviceSlug}/england/london`);
        }, 1200);
      },
      () => {
        setIsDetecting(false);
        toast({ variant: "destructive", title: "Access Denied", description: "Please enable location access or select your UK hub below." });
      }
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-auto py-1.5 px-2.5 sm:px-3 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 text-primary flex items-center gap-1.5 transition-all">
          <MapPin className="h-3.5 w-3.5 fill-primary/20" />
          <span className="text-[11px] font-bold tracking-tight whitespace-nowrap">
            {current || "London"}
          </span>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 glassmorphic max-h-[80vh] overflow-y-auto" align="end">
        <DropdownMenuLabel className="flex items-center gap-2 font-headline text-xs uppercase tracking-wider text-muted-foreground font-bold">
          <Globe className="w-4 h-4 text-primary" />
          UK Service Hubs
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={handleDetectLocation} className="cursor-pointer text-primary font-bold flex items-center gap-2 py-2.5">
          {isDetecting ? <Loader2 className="h-4 w-4 animate-spin" /> : <LocateFixed className="h-4 w-4" />}
          <span>Detect My Location</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {UKNations.map(nation => (
          <div key={nation.slug}>
            <div className="px-2 py-1 text-[10px] uppercase font-bold text-muted-foreground tracking-widest bg-muted/30">{nation.name}</div>
            {nation.cities.map(city => (
              <DropdownMenuItem
                key={city.slug}
                onClick={() => handleCitySelect(city.name, `/services/${serviceSlug}/${nation.slug}/${city.slug}`)}
                className="flex items-center justify-between cursor-pointer py-1.5"
              >
                <span className="text-xs">{city.name}</span>
                {(current === city.name || (!current && city.name === 'London')) && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
              </DropdownMenuItem>
            ))}
          </div>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/locations" className="text-xs text-center text-primary font-bold w-full block py-1.5">
            View All UK Locations →
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function ServicesDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 text-[13px] 2xl:text-[14px] font-bold hover:text-primary transition-colors px-1 focus:outline-none text-foreground whitespace-nowrap">
        <span>Services</span>
        <ChevronDown className="h-3.5 w-3.5 opacity-60" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72 glassmorphic p-2">
        <DropdownMenuLabel className="text-[11px] font-mono uppercase text-muted-foreground tracking-wider">
          Clinical Disciplines
        </DropdownMenuLabel>
        {staticServices.map((service) => (
          <DropdownMenuItem key={service.id} asChild>
            <Link href={`/services/${service.slug}`} className="py-1.5 text-xs font-medium" prefetch={false}>
              {service.name}
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem asChild>
          <Link href="/virtual-physiotherapy" className="py-1.5 text-xs font-medium text-accent flex items-center gap-1.5" prefetch={false}>
            <Video className="w-3.5 h-3.5" /> Virtual Tele-Physiotherapy
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="text-[11px] font-mono uppercase text-muted-foreground tracking-wider">
          Interactive Biomechanics
        </DropdownMenuLabel>
        <DropdownMenuItem asChild>
          <Link href="/anatomy-lab" className="flex items-center gap-2 py-1.5 text-xs" prefetch={false}>
            <Activity className="h-3.5 w-3.5 text-primary" /> 3D Anatomy Lab
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/movement-lab" className="flex items-center gap-2 py-1.5 text-xs" prefetch={false}>
            <Sparkles className="h-3.5 w-3.5 text-accent" /> Kinematics Movement Lab
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/surgery-and-rehabilitation" className="flex items-center gap-2 py-1.5 text-xs" prefetch={false}>
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" /> Surgery to Movement
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuLabel className="text-[11px] font-mono uppercase text-muted-foreground tracking-wider">
          Specialists &amp; Hubs
        </DropdownMenuLabel>
        <DropdownMenuItem asChild>
          <Link href="/therapist" className="flex items-center gap-2 py-1.5 text-xs font-medium" prefetch={false}>
            <Users className="h-3.5 w-3.5 text-primary" /> Our HCPC Therapists
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/clinic" className="flex items-center gap-2 py-1.5 text-xs font-medium" prefetch={false}>
            <Building2 className="h-3.5 w-3.5 text-primary" /> Flagship Clinics (Canary Wharf &amp; Deansgate)
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/services" className="text-xs font-bold text-primary py-1.5" prefetch={false}>
            Explore All Services →
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function LabsDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 text-[13px] 2xl:text-[14px] font-bold hover:text-primary transition-colors px-1 focus:outline-none text-foreground whitespace-nowrap">
        <Compass className="h-3.5 w-3.5 text-primary" />
        <span>3D Labs</span>
        <ChevronDown className="h-3.5 w-3.5 opacity-60" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 glassmorphic p-2">
        <DropdownMenuLabel className="text-[11px] font-mono uppercase text-muted-foreground tracking-wider">
          Interactive Biomechanics
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/anatomy-lab" className="flex items-center gap-2 py-2" prefetch={false}>
            <Activity className="h-4 w-4 text-primary" />
            <div>
              <div className="font-semibold text-xs">3D Anatomy Lab</div>
              <div className="text-[10px] text-muted-foreground">Interactive Musculoskeletal Engine</div>
            </div>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/movement-lab" className="flex items-center gap-2 py-2" prefetch={false}>
            <Sparkles className="h-4 w-4 text-accent" />
            <div>
              <div className="font-semibold text-xs">Kinematics Lab</div>
              <div className="text-[10px] text-muted-foreground">Range of Motion &amp; Gait Analysis</div>
            </div>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/surgery-and-rehabilitation" className="flex items-center gap-2 py-2" prefetch={false}>
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            <div>
              <div className="font-semibold text-xs">Surgery to Movement</div>
              <div className="text-[10px] text-muted-foreground">Pre &amp; Post-Op Recovery Pathways</div>
            </div>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function WorkWithUsDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 text-[13px] 2xl:text-[14px] font-bold hover:text-primary transition-colors px-1 focus:outline-none text-foreground whitespace-nowrap">
        <span>Work With Us</span>
        <ChevronDown className="h-3.5 w-3.5 opacity-60" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 glassmorphic">
        {workWithUsLinks.map((link) => (
          <DropdownMenuItem key={link.href} asChild>
            <Link href={link.href} prefetch={false}>
              {link.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
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
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[340px] bg-background/95 backdrop-blur-md flex flex-col p-0 border-l">
        <SheetHeader className="p-5 pb-3 border-b">
          <SheetTitle>
            <Link href="/" className="flex flex-col gap-1" prefetch={false}>
              <div className="relative h-10 w-44">
                <Image
                  src="/logo-light.png"
                  alt="AriesXpert UK"
                  fill
                  className="object-contain block dark:hidden object-left"
                />
                <Image
                  src="/logo-dark.png"
                  alt="AriesXpert UK"
                  fill
                  className="object-contain hidden dark:block object-left"
                />
              </div>
              <span className="text-[10px] font-mono text-muted-foreground font-semibold">
                United Kingdom Healthcare
              </span>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto">
          <nav className="flex flex-col gap-1 p-4">
            <div className="mb-3">
              <LocationSelector current={currentLocationName} />
            </div>

            <Link href="/" className="text-base font-semibold hover:text-primary transition-colors py-2 px-2" prefetch={false}>
              Home
            </Link>
            <Link href="/about" className="text-base font-semibold hover:text-primary transition-colors py-2 px-2" prefetch={false}>
              About Us
            </Link>

            {/* Services Collapsible */}
            <Collapsible open={openCollapsible === 'services'} onOpenChange={() => handleCollapsibleChange('services')}>
              <CollapsibleTrigger className="flex justify-between items-center w-full text-base font-semibold hover:text-primary transition-colors py-2 px-2">
                <span>Services</span>
                {openCollapsible === 'services' ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="pl-5 flex flex-col gap-1 border-l ml-3 mt-1">
                  {staticServices.map(service => (
                    <Link key={service.id} href={`/services/${service.slug}`} className="text-sm text-muted-foreground hover:text-primary transition-colors py-1.5" prefetch={false}>
                      {service.name}
                    </Link>
                  ))}
                  <Link href="/virtual-physiotherapy" className="text-sm font-medium text-accent hover:text-primary transition-colors py-1.5 flex items-center gap-1.5" prefetch={false}>
                    <Video className="h-3.5 w-3.5" /> Virtual Tele-Physiotherapy
                  </Link>
                  <Link href="/therapist" className="text-sm font-semibold text-primary transition-colors py-1.5 flex items-center gap-1.5" prefetch={false}>
                    <Users className="h-3.5 w-3.5" /> Our Therapists
                  </Link>
                  <Link href="/clinic" className="text-sm font-semibold text-primary transition-colors py-1.5 flex items-center gap-1.5" prefetch={false}>
                    <Building2 className="h-3.5 w-3.5" /> Flagship Clinics
                  </Link>
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* 3D Labs Collapsible */}
            <Collapsible open={openCollapsible === '3d'} onOpenChange={() => handleCollapsibleChange('3d')}>
              <CollapsibleTrigger className="flex justify-between items-center w-full text-base font-semibold hover:text-primary transition-colors py-2 px-2">
                <span className="flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-primary" /> 3D Medical Labs
                </span>
                {openCollapsible === '3d' ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="pl-5 flex flex-col gap-1 border-l ml-3 mt-1">
                  <Link href="/anatomy-lab" className="text-sm text-muted-foreground hover:text-primary py-1.5" prefetch={false}>
                    3D Anatomy Lab
                  </Link>
                  <Link href="/movement-lab" className="text-sm text-muted-foreground hover:text-primary py-1.5" prefetch={false}>
                    Kinematics Movement Lab
                  </Link>
                  <Link href="/surgery-and-rehabilitation" className="text-sm text-muted-foreground hover:text-primary py-1.5" prefetch={false}>
                    Surgery to Movement
                  </Link>
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Link href="/therapist" className="text-base font-semibold hover:text-primary transition-colors py-2 px-2 flex items-center gap-1.5" prefetch={false}>
              <Users className="h-4 w-4" /> HCPC Specialists
            </Link>
            <Link href="/clinic" className="text-base font-semibold hover:text-primary transition-colors py-2 px-2 flex items-center gap-1.5" prefetch={false}>
              <Building2 className="h-4 w-4" /> Flagship Clinics
            </Link>
            <Link href="/free-tele-consultation" className="text-base font-semibold text-accent hover:text-primary transition-colors py-2 px-2 flex items-center gap-1.5" prefetch={false}>
              <Video className="h-4 w-4 animate-pulse" /> Free Consultation
            </Link>
            <Link href="/blogs" className="text-base font-semibold hover:text-primary transition-colors py-2 px-2" prefetch={false}>
              Health Insights Blog
            </Link>

            {/* Work With Us Collapsible */}
            <Collapsible open={openCollapsible === 'work'} onOpenChange={() => handleCollapsibleChange('work')}>
              <CollapsibleTrigger className="flex justify-between items-center w-full text-base font-semibold hover:text-primary transition-colors py-2 px-2">
                <span>Work With Us</span>
                {openCollapsible === 'work' ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="pl-5 flex flex-col gap-1 border-l ml-3 mt-1">
                  {workWithUsLinks.map(link => (
                    <Link key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors py-1.5" prefetch={false}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Link href="/contact" className="text-base font-semibold hover:text-primary transition-colors py-2 px-2" prefetch={false}>
              Contact &amp; Triage
            </Link>

            {/* Clinician Portal Section */}
            <div className="mt-3 pt-3 border-t border-border/40">
              <div className="text-[11px] uppercase font-bold text-muted-foreground tracking-wider px-2 mb-2">
                AriesXpert Professionals
              </div>
              <Link
                href="/portal"
                className="flex items-center justify-between py-2 px-3 rounded-xl bg-primary/10 text-primary font-bold text-xs mb-2"
                prefetch={false}
              >
                <div className="flex items-center gap-2">
                  <Stethoscope className="h-3.5 w-3.5" />
                  <span>Provider Login</span>
                </div>
                <span className="text-[10px] bg-primary text-white px-2 py-0.5 rounded-full font-bold">Sign In →</span>
              </Link>
              <Link
                href="/work-with-us/for-physiotherapists"
                className="flex items-center justify-between py-1.5 px-3 text-xs text-muted-foreground hover:text-foreground font-medium"
                prefetch={false}
              >
                <span>Join as Physiotherapist</span>
                <span>Register →</span>
              </Link>
            </div>
          </nav>
        </div>
        <div className="p-4 border-t mt-auto">
          <BookAppointmentButton className="w-full neon-accent-border">
            Book Home Visit
          </BookAppointmentButton>
        </div>
      </SheetContent>
    </Sheet>
  );
}
