'use client';

import React from "react";
import Link from "next/link";
import { 
  Home, 
  Video, 
  Sparkles, 
  Activity, 
  ShieldCheck, 
  BrainCircuit, 
  Dumbbell, 
  HeartPulse, 
  Users, 
  ChevronRight 
} from "lucide-react";

const UK_SERVICES = [
  {
    title: "In-Home Physiotherapy",
    slug: "in-home-physiotherapy",
    description: "1-on-1 Chartered Physiotherapy delivered in the comfort of your home.",
    icon: Home,
    tag: "Most Popular",
  },
  {
    title: "Virtual Tele-Rehabilitation",
    slug: "virtual-physiotherapy",
    description: "Encrypted HD video assessments and biomechanical exercise correction.",
    icon: Video,
    tag: "Fastest Access",
  },
  {
    title: "Post-Surgical & NHS Step-Down",
    slug: "post-surgical-rehabilitation",
    description: "Accelerated joint recovery for TKR, THR, and spinal surgeries.",
    icon: ShieldCheck,
    tag: "Clinical Specialty",
  },
  {
    title: "Sports Injury & Concussion",
    slug: "sports-rehabilitation",
    description: "Evidence-informed return-to-play protocols for ACL, rotator cuff, and runners.",
    icon: Dumbbell,
    tag: "Performance",
  },
  {
    title: "Neurological & Stroke Care",
    slug: "neurological-rehabilitation",
    description: "Bobath-based neuro-rehabilitation for stroke, MS, and Parkinson's.",
    icon: BrainCircuit,
    tag: "Specialist Care",
  },
  {
    title: "Elderly Fall Prevention",
    slug: "geriatric-physiotherapy",
    description: "Home safety audits, vestibular balance conditioning, and gait stability.",
    icon: Users,
    tag: "Independence",
  },
];

export default function ServicesStrip() {
  const displayServices = [...UK_SERVICES, ...UK_SERVICES, ...UK_SERVICES];

  return (
    <section className="py-8 bg-background border-y border-border/40 overflow-hidden relative">
      <div className="relative w-full overflow-hidden group">
        <div className="flex w-max gap-6 animate-scroll-strip hover:[animation-play-state:paused]">
          {displayServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={`${service.slug}-${index}`}
                href={`/services/${service.slug}`}
                prefetch={false}
                className="w-[280px] sm:w-[320px] shrink-0 block"
              >
                <div className="premium-card p-5 h-full flex flex-col justify-between hover:border-primary/40 hover:shadow-lg transition-all group/item">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-secondary text-primary">
                        {service.tag}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-headline font-bold text-base text-foreground group-hover/item:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-primary pt-3 border-t border-border/40 mt-3">
                    <span>Learn More</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover/item:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Edge Fades */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>

      <style jsx>{`
        @keyframes scroll-strip {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        .animate-scroll-strip {
          animation: scroll-strip 45s linear infinite;
        }
      `}</style>
    </section>
  );
}
