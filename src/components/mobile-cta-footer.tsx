'use client';

import React, { useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { CalendarPlus, Video, PhoneCall } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BookAppointmentButton from './book-appointment-button';

export default function MobileCtaFooter() {
  const pathname = usePathname();

  const isHidden = useMemo(() => {
    if (!pathname) return false;
    return pathname.startsWith('/book-assessment') || pathname.startsWith('/virtual-physiotherapy/session');
  }, [pathname]);

  if (isHidden) {
    return null;
  }

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 glassmorphic border-t border-t-primary/30 shadow-[0_-4px_16px_rgba(0,128,128,0.1)] rounded-t-2xl p-2 pb-safe-offset-4 bg-background/90 backdrop-blur-xl">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-3 gap-2">
          {/* Toll Free Call */}
          <Button asChild variant="outline" className="flex flex-col h-16 items-center justify-center gap-1 text-xs border-primary/30 bg-primary/5 text-primary hover:bg-primary/10">
            <a href="tel:08002743785">
              <PhoneCall className="h-5 w-5 mb-1" />
              <span>0800 ARIES</span>
            </a>
          </Button>

          {/* Book In-Home Assessment */}
          <BookAppointmentButton
            className="flex flex-col h-16 items-center justify-center gap-1 text-xs font-bold shadow-lg"
          >
            <CalendarPlus className="h-5 w-5 mb-1" />
            <span>Book Home</span>
          </BookAppointmentButton>

          {/* Free Tele-Consultation */}
          <Button asChild variant="outline" className="flex flex-col h-16 items-center justify-center gap-1 text-xs border-border text-foreground hover:bg-muted">
            <Link href="/virtual-physiotherapy" prefetch={false}>
              <Video className="h-5 w-5 mb-1 text-primary animate-pulse" />
              <span>Free Call</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
