'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Clock, BookOpen, ChevronRight } from "lucide-react";

const UK_BLOG_POSTS = [
  {
    id: "p1",
    slug: "nhs-waiting-lists-vs-private-in-home-physio",
    title: "Navigating NHS Waiting Lists: How Private In-Home Physiotherapy Accelerates Joint Recovery",
    summary: "With average elective surgery waiting times and post-discharge gaps, learn how immediate in-home Chartered Physiotherapy preserves joint ROM and prevents irreversible stiffness.",
    serviceTag: "NHS Step-Down Care",
    readTime: "6 min read",
    author: "Alastair Wright, MCSP (PH108942)",
    date: "Aug 2026",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=85&w=1600",
  },
  {
    id: "p2",
    slug: "bupa-axa-physiotherapy-direct-billing-guide",
    title: "How to Claim Physiotherapy on Bupa, AXA Health & Aviva: Complete Patient Guide",
    summary: "A step-by-step walkthrough on securing your insurer pre-authorization number, understanding policy excess, and enjoying zero out-of-pocket payments via Healthcode.",
    serviceTag: "Insurance & Direct Billing",
    readTime: "5 min read",
    author: "Charlotte Sinclair, MCSP (PH114298)",
    date: "Aug 2026",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=85&w=1600",
  },
  {
    id: "p3",
    slug: "total-knee-replacement-home-recovery-milestones",
    title: "Total Knee Replacement (TKR): The 12-Week Post-Discharge In-Home Milestone Roadmap",
    summary: "From week 1 passive extension to week 12 independent outdoor walking. Discover essential milestones, swelling management, and progressive eccentric loading.",
    serviceTag: "Post-Surgical Recovery",
    readTime: "7 min read",
    author: "James Callum, MCSP (PH097431)",
    date: "Jul 2026",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=85&w=1600",
  },
];

export default function BlogSection() {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6 relative z-10 space-y-12">
        <div className="max-w-4xl mx-auto text-center space-y-6 flex flex-col items-center animate-reveal-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em] shadow-sm">
            <BookOpen className="w-4 h-4" /> UK Health Directorate
          </div>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Clinical Insights &amp; <span className="premium-gradient-text">Health Library</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
            Written by senior Chartered Physiotherapists (MCSP). Grounded in NICE clinical guidelines and peer-reviewed biomedical research.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {UK_BLOG_POSTS.map((post) => (
            <Link key={post.id} href={`/resources/${post.slug}`} prefetch={false} className="group block h-full">
              <Card className="premium-card h-full flex flex-col justify-between overflow-hidden">
                <div className="space-y-4">
                  {/* Image */}
                  <div className="relative h-52 w-full overflow-hidden bg-muted">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full glassmorphic text-white text-[11px] font-bold font-mono">
                      {post.serviceTag}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 pt-0 space-y-3">
                    <div className="flex items-center gap-2 text-[11px] font-mono text-muted-foreground">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>

                    <h3 className="font-headline font-bold text-lg text-foreground group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="flex items-center justify-between text-xs font-bold text-primary pt-3 border-t border-border/40">
                    <span className="font-mono text-muted-foreground">{post.author}</span>
                    <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read Article <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All Resources */}
        <div className="text-center pt-4">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-card hover:bg-muted border border-border text-xs sm:text-sm font-semibold text-foreground transition-all shadow-sm"
            prefetch={false}
          >
            <span>Explore Complete UK Clinical Evidence Library</span>
            <ChevronRight className="w-4 h-4 text-primary" />
          </Link>
        </div>

      </div>
    </section>
  );
}
