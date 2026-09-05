'use client';

import React from 'react';
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import WhatsAppButton from '@/components/whatsapp-button';
import MobileCtaFooter from '@/components/mobile-cta-footer';

export default function SiteLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary selection:text-white w-full max-w-full overflow-x-clip">
      <Header />
      <main className="flex-grow w-full max-w-full overflow-x-clip">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCtaFooter />
    </div>
  );
}
