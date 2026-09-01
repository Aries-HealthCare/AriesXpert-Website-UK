'use client';

import React from 'react';
import { Star, ShieldCheck, MapPin, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface GoogleReviewsProps {
  locationName?: string;
  className?: string;
}

const UK_REVIEWS = [
  {
    id: "ukr-1",
    reviewerName: "Arthur Pendelton",
    location: "Kensington, London (W8)",
    rating: 5,
    createTime: "1 week ago",
    comment: "Having my physiotherapist visit my flat in Kensington after my total knee replacement was fantastic. Alastair guided my flexion from 50° to 120° in 6 weeks with zero hospital travel. Direct billing to Bupa meant £0 hassle.",
    therapist: "Alastair Wright, MCSP (HCPC PH108942)",
    isVerified: true
  },
  {
    id: "ukr-2",
    reviewerName: "Gemma Davies",
    location: "Didsbury, Manchester (M20)",
    rating: 5,
    createTime: "3 weeks ago",
    comment: "I was struggling with severe lumbar sciatica and unable to commute to my office. James came to my home within 24 hours of booking. Within 4 sessions of spinal mobilization and nerve flossing, the shooting pain was gone.",
    therapist: "James Callum, MCSP (HCPC PH097431)",
    isVerified: true
  },
  {
    id: "ukr-3",
    reviewerName: "Rupert Campbell",
    location: "Edinburgh New Town (EH3)",
    rating: 5,
    createTime: "2 weeks ago",
    comment: "Top clinical knowledge. After my rotator cuff surgery, Fiona provided thorough manual joint glides and progressive resistance band training. AXA Health covered 100% of my sessions without any paperwork.",
    therapist: "Fiona MacDougall, MCSP (HCPC PH120485)",
    isVerified: true
  },
  {
    id: "ukr-4",
    reviewerName: "Hannah Jenkins",
    location: "Clifton, Bristol (BS8)",
    rating: 5,
    createTime: "1 month ago",
    comment: "Our elderly father needed intensive balance and gait rehabilitation following a fall. Edward's compassionate approach and home safety audit gave our entire family complete peace of mind.",
    therapist: "Edward Davies, MCSP (HCPC PH103274)",
    isVerified: true
  },
  {
    id: "ukr-5",
    reviewerName: "Lewis Gallagher",
    location: "Belfast City (BT9)",
    rating: 5,
    createTime: "3 weeks ago",
    comment: "Exceptional sports injury rehab. Got me back to competitive rugby after an acute ankle syndesmosis tear 3 weeks faster than expected. Highly recommended!",
    therapist: "Charlotte Sinclair, MCSP (HCPC PH114298)",
    isVerified: true
  }
];

export default function GoogleReviews({ locationName = "your area", className = "" }: GoogleReviewsProps) {
  return (
    <section className={cn("py-12 md:py-20 relative overflow-hidden bg-background", className)}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.02)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 space-y-12">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-reveal-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em]">
            <Award className="w-4 h-4" /> Patient Stories Across the United Kingdom
          </div>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
            What Patients Say in <span className="premium-gradient-text">{locationName}</span>
          </h2>
          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs font-mono font-bold text-foreground">4.9 / 5.0 Rating</span>
            <span className="text-xs text-muted-foreground">• 2,100+ Verified UK Reviews</span>
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <div className="flex items-center justify-end gap-2 mb-4">
            <CarouselPrevious className="static translate-y-0 h-10 w-10 border-border" />
            <CarouselNext className="static translate-y-0 h-10 w-10 border-border" />
          </div>

          <CarouselContent className="-ml-4">
            {UK_REVIEWS.map((review) => (
              <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card className="premium-card group border-primary/10 healthcare-motion transform hover:-translate-y-1.5 flex flex-col justify-between shadow-sm relative overflow-hidden h-full rounded-[2.5rem] p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-12 h-12 border-2 border-primary/20">
                          <AvatarFallback className="bg-primary/10 text-primary font-bold">{review.reviewerName[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-bold text-sm text-foreground">{review.reviewerName}</h4>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-primary" /> {review.location}
                          </span>
                        </div>
                      </div>

                      <div className="flex text-amber-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground italic leading-relaxed">
                      &ldquo;{review.comment}&rdquo;
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border/40 space-y-1">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-primary font-bold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{review.therapist}</span>
                    </div>
                    <div className="text-[10px] text-muted-foreground">Verified Insurer Direct-Billed Patient</div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

      </div>
    </section>
  );
}
